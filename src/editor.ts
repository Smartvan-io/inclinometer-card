import { LitElement, html, nothing, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, LovelaceCardEditor } from "custom-card-helpers";
import {
  Config,
  Device,
  ExtendedHomeAssistant,
  InclinometerVariant,
  VARIANT_OPTIONS,
} from "./types";

// Calibration / orientation / compensation are configured in the
// SmartVan.io add-on UI (Home Assistant sidebar). The card editor
// only holds display preferences.
@customElement("smartvan-io-inclinometer-editor")
class SmartVanIOInclinometerCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;

  @state() private _possibleDevices: Device[] = [];
  @state() private _config: Config = {
    type: "custom:smartvan-io-inclinometer",
    device: "",
    variant: "classic",
  };

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .full-width {
      width: 100%;
    }
    .row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .hint {
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
  `;

  public setConfig(config: Config): void {
    // Match the integration's DeviceInfo: manufacturer="SmartVan.io" and a
    // device identifier starting with "smartvanio-inclinometer-". The display
    // model string can vary, so we don't rely on it for filtering — the
    // identifier prefix is what's stable.
    this._possibleDevices = Object.values(this.hass?.devices || {})
      .filter((item: any) => item.manufacturer === "SmartVan.io")
      .filter((item: any) =>
        (item.identifiers || []).some(
          (id: [string, string]) =>
            id[0] === "smartvanio" && id[1]?.startsWith("smartvanio-inclinometer-")
        )
      );

    // If the user only has one inclinometer, pre-select it.
    if (!config.device && this._possibleDevices.length === 1) {
      fireEvent(this, "config-changed", {
        config: { ...config, device: this._possibleDevices[0].id },
      });
    }

    this._config = { variant: "classic", ...config };
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    return html`
      <div class="card-config">
        <ha-select
          class="full-width"
          label="Inclinometer"
          @closed=${(e: Event) => e.stopPropagation()}
          @selected=${(e: any) => this._setDevice(e.target.value)}
          .value=${this._config.device}
        >
          ${this._possibleDevices.map(
            (option) => html`
              <mwc-list-item .value=${option.id}>${option.name}</mwc-list-item>
            `
          )}
        </ha-select>

        <ha-select
          class="full-width"
          label="Style"
          @closed=${(e: Event) => e.stopPropagation()}
          @selected=${(e: any) => this._setVariant(e.target.value)}
          .value=${this._config.variant ?? "classic"}
        >
          ${VARIANT_OPTIONS.map(
            (option) => html`
              <mwc-list-item .value=${option.value}>${option.label}</mwc-list-item>
            `
          )}
        </ha-select>

        <div class="row">
          <span>Invert pitch direction</span>
          <ha-switch
            .checked=${!!this._config.pitch_inverted}
            @change=${(e: any) => this._setBool("pitch_inverted", e.target.checked)}
          ></ha-switch>
        </div>

        <div class="row">
          <span>Invert roll direction</span>
          <ha-switch
            .checked=${!!this._config.roll_inverted}
            @change=${(e: any) => this._setBool("roll_inverted", e.target.checked)}
          ></ha-switch>
        </div>

        <div class="hint">
          Calibration (orientation, pitch/roll compensation, zero) lives in
          the SmartVan.io add-on — open it from the Home&nbsp;Assistant sidebar.
        </div>
      </div>
    `;
  }

  private _setDevice(device: string) {
    fireEvent(this, "config-changed", {
      config: { ...this._config, device },
    });
  }

  private _setVariant(variant: InclinometerVariant) {
    fireEvent(this, "config-changed", {
      config: { ...this._config, variant },
    });
  }

  private _setBool(key: "pitch_inverted" | "roll_inverted", value: boolean) {
    fireEvent(this, "config-changed", {
      config: { ...this._config, [key]: value },
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-editor": SmartVanIOInclinometerCardEditor;
  }
}
