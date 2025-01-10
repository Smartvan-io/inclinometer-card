import { LitElement, html, css, PropertyValueMap, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Entity, ExtendedHomeAssistant } from "src/types";

@customElement("smartvan-io-inclinometer")
class SmartVanIOInclinometerDialog extends LitElement {
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

  @property({ attribute: false }) private _isOpen = false;

  static styles = css`
    @media all and (max-width: 450px), all and (max-height: 500px) {
      /* When in fullscreen dialog should be attached to top */
      ha-dialog {
        --dialog-surface-margin-top: 0px;
      }
    }

    ha-dialog {
      --mdc-dialog-min-width: 580px;
      --mdc-dialog-max-width: 580px;
      --mdc-dialog-max-height: calc(100% - 72px);
    }

    .wrapper {
      display: flex;
    }

    .indicator {
      margin-bottom: 32px;
      display: flex;
    }

    .floor {
      width: 100%;
      display: flex;
      border-bottom: 1px solid white;
      margin-bottom: 24px;
    }

    @media all and (min-width: 600px) and (min-height: 501px) {
      ha-dialog {
        --mdc-dialog-min-width: 580px;
        --mdc-dialog-max-width: 580px;
        --mdc-dialog-max-height: calc(100% - 72px);
      }

      .main-title {
        cursor: default;
      }

      :host([large]) ha-dialog {
        --mdc-dialog-min-width: 90vw;
        --mdc-dialog-max-width: 90vw;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .field {
      width: calc(100% - 8px);
    }

    .orientation-select {
      width: 100%;
      margin-bottom: 32px;
    }
  `;

  public showDialog(params: any) {
    this._entities = params.entities;
    this._isOpen = true;

    if (this._getState(this._entities.toggle_inclinometer) === "off") {
      this.hass.callService("homeassistant", "turn_on", {
        entity_id: this._entities.toggle_inclinometer.entity_id,
      });
    }
  }

  render() {
    if (!this._isOpen) return nothing;

    const {
      orientation,
      calibrate_pitch,
      calibrate_roll,
      reset_pitch_adjustment_angle,
      reset_roll_adjustment_angle,
      pitch_adjustment_angle,
      roll_adjustment_angle,
      adjusted_pitch_angle,
      adjusted_roll_angle,
    } = this._entities;

    const options =
      this.hass.states[orientation.entity_id!]?.attributes?.options || [];

    return html`
      <ha-dialog
        open
        @closed=${this.closeDialog}
        scrimClickAction=${true}
        escapeKeyAction
        hideActions=${true}
      >
        <ha-dialog-header slot="heading">
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            .label=${this.hass.localize("ui.dialogs.more_info_control.dismiss")}
            icon="mdi:close"
          ></ha-icon-button>
        </ha-dialog-header>

        <ha-select
          class="orientation-select"
          label="Orientation"
          @closed=${(e: Event) => e.stopPropagation()}
          @selected=${(e: any) => this._setOrientation(e.target.value)}
          .value=${this._getState(orientation)}
        >
          ${options.map(
            (option: string) =>
              html`<mwc-list-item .value=${option}> ${option} </mwc-list-item>`
          )}
        </ha-select>

        <div class="wrapper">
          <div style="flex: 50%; text-align: center;">
            <smartvan-io-inclinometer-indicator
              class="indicator"
              .angle=${this._getState(adjusted_pitch_angle)}
              name="Pitch"
            ></smartvan-io-inclinometer-indicator>
            <ha-textfield
              class="field"
              style="margin-right: 8px;"
              label="Pitch compensation"
              .value=${this._getState(pitch_adjustment_angle)}
              @change=${(e: any) =>
                this._setValue(
                  pitch_adjustment_angle.entity_id!,
                  e.target.value
                )}
            ></ha-textfield>
            <div class="buttons">
              <mwc-button
                slot="primaryAction"
                @click=${() =>
                  this._setCalibration(reset_pitch_adjustment_angle.entity_id!)}
              >
                Reset
              </mwc-button>
              <mwc-button
                slot="primaryAction"
                @click=${() => this._setCalibration(calibrate_pitch.entity_id!)}
              >
                Calibrate
              </mwc-button>
            </div>
          </div>
          <div style="flex: 50%; text-align: center;">
            <smartvan-io-inclinometer-indicator
              class="indicator"
              .angle=${this._getState(adjusted_roll_angle)}
              name="Roll"
            ></smartvan-io-inclinometer-indicator>

            <ha-textfield
              class="field"
              style="margin-left: 8px;"
              label="Roll compensation"
              .value=${this._getState(roll_adjustment_angle)}
              @change=${(e: any) =>
                this._setValue(
                  roll_adjustment_angle.entity_id!,
                  e.target.value
                )}
            ></ha-textfield>
            <div class="buttons">
              <mwc-button
                slot="primaryAction"
                @click=${() =>
                  this._setCalibration(reset_roll_adjustment_angle.entity_id!)}
              >
                Reset
              </mwc-button>
              <mwc-button
                slot="primaryAction"
                @click=${() => this._setCalibration(calibrate_roll.entity_id!)}
              >
                Calibrate
              </mwc-button>
            </div>
          </div>
        </div>
      </ha-dialog>
    `;
  }

  closeDialog() {
    this._isOpen = false;
  }

  _getState(entity: Entity) {
    return this.hass.states[entity.entity_id!].state;
  }

  private _setOrientation(value: string) {
    this.hass.callService("select", "select_option", {
      entity_id: this._entities.orientation.entity_id,
      option: value,
    });
  }

  private _setCalibration(entity_id: string) {
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
    "smartvan-io-inclinometer-dialog": SmartVanIOInclinometerDialog;
  }
}
