import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./indicator";
import "./editor";
import "./variants/minimal";
import "./variants/horizon";
import {
  Config,
  Entity,
  ExtendedHomeAssistant,
  InclinometerVariant,
} from "./types";

// Display-only Lovelace card.
//
// All calibration (orientation, pitch/roll compensation, zero) lives
// in the SmartVan.io add-on UI. This card just visualises the
// `adjusted_pitch_angle` and `adjusted_roll_angle` sensors of a
// chosen inclinometer device, in one of three style variants.
@customElement("smartvan-io-inclinometer")
class SmartVanIOInclinometerCard extends LitElement {
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;
  @property({ attribute: false }) public config!: Config;

  static getConfigElement() {
    return document.createElement("smartvan-io-inclinometer-editor");
  }

  static getStubConfig() {
    return { device: "", variant: "classic" };
  }

  static styles = css`
    :host {
      display: block;
    }
    ha-card {
      padding: 12px;
    }
    .header {
      font-weight: 600;
      padding: 4px 4px 12px;
      color: var(--primary-text-color);
    }
    .placeholder {
      padding: 16px;
      color: var(--secondary-text-color);
      text-align: center;
    }
    .pair {
      display: flex;
      gap: 8px;
    }
    .pair > * {
      flex: 1;
      text-align: center;
    }
  `;

  public setConfig(config: Config) {
    // Never throw — HA's card preview pane keeps the card stuck in an
    // error state if setConfig throws on the initial stub config (device
    // is empty until the user picks one). Render a placeholder instead.
    this.config = { variant: "classic", ...config };
  }

  render() {
    if (!this.config) return html`<ha-card>Loading…</ha-card>`;

    if (!this.config.device) {
      return html`
        <ha-card>
          <div class="placeholder">
            Pick a SmartVan.io inclinometer in the editor.
          </div>
        </ha-card>
      `;
    }

    // Resolve pitch/roll entities every render — caching them as @state
    // and using updated() to populate them was causing stale lookups
    // when the user changed devices, since the early-out short-circuited
    // re-fetching. Render-time lookup is cheap and always fresh.
    const entities = this._entitiesForDevice(this.config.device);
    const pitchEntity = entities.find((id) => id.endsWith("_adjusted_pitch_angle"));
    const rollEntity = entities.find((id) => id.endsWith("_adjusted_roll_angle"));

    if (!pitchEntity || !rollEntity) {
      return html`
        <ha-card>
          <div class="placeholder">
            Configure this card in the SmartVan.io add-on, then come back.
          </div>
        </ha-card>
      `;
    }

    const pitch = this._readNumber(pitchEntity);
    const roll = this._readNumber(rollEntity);
    const variant: InclinometerVariant = this.config.variant ?? "classic";

    return html`
      <ha-card>
        <div class="header">Pitch and Roll</div>
        ${this._renderVariant(variant, pitch, roll)}
      </ha-card>
    `;
  }

  private _renderVariant(
    variant: InclinometerVariant,
    pitch: number,
    roll: number
  ) {
    switch (variant) {
      case "minimal":
        return html`
          <smartvan-io-inclinometer-minimal
            .pitch=${pitch}
            .roll=${roll}
          ></smartvan-io-inclinometer-minimal>
        `;
      case "horizon":
        return html`
          <smartvan-io-inclinometer-horizon
            .pitch=${pitch}
            .roll=${roll}
          ></smartvan-io-inclinometer-horizon>
        `;
      case "classic":
      default:
        return html`
          <div class="pair">
            <smartvan-io-inclinometer-indicator
              .angle=${pitch}
              .inverted=${!!this.config.pitch_inverted}
              name="Pitch"
            ></smartvan-io-inclinometer-indicator>
            <smartvan-io-inclinometer-indicator
              .angle=${roll}
              .inverted=${!!this.config.roll_inverted}
              name="Roll"
            ></smartvan-io-inclinometer-indicator>
          </div>
        `;
    }
  }

  private _readNumber(entity_id: string): number {
    const state = this.hass.states[entity_id]?.state;
    const n = parseFloat(state);
    return isNaN(n) ? NaN : n;
  }

  private _entitiesForDevice(device: string): string[] {
    if (!this.hass?.entities) return [];
    return Object.values(this.hass.entities)
      .filter((entity: any) => entity.device_id === device)
      .map((entity: any) => entity.entity_id);
  }

  getCardSize() {
    return 3;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer": SmartVanIOInclinometerCard;
  }
}

if (window.customCards) {
  window.customCards.push({
    type: "smartvan-io-inclinometer",
    name: "SmartVan.io Inclinometer",
    description:
      "Display-only card for SmartVan.io inclinometer modules. Pick a visual style; calibrate in the SmartVan.io add-on.",
    preview: true,
  });
}
