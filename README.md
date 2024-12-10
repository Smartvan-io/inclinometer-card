## SmartVan.io Inclinometer Card

#### Description
A simple card to show the pitch and roll angle of your van using the angle data from a [SmartVan.io inclinometer module](https://smartvan.io/products/tilt-sensor-module) although it will any incline sensor by passing the appropriate pitch and roll entities to the card.


<img src="https://raw.githubusercontent.com/Smartvan-io/inclinometer-card/refs/heads/main/preview.jpg" width="400" />

#### Setup
Add a custom card to your dashboard using the following:

```yaml
type: custom:smartvan-io-inclinometer
entity_pitch: sensor.smartvanio_inclinometer_pitch ## replace with your own entity
entity_roll: sensor.smartvanio_inclinometer_roll ## replace with your own entity
```

<img src="https://raw.githubusercontent.com/Smartvan-io/inclinometer-card/refs/heads/main/inclinometer-card.gif" width="1200" />