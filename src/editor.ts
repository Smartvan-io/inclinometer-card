import { LitElement, html, nothing } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { fireEvent, LovelaceCardEditor } from "custom-card-helpers";
import {
  Config,
  ExtendedHomeAssistant,
  VARIANT_OPTIONS,
} from "./types";

// ha-form schema. Switching from hand-rolled <ha-select> +
// <mwc-list-item> to selectors avoids the broken click events on
// <ha-select> in HA 2026.4+ and gets us HA's standard form behaviour
// (events, validation, theming) for free.
//
// Device filter pins the integration; the model string for the
// inclinometer is "ESP32-C3 Inclinometer" today and is what the
// firmware publishes via MQTT discovery.
const SCHEMA = [
  {
    name: "device",
    required: true,
    selector: {
      device: {
        filter: { integration: "smartvanio", model: "SmartVan.io Inclinometer" },
      },
    },
  },
  {
    name: "variant",
    required: true,
    selector: {
      select: {
        mode: "dropdown" as const,
        options: VARIANT_OPTIONS.map((o) => ({ value: o.value, label: o.label })),
      },
    },
  },
  { name: "pitch_inverted", selector: { boolean: {} } },
  { name: "roll_inverted", selector: { boolean: {} } },
];

const LABELS: Record<string, string> = {
  device: "Inclinometer",
  variant: "Style",
  pitch_inverted: "Invert pitch direction",
  roll_inverted: "Invert roll direction",
};

@customElement("smartvan-io-inclinometer-editor")
class SmartVanIOInclinometerCardEditor
  extends LitElement
  implements LovelaceCardEditor
{
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;

  @state() private _config: Config = {
    type: "custom:smartvan-io-inclinometer",
    device: "",
    variant: "classic",
  };

  public setConfig(config: Config): void {
    this._config = { variant: "classic", ...config };
  }

  render() {
    if (!this.hass || !this._config) return nothing;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }

  private _computeLabel = (schema: { name: string }) =>
    LABELS[schema.name] ?? schema.name;

  private _valueChanged = (ev: CustomEvent) => {
    fireEvent(this, "config-changed", { config: ev.detail.value });
  };
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-editor": SmartVanIOInclinometerCardEditor;
  }
}
