import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
const isLevel = (angle: number, tolerance = 1) => Math.abs(angle) <= tolerance;

@customElement("smartvan-io-inclinometer-indicator")
class SmartVanIOInclinometerLevelIndicator extends LitElement {
  @property({ attribute: false }) public angle: string = "";
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
      background-color: white;
      border-radius: 4px;
      box-sizing: border-box;
      display: block;
      height: 8px;
      line-height: 24px;
      position: relative;
      transition: all 0.1s cubic-bezier(0.4, 0, 0.2, 1);
      bottom: 0;
      z-index: 10;
      width: calc(100% - 160px);
    }
    .indicator.level {
      background-color: rgb(34, 197, 94);
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <div style="flex: 50%; text-align: center;">
        <h1>${Math.abs(Number(this.angle))}°</h1>
        <p>${this.name}</p>
        <div class="parent">
          <div
            class="indicator ${isLevel(Number(this.angle)) ? "level" : ""}"
            style="rotate: ${this.angle}deg;"
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
