import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent } from "custom-card-helpers";
import "./dialog";
import "./indicator";
import "./editor";
import { Config, Device, Entity, ExtendedHomeAssistant } from "src/types";

@customElement("smartvan-io-inclinometer")
class SmartVanIOInclinometerCard extends LitElement {
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;
  @property({ attribute: false }) public config!: Config;

  @property({ attribute: false }) public entities!: {
    actual_pitch_angle: Entity;
    actual_roll_angle: Entity;
    adjusted_pitch_angle: Entity;
    adjusted_roll_angle: Entity;
    calibrate_pitch: Entity;
    calibrate_roll: Entity;
    orientation: Entity;
    pitch_adjustment_angle: Entity;
    reset_pitch_adjustment_angle: Entity;
    reset_roll_adjustment_angle: Entity;
    restart_with_factory_default_settings: Entity;
    roll_adjustment_angle: Entity;
    toggle_inclinometer: Entity;
  };
  @property({ attribute: false }) private possibleDevices: Device[] = [];

  @state() private _pitchState = "";
  @state() private _rollState = "";
  @state() private _isEnabled: boolean = false;

  static getConfigElement() {
    return document.createElement("smartvan-io-inclinometer-editor");
  }

  static styles = css`
    .wrapper {
      opacity: 0.5;
      display: flex;
    }
    .enabled {
      opacity: 1;
    }
    .parent {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      position: relative;
      opacity: 0.8;
    }
    .floor {
      width: 100%;
      display: flex;
      border-bottom: 1px solid white;
      margin-bottom: 24px;
    }
    .button {
      width: 100%;
    }
    ha-control-button.active {
      --control-button-icon-color: white;
      --control-button-background-color: var(--success-color);
      --control-button-background-opacity: 0.5;
      --control-button-text-color: white;
    }

    ha-icon.icon {
      margin-top: -9px;
    }
  `;

  public updated(): void {
    if (!this.config.device || !this.entities) {
      return;
    }

    this._pitchState = this._getState(this.entities.adjusted_pitch_angle);
    this._rollState = this._getState(this.entities.adjusted_roll_angle);
    this._isEnabled =
      this._getState(this.entities.toggle_inclinometer) === "on";
  }

  protected firstUpdated(): void {
    this.entities = this._getEntitiesForDevice(this.config.device);
  }

  render() {
    if (!this.config) return html`<ha-card>Loading...</ha-card>`;

    const pitchAngle = parseFloat(this._pitchState);
    const rollAngle = parseFloat(this._rollState);

    return html`
      <ha-card>
        <ha-dialog-header>
          <span slot="title">Pitch and Roll</span>
          <ha-icon-button
            slot="actionItems"
            label="Config"
            @click=${() => this._openConfigDialog()}
          >
            <ha-icon class="icon" icon="mdi:cog"></ha-icon>
          </ha-icon-button>
        </ha-dialog-header>

        <div class="card-content">
          <div class="wrapper ${this._isEnabled ? "enabled" : ""}">
            <div style="flex: 50%; text-align: center;">
              <smartvan-io-inclinometer-indicator
                .angle=${`${pitchAngle}`}
                name="Pitch"
              ></smartvan-io-inclinometer-indicator>
            </div>
            <div style="flex: 50%; text-align: center;">
              <smartvan-io-inclinometer-indicator
                .angle=${`${rollAngle}`}
                name="Roll"
              ></smartvan-io-inclinometer-indicator>
            </div>
          </div>
          <div class="floor"></div>
          <div class="content">
            <ha-control-button
              .disabled=${!this.config.device}
              class="button ${this._isEnabled ? "active" : ""}"
              @click=${() => this._toggleEntity(this._isEnabled)}
              >${!this._isEnabled ? "Disabled" : "Enabled"}</ha-control-button
            >
          </div>
        </div>
      </ha-card>
    `;
  }

  public setConfig(config: Config) {
    if (!config.device) {
      throw new Error("You need to define a smartvan.io inclinometer");
    }
    this.config = config;
  }

  _getState(entity: Entity) {
    return this.hass.states[entity.entity_id!].state;
  }

  _toggleEntity(state: boolean) {
    const newState = !state ? "turn_on" : "turn_off";
    this.hass.callService("homeassistant", newState, {
      entity_id: this.entities.toggle_inclinometer.entity_id,
    });
  }

  _openConfigDialog() {
    fireEvent(this, "show-dialog", {
      dialogTag: "smartvan-io-inclinometer-dialog",
      dialogImport: () => import("./dialog.js"),
      hass: this.hass,
      dialogParams: {
        config: this.config,
        entities: this.entities,
      },
    });
  }

  _findEntitiesByDeviceId(deviceId: string) {
    if (!this.hass) {
      return [];
    }

    return Object.values(this.hass.entities).filter(
      (entity) => entity.device_id === deviceId
    );
  }

  _getEntitiesForDevice(device: string) {
    if (!device) {
      return {};
    }

    const entities = this._findEntitiesByDeviceId(device);

    const entitiesObject = entities.reduce((acc: Object, cur: Entity) => {
      const newKey = cur.name!.replace(/ /g, "_").toLowerCase();

      return {
        ...acc,
        [newKey]: cur,
      };
    }, {});

    return entitiesObject;
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

// Typically in your main card file, e.g. my-card.js
if (window.customCards) {
  window.customCards.push({
    type: "smartvan-io-inclinometer",
    name: "Smartvan.io inclinometer card",
    description: "A purpose built card for Smartvan.io inclinometer modules",
    preview: true,
  });
}
