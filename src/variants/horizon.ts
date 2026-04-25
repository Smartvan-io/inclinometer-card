import { LitElement, html, svg, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// Aircraft attitude indicator. The "horizon" line tilts with the
// roll angle; the sky/ground colours shift up or down with the
// pitch angle. Numeric pitch/roll readouts sit beneath the disk.
//
// This is a stylised indicator, not a calibrated instrument — the
// pitch translation is clamped so extreme values still keep the
// horizon visible.
@customElement("smartvan-io-inclinometer-horizon")
class SmartVanIOInclinometerHorizon extends LitElement {
  @property({ attribute: false }) public pitch: number = NaN;
  @property({ attribute: false }) public roll: number = NaN;

  static styles = css`
    .wrap {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
    }
    .disk {
      width: 220px;
      height: 220px;
      max-width: 80vw;
      max-height: 80vw;
    }
    .readouts {
      display: flex;
      gap: 24px;
      font-size: 0.95rem;
      color: var(--secondary-text-color);
    }
    .readouts strong {
      color: var(--primary-text-color);
      font-weight: 600;
    }
  `;

  render() {
    const pitch = Number(this.pitch);
    const roll = Number(this.roll);
    const safePitch = isNaN(pitch) ? 0 : pitch;
    const safeRoll = isNaN(roll) ? 0 : roll;

    // 1° pitch ≈ 2 SVG units of vertical translation; clamped so the
    // horizon line never rolls off the visible disk at extreme values.
    const offset = Math.max(-50, Math.min(50, safePitch * 2));

    const fmt = (n: number) =>
      isNaN(n) ? "—" : `${Math.abs(n).toFixed(1)}°`;

    return html`
      <div class="wrap">
        <svg class="disk" viewBox="-100 -100 200 200" aria-hidden="true">
          <defs>
            <clipPath id="disk-clip">
              <circle r="95" />
            </clipPath>
          </defs>
          <g transform="rotate(${-safeRoll})" clip-path="url(#disk-clip)">
            <g transform="translate(0, ${offset})">
              <!-- Sky -->
              <rect x="-200" y="-200" width="400" height="200" fill="#3b82f6" />
              <!-- Ground -->
              <rect x="-200" y="0" width="400" height="200" fill="#92400e" />
              <!-- Horizon line -->
              <line x1="-200" y1="0" x2="200" y2="0" stroke="white" stroke-width="2" />
              ${this._pitchLadder()}
            </g>
          </g>
          <!-- Fixed aircraft reference (centre marker) -->
          <line x1="-30" y1="0" x2="-10" y2="0" stroke="#fbbf24" stroke-width="3" />
          <line x1="10" y1="0" x2="30" y2="0" stroke="#fbbf24" stroke-width="3" />
          <circle r="2" fill="#fbbf24" />
          <!-- Disk outline -->
          <circle r="95" fill="none" stroke="var(--divider-color, #444)" stroke-width="2" />
        </svg>
        <div class="readouts">
          <span>Pitch <strong>${fmt(safePitch)}</strong></span>
          <span>Roll <strong>${fmt(safeRoll)}</strong></span>
        </div>
      </div>
    `;
  }

  private _pitchLadder() {
    // Tick marks at ±10° intervals. Spacing matches `safePitch * 2`
    // so a 10° offset moves the corresponding tick to centre.
    const ticks = [-30, -20, -10, 10, 20, 30];
    return ticks.map(
      (deg) => svg`
        <g transform="translate(0, ${deg * 2})">
          <line x1="-20" y1="0" x2="20" y2="0" stroke="white" stroke-width="1" opacity="0.6" />
          <text x="-26" y="3" text-anchor="end" font-size="8" fill="white" opacity="0.7">${Math.abs(deg)}</text>
          <text x="26" y="3" font-size="8" fill="white" opacity="0.7">${Math.abs(deg)}</text>
        </g>
      `
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-horizon": SmartVanIOInclinometerHorizon;
  }
}
