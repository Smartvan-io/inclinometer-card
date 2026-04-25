import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

const isLevel = (angle: number, tolerance = 1) => Math.abs(angle) <= tolerance;

// "Classic" variant indicator — large angle reading, axis label,
// rotating bar that turns green when within ±1° of level. Used by
// the inclinometer card; not a custom config field.
@customElement("smartvan-io-inclinometer-indicator")
class SmartVanIOInclinometerLevelIndicator extends LitElement {
  @property({ attribute: false }) public angle: number = 0;
  @property({ attribute: false }) public inverted: boolean = false;
  @property() public name: string = "";

  static styles = css`
    :host {
      display: block;
    }
    .axis {
      text-align: center;
      padding: 8px 0;
    }
    h1 {
      margin: 0 0 4px;
      font-size: 1.6rem;
    }
    p {
      margin: 0 0 12px;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .parent {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 96px;
      position: relative;
      opacity: 0.85;
    }
    .indicator {
      background-color: var(--primary-text-color);
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 8px;
      transition: rotate 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      width: calc(100% - 32px);
      min-width: 50px;
      max-width: 100px;
    }
    .indicator.level {
      background-color: rgb(34, 197, 94);
    }
  `;

  render() {
    const numericAngle = Number(this.angle);
    const display = isNaN(numericAngle)
      ? "—"
      : `${Math.abs(numericAngle).toFixed(1)}°`;
    const barAngle = this.inverted ? numericAngle * -1 : numericAngle;
    return html`
      <div class="axis">
        <h1>${display}</h1>
        <p>${this.name}</p>
        <div class="parent">
          <div
            class="indicator ${isLevel(numericAngle) ? "level" : ""}"
            style="rotate: ${isNaN(barAngle) ? 0 : barAngle}deg;"
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
