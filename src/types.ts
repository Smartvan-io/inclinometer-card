import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

export interface Entity {
  entity_id: string;
  name: string;
  device_id?: string;
}

export interface ExtendedHomeAssistant extends HomeAssistant {
  entities: Record<string, any>;
  devices: Record<string, any>;
}

export type InclinometerVariant = "classic" | "minimal" | "horizon";

export interface Config extends LovelaceCardConfig {
  device: string;
  variant?: InclinometerVariant;
  // Display-only sign flips. Calibration lives on the device (set in
  // the SmartVan.io addon UI); these just mirror the bar visually.
  pitch_inverted?: boolean;
  roll_inverted?: boolean;
}

export interface Device {
  name: string;
  id: string;
  model?: string;
  manufacturer?: string;
}

export const VARIANT_OPTIONS: { value: InclinometerVariant; label: string }[] = [
  { value: "classic", label: "Classic (bar indicator)" },
  { value: "minimal", label: "Minimal (large digits)" },
  { value: "horizon", label: "Bubble level (dot in circle)" },
];
