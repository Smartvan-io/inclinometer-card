import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ExtendedHomeAssistant } from "./types";
const isLevel = (angle: number, tolerance = 1) => Math.abs(angle) <= tolerance;

@customElement("smartvan-io-inclinometer-indicator")
class SmartVanIOInclinometerLevelIndicator extends LitElement {
  @property({ attribute: false }) public angle: number = 0;
  @property({ attribute: false }) public hass!: ExtendedHomeAssistant;
  @property({ attribute: false }) public inverted: boolean = false;
  @property({ attribute: false }) public labels: string[] = [];
  @property() public name: string = "";

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
    .indicator {
      background-color: var(--primary-text-color);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 8px;
      line-height: 24px;
      position: relative;
      transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      bottom: 0;
      z-index: 10;
      width: calc(100% - 32px);
      min-width: 50px;
      max-width: 100px;

      &.dark {
        background-color: #333;
      }
    }
    .indicator.level {
      background-color: rgb(34, 197, 94);
    }

    .label {
      position: absolute;
      top: 0;
      transform: translateX(-40px);
    }

    .label.right {
      transform: translateX(40px);
    }

    .label.highlight {
      color: rgb(34, 197, 94);
    }
  `;

  constructor() {
    super();
  }

  render() {
    const angle = isNaN(Number(this.angle))
      ? "-"
      : `${Math.abs(Number(this.angle))}°`;
    const barAngle = this.inverted ? this.angle * -1 : this.angle;
    const labels = this.inverted ? [...this.labels].reverse() : this.labels;
    return html`
      <div style="flex: 50%; text-align: center;">
        <h1>${angle}</h1>
        <p>${this.name}</p>
        <div class="parent">
          ${labels.map(
            (label, index) =>
              html`<span
                class="
                  label ${index ? "right" : ""} 
                  ${!index && barAngle < 0 ? "highlight" : ""}
                  ${index && barAngle > 0 ? "highlight" : ""}
                "
                >${label}</span
              >`
          )}
          <div
            class="indicator ${isLevel(Number(this.angle)) ? "level" : ""}"
            style="rotate: ${barAngle}deg;"
          ></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-indicator": SmartVanIOInclinometerLevelIndicator;
  }
}
