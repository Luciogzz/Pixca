'use client';

import { OrchardVisualizer } from '@/components/OrchardVisualizer';
import { PredictionModel } from '@/components/PredictionModel';
import { IrrigationController } from '@/components/IrrigationController';
import { Sprout, BrainCircuit, Droplets } from 'lucide-react';

export default function AdvancedPage() {
    return (
        <div className="min-h-screen bg-muted/20 p-4 md:p-8">
            <div className="container mx-auto space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Advanced Controls & Analytics</h1>
                    <p className="text-muted-foreground">Orchard AI visualization and automated irrigation management</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Prediction Model */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <BrainCircuit className="text-purple-500" /> Pest & Crop Health Prediction
                        </h3>
                        <PredictionModel />
                    </div>

                    {/* Orchard Visualization */}
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Sprout className="text-green-500" /> Live Orchard View
                        </h3>
                        <OrchardVisualizer />
                    </div>

                    {/* Irrigation Control */}
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm h-fit">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Droplets className="text-blue-500" /> Smart Irrigation Control
                        </h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Manually override automated schedules or check sensor connectivity status.
                        </p>
                        <IrrigationController />
                    </div>
                </div>
            </div>
        </div>
    );
}
