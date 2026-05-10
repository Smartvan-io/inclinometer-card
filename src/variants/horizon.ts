import { LitElement, html, svg, css } from "lit";
import { customElement, property } from "lit/decorators.js";

// Bubble-level style indicator. The dot's position represents the
// vehicle's tilt — roll moves the dot horizontally, pitch moves it
// vertically. Concentric rings at ±2°, ±5°, ±10° give a sense of
// scale so the user can read the magnitude at a glance.
//
// Scale: 5 SVG units per degree (2° = ring 1, 5° = ring 2, 10° = ring 3).
// The dot is clamped inside the outer circle so extreme tilts park at
// the edge instead of disappearing off-screen.
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
    .dot {
      transition: cx 0.15s ease-out, cy 0.15s ease-out, fill 0.2s ease-out;
    }
  `;

  render() {
    const pitch = Number(this.pitch);
    const roll = Number(this.roll);
    const safePitch = isNaN(pitch) ? 0 : pitch;
    const safeRoll = isNaN(roll) ? 0 : roll;

    // 5 SVG units per degree.
    const scale = 5;
    const maxRadius = 87; // outer circle r=95 minus dot r=8

    let dx = safeRoll * scale;
    let dy = -safePitch * scale; // negative: positive pitch (nose up) → dot up
    const distance = Math.hypot(dx, dy);
    if (distance > maxRadius) {
      const factor = maxRadius / distance;
      dx *= factor;
      dy *= factor;
    }

    // Color the dot by tilt magnitude. Within 2° = level (green),
    // 2-10° = warning (amber), beyond = strong tilt (red).
    const tiltMag = Math.hypot(safePitch, safeRoll);
    const dotColor =
      tiltMag <= 2
        ? "var(--success-color, #4caf50)"
        : tiltMag <= 10
        ? "var(--warning-color, #ff9800)"
        : "var(--error-color, #f44336)";

    const fmt = (n: number) =>
      isNaN(n) ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(1)}°`;

    return html`
      <div class="wrap">
        <svg class="disk" viewBox="-100 -100 200 200" aria-hidden="true">
          <!-- Outer disk -->
          <circle r="95" fill="var(--card-background-color, #1c1c1c)" stroke="var(--divider-color, #444)" stroke-width="2" />

          <!-- Concentric rings: 2°, 5°, 10° -->
          ${[10, 25, 50].map(
            (r, i) => svg`
              <circle r=${r} fill="none" stroke="var(--divider-color, #444)" stroke-width="1" stroke-dasharray=${i === 0 ? "1 2" : "2 3"} opacity="0.5" />
            `
          )}

          <!-- Crosshairs through centre -->
          <line x1="-95" y1="0" x2="95" y2="0" stroke="var(--divider-color, #444)" stroke-width="1" opacity="0.4" />
          <line x1="0" y1="-95" x2="0" y2="95" stroke="var(--divider-color, #444)" stroke-width="1" opacity="0.4" />

          <!-- Centre marker -->
          <circle r="2" fill="var(--secondary-text-color, #888)" />

          <!-- Tilt dot -->
          <circle class="dot" cx=${dx} cy=${dy} r="8" fill=${dotColor} stroke="white" stroke-width="1.5" />
        </svg>
        <div class="readouts">
          <span>Pitch <strong>${fmt(safePitch)}</strong></span>
          <span>Roll <strong>${fmt(safeRoll)}</strong></span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "smartvan-io-inclinometer-horizon": SmartVanIOInclinometerHorizon;
  }
}
