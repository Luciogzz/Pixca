'use client';

import { ServiceCard } from '@/components/ServiceCard';
import { Cpu, Plane, Users, Network } from 'lucide-react';

export default function ServicesPage() {
    const services = [
        {
            title: 'IoT Integration',
            description: 'Modernize your farm by connecting existing infrastructure to the cloud. We integrate legacy sensors, irrigation pumps, and weather stations into a unified dashboard.',
            icon: Network,
            colorClass: 'bg-blue-500',
            features: [
                'Legacy System Adapter',
                'Unified Dashboard View',
                'Real-time Data Sync',
                'Remote Pump Control'
            ]
        },
        {
            title: 'Low-Cost Sensors',
            description: 'Affordable, precision agriculture starting at $50 USD/node. Our ESP32-based kits with capacitive moisture sensors provide robust data without the high price tag.',
            icon: Cpu,
            colorClass: 'bg-green-500',
            features: [
                'ESP32 Wireless Nodes (Wi-Fi/LoRa)',
                'Capacitive Moisture Sensors ($2/unit)',
                'NB-IoT / LoRaWAN Range (up to 5km)',
                'Solar Powered Options (+$15)'
            ]
        },
        {
            title: 'Drone as a Service',
            description: 'Get aerial insights without buying a drone. Schedule on-demand flyovers for spectral analysis. Prices from $300 MXN/hectare.',
            icon: Plane,
            colorClass: 'bg-orange-500',
            features: [
                'Multispectral Imaging (NDVI)',
                'Pest & Disease Detection',
                'Fumigation ($500 MXN/ha)',
                'Monthly Monitoring Plans'
            ]
        },
        {
            title: 'Expert Consulting',
            description: 'Bridging the gap between agronomy and technology. Our experts help you interpret data and optimize your irrigation strategies.',
            icon: Users,
            colorClass: 'bg-purple-500',
            features: [
                'Data Interpretation ($400 MXN/hr)',
                'Irrigation Strategy Design',
                'Tech Adoption Training',
                'On-site Support & Calibration'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-muted/20 p-4 md:p-8">
            <div className="container mx-auto space-y-12">
                <div className="text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Farm Solutions</h1>
                    <p className="text-lg text-muted-foreground">
                        From low-cost sensor deployment to advanced aerial analytics, we provide the technology and expertise to modernize your harvest.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="rounded-2xl bg-primary p-8 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to upgrade your farm?</h2>
                    <p className="mb-8 opacity-90 max-w-xl mx-auto">
                        Contact us today for a free consultation and find out which package works best for your land.
                    </p>
                    <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </div>
    );
}
