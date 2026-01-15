'use client';

import { MOCK_SENSORS } from '@/lib/mock-data';
import { SensorChart } from '@/components/SensorChart';
import { SmsSimulator } from '@/components/SmsSimulator';
import { Droplets, Thermometer, Activity, CloudRain, Sun, Leaf } from 'lucide-react';
import { useState } from 'react';

// Mock historical data for charts
const MOISTURE_DATA = [
    { time: '06:00', value: 30 }, { time: '08:00', value: 35 }, { time: '10:00', value: 42 },
    { time: '12:00', value: 38 }, { time: '14:00', value: 34 }, { time: '16:00', value: 32 },
];
const TEMP_DATA = [
    { time: '06:00', value: 18 }, { time: '08:00', value: 22 }, { time: '10:00', value: 26 },
    { time: '12:00', value: 29 }, { time: '14:00', value: 30 }, { time: '16:00', value: 28 },
];

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-muted/20 p-4 md:p-8">
            <div className="container mx-auto space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Farmer Dashboard</h1>
                        <p className="text-muted-foreground">Parcela: La Esperanza (Sector 3)</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm border border-border">
                        <Sun className="text-secondary" />
                        <div>
                            <div className="text-xs text-muted-foreground">Weather</div>
                            <div className="font-bold">28°C, Cloudy</div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: 'Avg Moisture', value: '38%', icon: <Droplets className="text-blue-500" />, status: 'Normal' },
                        { label: 'Avg Temp', value: '24°C', icon: <Thermometer className="text-orange-500" />, status: 'Normal' },
                        { label: 'Soil pH', value: '6.5', icon: <Activity className="text-purple-500" />, status: 'Optimal' },
                        { label: 'Rain Chance', value: '12%', icon: <CloudRain className="text-blue-400" />, status: 'Low' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-border shadow-sm flex flex-col justify-between h-28 hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="p-2 rounded-lg bg-gray-50">{stat.icon}</div>
                                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 text-green-700">{stat.status}</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{stat.value}</div>
                                <div className="text-xs text-muted-foreground">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Charts */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Droplets size={20} className="text-blue-500" /> Soil Moisture Trends
                            </h3>
                            <SensorChart type="MOISTURE" data={MOISTURE_DATA} color="#3b82f6" />
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Thermometer size={20} className="text-orange-500" /> Temperature Trends
                            </h3>
                            <SensorChart type="TEMPERATURE" data={TEMP_DATA} color="#f97316" />
                        </div>

                        {/* Drone Service Request Placeholder */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-6 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Need a Status Check?</h3>
                                <p className="text-primary-foreground/90 text-sm">Request a drone flyover for detailed crop analysis and pest detection.</p>
                            </div>
                            <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold shadow hover:bg-white/90 transition-colors whitespace-nowrap">
                                Request Drone
                            </button>
                        </div>
                    </div>

                    {/* Right Column: SMS Simulation (The "Low Tech" bridge) */}
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-lg font-bold mb-2">Low Connectivity Bridge</h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Simulate how farmers without internet access interact with Pixca via SMS/WhatsApp.
                            </p>
                            <SmsSimulator />
                        </div>

                        {/* Recent Alerts */}
                        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-lg font-bold mb-4">Recent Alerts</h3>
                            <div className="space-y-4">
                                {[
                                    { msg: 'Moisture low in Sector 2', time: '2h ago', type: 'warning' },
                                    { msg: 'Weekly report generated', time: '5h ago', type: 'info' },
                                ].map((alert, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                                        <div className={`mt-1 w-2 h-2 rounded-full ${alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'}`} />
                                        <div>
                                            <div className="text-sm font-medium">{alert.msg}</div>
                                            <div className="text-xs text-muted-foreground">{alert.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
