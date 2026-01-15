'use client';

import { MOCK_PREDICTIONS } from '@/lib/mock-data';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle } from 'lucide-react';

export function PredictionModel() {
    return (
        <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    data={MOCK_PREDICTIONS}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#6B7280', fontSize: 12 }}
                        unit="%"
                    />
                    <Tooltip
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area
                        type="monotone"
                        dataKey="risk"
                        stroke="#ef4444"
                        fill="#fee2e2"
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>

            <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-start gap-3">
                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div>
                    <div className="text-sm font-bold text-red-800">High Risk Alert</div>
                    <div className="text-xs text-red-600">
                        Prediction models indicate a 68% chance of pest outbreak this Friday due to rising humidity levels.
                    </div>
                </div>
            </div>
        </div>
    );
}
