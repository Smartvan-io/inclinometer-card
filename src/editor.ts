import { LitElement, html, nothing, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, LovelaceCardEditor } from "custom-card-helpers";
import { Config, Device, ExtendedHomeAssistant } from "./types";

@customElement("smartvan-io-inclinometer-editor")
class SmartVanIOInclinometerCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;
  @property({ attribute: false }) private _possibleDevices: Device[] = [];
  @state() private _config: Config = {
    type: "custom:smartvan-io-inclinometer",
    device: "",
  };

  static styles = css`
    .full-width-select {
      width: 100%;
      margin-bottom: 10px;
    }
  `;

  // Lovelace will call setConfig with the current configuration
  public setConfig(config: Config): void {
    this._config = { ...config };
  }

  protected firstUpdated(): void {
    this._possibleDevices = Object.values(this.hass.devices)
      .filter((item) => item.manufacturer === "smartvanio")
      .filter((item) => item.model === "inclinometer");

    if (!this._config?.device) {
      if (this._possibleDevices.length === 1) {
        console.log(this._possibleDevices[0]);
        fireEvent(this, "config-changed", {
          config: {
            ...this._config,
            device: this._possibleDevices[0].id,
          },
        });
      }
    }
  }

  // Render your editor form
  render() {
    if (!this.hass || !this._config) return nothing;
    return html`
      <div class="card-config">
        <ha-select
          class="full-width-select"
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
      </div>
    `;
  }

  _setDevice(device: string) {
    fireEvent(this, "config-changed", {
      config: {
        ...this._config,
        device: this._possibleDevices.find((item) => item.id === device)!.id,
      },
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-editor": SmartVanIOInclinometerCardEditor;
  }
}
