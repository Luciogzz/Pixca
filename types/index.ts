export type SensorType = 'MOISTURE' | 'TEMPERATURE' | 'PH' | 'HUMIDITY';
export type FarmerType = 'LOW_TECH' | 'MEDIUM_TECH';

export interface Bundle {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  imageUrl?: string;
}

export interface SensorData {
  id: string;
  type: SensorType;
  value: number;
  unit: string;
  status: 'ACTIVE' | 'WARNING' | 'CRITICAL';
  lastUpdated: string; // ISO date
}

export interface Farmer {
  id: string;
  name: string;
  type: FarmerType;
  phone: string;
  location: string;
  subscribedBundles: string[]; // Bundle IDs
}

export interface ServiceRequest {
  id: string;
  farmerId: string;
  serviceType: 'DRONE_FLYOVER' | 'SOIL_ANALYSIS';
  status: 'PENDING' | 'SCHEDULED' | 'COMPLETED';
  date: string;
}
