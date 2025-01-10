import { HomeAssistant } from "custom-card-helpers";

export interface Entity {
  entity_id?: string;
  device_id?: string;
}

export interface ExtendedHomeAssistant extends HomeAssistant {
  entities: Record<string, any>; // Adjust types based on your needs
  devices: Record<string, any>; // Adjust types based on your needs
}

export interface Config {
  device: string;
}

export interface Device {
  name: string;
}
