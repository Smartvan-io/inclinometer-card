import { LitElement, html, nothing, css, PropertyValueMap } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, LovelaceCardEditor } from "custom-card-helpers";
import { Config, Device, Entity, ExtendedHomeAssistant } from "./types";

const options = [
  {
    text: "Flat",
    value: "Option 1",
  },
  {
    text: "Upright",
    value: "Option 2",
  },
  {
    text: "Upright (sideways)",
    value: "Option 3",
  },
  {
    text: "Flat (sideways)",
    value: "Option 4",
  },
];
@customElement("smartvan-io-inclinometer-editor")
class SmartVanIOInclinometerCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;
  @property({ attribute: false }) public _entities!: {
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
  @property({ attribute: false }) private _possibleDevices: Device[] = [];
  @state() private _config: Config = {
    type: "custom:smartvan-io-inclinometer",
    device: "",
  };

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
    }
    .full-width-select {
      width: 100%;
      margin-bottom: 10px;
    }
    .mb {
      margin-bottom: 32px;
    }
    .input-group {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: space-between;
    }
    .alert {
      margin-bottom: 10px;
    }
  `;

  // Lovelace will call setConfig with the current configuration
  public setConfig(config: Config): void {
    this._entities = this._getEntitiesForDevice(config.device);

    this._possibleDevices = Object.values(this.hass.devices)
      .filter((item) => item.manufacturer === "smartvanio")
      .filter((item) => item.model === "inclinometer");

    if (!config?.device) {
      if (this._possibleDevices.length === 1) {
        this._entities = this._getEntitiesForDevice(
          this._possibleDevices[0].id
        );
        fireEvent(this, "config-changed", {
          config: {
            ...config,
            device: this._possibleDevices[0].id,
          },
        });
      }
    } else {
      this._entities = this._getEntitiesForDevice(config.device);
    }

    if (!this._config.device && config.device) {
      this.hass.callService("switch", "turn_on", {
        entity_id: this._entities.toggle_inclinometer.entity_id,
      });
    }

    this._config = config;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Function to call when the editor closes
    this.hass.callService("switch", "turn_off", {
      entity_id: this._entities.toggle_inclinometer.entity_id,
    });
  }

  // Render your editor form
  render() {
    if (!this.hass || !this._config) return nothing;

    const isUnavailable =
      !this._config.device ||
      this._getEntityStates()?.some((item) => item === "unavailable");

    return html`
      <div class="card-config">
        ${isUnavailable
          ? html`<ha-alert alert-type="error" class="alert"
              >Either the device is unavailable or not selected!</ha-alert
            >`
          : nothing}
        <ha-select
          class="full-width-select mb"
          label="Inclinometer"
          @closed=${(e: Event) => e.stopPropagation()}
          @selected=${(e: any) => this._setDevice(e.target.value)}
          .value=${this._config.device}
        >
          ${this._possibleDevices.map(
            (option: Device) =>
              html`<mwc-list-item .value=${option.id}>
                ${option.name}
              </mwc-list-item>`
          )}
        </ha-select>

        <ha-alert alert-type="info" class="alert"
          >Note, the settings below are stored on the device and will be applied
          instantly!</ha-alert
        >

        <ha-select
          class="full-width-select"
          label="Orientation"
          @closed=${(e: Event) => e.stopPropagation()}
          @selected=${(e: any) => this._setOrientation(e.target.value)}
          .value=${this._getState(this._entities?.orientation)}
        >
          ${options.map(
            (option) =>
              html`<mwc-list-item .value=${option.value}>
                ${option.text}
              </mwc-list-item>`
          )}
        </ha-select>

        <div class="input-group">
          <ha-textfield
            class="field"
            label="Pitch compensation"
            disable=${!this._config.device}
            .value=${this._getState(this._entities?.pitch_adjustment_angle)}
            @change=${(e: any) =>
              this._setValue(
                this._entities?.pitch_adjustment_angle.entity_id!,
                e.target.value
              )}
          ></ha-textfield>
          <div class="buttons">
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() =>
                this._setButton(
                  this._entities?.reset_pitch_adjustment_angle.entity_id!
                )}
            >
              Reset
            </mwc-button>
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() =>
                this._setButton(this._entities?.calibrate_pitch.entity_id!)}
            >
              Calibrate
            </mwc-button>
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() => this._toggleInverted("pitch")}
            >
              ${!this._config.pitch_inverted ? "Invert" : "Inverted"}
            </mwc-button>
          </div>
        </div>
        <div class="input-group">
          <ha-textfield
            class="field"
            label="Roll compensation"
            disable=${!this._config.device}
            .value=${this._getState(this._entities?.roll_adjustment_angle)}
            @change=${(e: any) =>
              this._setValue(
                this._entities?.roll_adjustment_angle.entity_id!,
                e.target.value
              )}
          ></ha-textfield>
          <div class="buttons">
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() =>
                this._setButton(
                  this._entities?.reset_roll_adjustment_angle.entity_id!
                )}
            >
              Reset
            </mwc-button>
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() =>
                this._setButton(this._entities?.calibrate_roll.entity_id!)}
            >
              Calibrate
            </mwc-button>
            <mwc-button
              slot="primaryAction"
              disable=${!this._config.device}
              @click=${() => this._toggleInverted("roll")}
            >
              ${!this._config.roll_inverted ? "Invert" : "Inverted"}
            </mwc-button>
          </div>
        </div>
      </div>
    `;
  }

  private _getEntityStates() {
    if (!this._entities) {
      return [];
    }

    return Object.values(this._entities).map(
      (item) => this.hass.states[item.entity_id].state
    );
  }

  private _findEntitiesByDeviceId(deviceId: string) {
    if (!this.hass) {
      return [];
    }

    return Object.values(this.hass.entities).filter(
      (entity) => entity.device_id === deviceId
    );
  }

  private _getEntitiesForDevice(device: string) {
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

  private _getState(entity: Entity) {
    if (!entity) {
      return "";
    }

    return this.hass.states[entity.entity_id!].state;
  }

  private _toggleInverted(axis: string) {
    const key = `${axis}_inverted`;
    const currentValue = this._config[key];
    fireEvent(this, "config-changed", {
      config: {
        ...this._config,
        [key]: !currentValue,
      },
    });
  }

  private _setDevice(device: string) {
    this._entities = this._getEntitiesForDevice(device);

    fireEvent(this, "config-changed", {
      config: {
        ...this._config,
        device: this._possibleDevices.find((item) => item.id === device)!.id,
      },
    });
  }

  private _setOrientation(value: string) {
    this.hass.callService("select", "select_option", {
      entity_id: this._entities?.orientation?.entity_id,
      option: value,
    });
  }

  private _setButton(entity_id: string) {
    this.hass.callService("button", "press", {
      entity_id,
    });
  }

  private _setValue(entity_id: string, value: string) {
    this.hass.callService("number", "set_value", {
      entity_id,
      value,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-editor": SmartVanIOInclinometerCardEditor;
  }
}
