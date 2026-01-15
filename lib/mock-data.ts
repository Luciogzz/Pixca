import { Bundle, Farmer, SensorData, SensorType } from '@/types';

export const BUNDLES: Bundle[] = [
    {
        id: 'starter',
        name: 'Starter Pack',
        description: 'Essential sensors for small plots. Perfect for SMS monitoring.',
        price: 499,
        features: ['Soil Moisture Sensor', 'SMS Alerts', 'Weekly Reports'],
    },
    {
        id: 'pro',
        name: 'Pro Harvest',
        description: 'Advanced monitoring with drone integration for medium farms.',
        price: 1299,
        features: ['Multi-zone Sensors', 'Drone Flyover (1x/month)', 'Real-time Dashboard', 'WhatsApp Support'],
    },
];

export const generateSensorData = (id: string, type: SensorType): SensorData => {
    const now = new Date();
    let value = 0;
    let unit = '';
    let status: SensorData['status'] = 'ACTIVE';

    switch (type) {
        case 'MOISTURE':
            value = Math.floor(Math.random() * (80 - 20) + 20); // 20-80%
            unit = '%';
            if (value < 30) status = 'WARNING';
            break;
        case 'TEMPERATURE':
            value = Math.floor(Math.random() * (35 - 15) + 15); // 15-35 C
            unit = '°C';
            if (value > 30) status = 'WARNING';
            break;
        case 'HUMIDITY':
            value = Math.floor(Math.random() * (90 - 40) + 40);
            unit = '%';
            break;
        case 'PH':
            value = parseFloat((Math.random() * (8 - 5) + 5).toFixed(1));
            unit = 'pH';
            if (value < 5.5 || value > 7.5) status = 'CRITICAL';
            break;
    }

    return {
        id,
        type,
        value,
        unit,
        status,
        lastUpdated: now.toISOString(),
    };
};

export const MOCK_SENSORS: SensorData[] = [
    generateSensorData('s1', 'MOISTURE'),
    generateSensorData('s2', 'TEMPERATURE'),
    generateSensorData('s3', 'PH'),
    generateSensorData('s4', 'HUMIDITY'),
];

export const MOCK_ORCHARD_DATA = Array.from({ length: 64 }, (_, i) => {
    const row = Math.floor(i / 8);
    const col = i % 8;
    const rand = Math.random();
    let status = 'HEALTHY';
    if (rand > 0.85) status = 'CRITICAL';
    else if (rand > 0.7) status = 'WARNING';

    return {
        id: `tree-${i}`,
        row,
        col,
        status,
        moisture: Math.floor(Math.random() * (60 - 20) + 20),
    };
});

export const MOCK_PREDICTIONS = [
    { day: 'Mon', risk: 12 },
    { day: 'Tue', risk: 15 },
    { day: 'Wed', risk: 25 },
    { day: 'Thu', risk: 45 },
    { day: 'Fri', risk: 68 },
    { day: 'Sat', risk: 55 },
    { day: 'Sun', risk: 40 },
];
