import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// Large-digit display variant. Two columns, big numbers, no chrome.
// Suited for tablets where you want to glance at "how level is the
// van" from across the room.
@customElement("smartvan-io-inclinometer-minimal")
class SmartVanIOInclinometerMinimal extends LitElement {
  @property({ attribute: false }) public pitch: number = NaN;
  @property({ attribute: false }) public roll: number = NaN;

  static styles = css`
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      padding: 8px 0;
    }
    .axis {
      text-align: center;
    }
    .label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }
    .value {
      font-size: 3.2rem;
      line-height: 1;
      font-weight: 600;
      margin-top: 6px;
    }
    .unit {
      color: var(--secondary-text-color);
      font-size: 1.6rem;
      margin-left: 2px;
    }
    .level .value {
      color: rgb(34, 197, 94);
    }
  `;

  private _row(label: string, value: number) {
    const isLevel = !isNaN(value) && Math.abs(value) <= 1;
    const display = isNaN(value) ? "—" : Math.abs(value).toFixed(1);
    return html`
      <div class="axis ${isLevel ? "level" : ""}">
        <div class="label">${label}</div>
        <div class="value">${display}<span class="unit">°</span></div>
      </div>
    `;
  }

  render() {
    return html`
      <div class="grid">
        ${this._row("Pitch", Number(this.pitch))}
        ${this._row("Roll", Number(this.roll))}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-minimal": SmartVanIOInclinometerMinimal;
  }
}
