import { HomeAssistant, LovelaceCardConfig } from "custom-card-helpers";

export interface Entity {
  entity_id: string;
  name: string;
  device_id?: string;
}

export interface ExtendedHomeAssistant extends HomeAssistant {
  entities: Record<string, any>; // Adjust types based on your needs
  devices: Record<string, any>; // Adjust types based on your needs
}

export interface Config extends LovelaceCardConfig {
  device: string;
}

export interface Device {
  name: string;
  id: string;
  model?: string;
  manufacturer?: string;
}
