const isLevel = (angle, tolerance = 1) => Math.abs(angle) <= tolerance;

class PitchAndRollCard extends HTMLElement {
  set hass(hass) {
    // Initialize the content if it's not there yet.
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Pitch and Roll">
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector("div");
    }

    const pitchEntity = this.config.entity_pitch;
    const pitchAngle = hass.states[pitchEntity];
    const pitchAngleStr = pitchAngle?.state ?? "unavailable";

    const rollEntity = this.config.entity_roll;
    const rollAngle = hass.states[rollEntity];
    const rollAngleStr = rollAngle?.state ?? "unavailable";

    this.content.innerHTML = `
      <style>
        .parent {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 96px;
          position: relative;
        }

        .floor {
          width: 100%;
          border-bottom: 1px solid white; 
        }

        .indicator {
          background-color: white;
          border-bottom-left-radius: 9999px;
          border-bottom-right-radius: 9999px;
          border-top-left-radius: 9999px;
          border-top-right-radius: 9999px;
          box-sizing: border-box;
          display: block;
          height: 8px;
          line-height: 24px;
          position: relative;
          transition-duration: 0.1s;
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          bottom: 0;
          width: calc(100% - 100px);    
        }
      </style>
      <div style="display: flex;">
        <div style="flex: 50%;text-align: center;">
          <h1>${Math.abs(pitchAngleStr)}°</h1>
          <p>Pitch</p>

          <div class="parent">
            <div class="indicator" style="
              rotate: ${pitchAngleStr}deg;      
              background: ${
                isLevel(pitchAngleStr) ? "rgb(34 197 94)" : "white"
              };
            "></div>
          </div>
        </div>
        <div style="flex: 50%;text-align: center;">
        
          <h1>${Math.abs(rollAngleStr)}°</h1>
          <p>Roll</p>

          <div class="parent">
            <div class="indicator" style="
              rotate: ${rollAngleStr}deg;  
              background: ${isLevel(rollAngleStr) ? "rgb(34 197 94)" : "white"};
            "></div>
          </div>
        </div>
        
      </div>
      <div class="floor"></div>
    `;
  }

  setConfig(config) {
    if (!config.entity_pitch) {
      throw new Error("You need to define an entity_pitch");
    }
    if (!config.entity_roll) {
      throw new Error("You need to define an entity_roll");
    }
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 3;
  }
}

customElements.define("smartvan-io-inclinometer", PitchAndRollCard);
