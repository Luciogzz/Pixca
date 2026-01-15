'use client';

import { useState } from 'react';
import { Power, Droplets, RotateCw } from 'lucide-react';
import { clsx } from 'clsx';

export function IrrigationController() {
    const [sectors, setSectors] = useState([
        { id: 1, name: 'Sector North', active: false, moisture: 45 },
        { id: 2, name: 'Sector East', active: true, moisture: 28 },
        { id: 3, name: 'Sector West', active: false, moisture: 52 },
    ]);

    const toggleSector = (id: number) => {
        setSectors(sectors.map(s =>
            s.id === id ? { ...s, active: !s.active } : s
        ));
    };

    return (
        <div className="space-y-4">
            {sectors.map((sector) => (
                <div key={sector.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className={clsx(
                            "p-3 rounded-full transition-colors",
                            sector.active ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-400"
                        )}>
                            <Droplets size={20} />
                        </div>
                        <div>
                            <div className="font-medium text-gray-900">{sector.name}</div>
                            <div className="text-xs text-muted-foreground flex items-center gap-1">
                                Moisture: {sector.moisture}%
                                {sector.active && <span className="text-blue-500 animate-pulse">• Irrigating</span>}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => toggleSector(sector.id)}
                        className={clsx(
                            "w-12 h-6 rounded-full transition-colors relative focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                            sector.active ? "bg-blue-600" : "bg-gray-300"
                        )}
                    >
                        <div className={clsx(
                            "absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform shadow-sm",
                            sector.active ? "translate-x-6" : "translate-x-0"
                        )} />
                    </button>
                </div>
            ))}

            <div className="pt-4 border-t border-dashed border-gray-200">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>System Status</span>
                    <span className="text-green-600 font-medium flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500" /> Online
                    </span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Next Scheduled Cycle</span>
                    <span>Today, 18:00</span>
                </div>
            </div>
        </div>
    );
}
