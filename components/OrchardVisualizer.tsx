'use client';

import { MOCK_ORCHARD_DATA } from '@/lib/mock-data';
import { clsx } from 'clsx';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { useState } from 'react';

export function OrchardVisualizer() {
    const [selectedTree, setSelectedTree] = useState<typeof MOCK_ORCHARD_DATA[0] | null>(null);

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
                <div className="grid grid-cols-8 gap-2 aspect-square max-w-[500px] mx-auto">
                    {MOCK_ORCHARD_DATA.map((tree) => (
                        <button
                            key={tree.id}
                            onClick={() => setSelectedTree(tree)}
                            className={clsx(
                                'w-full h-full rounded-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary',
                                tree.status === 'HEALTHY' && 'bg-green-200 hover:bg-green-300',
                                tree.status === 'WARNING' && 'bg-yellow-200 hover:bg-yellow-300',
                                tree.status === 'CRITICAL' && 'bg-red-200 hover:bg-red-300',
                                selectedTree?.id === tree.id && 'ring-2 ring-primary scale-105'
                            )}
                        />
                    ))}
                </div>
                <div className="flex justify-center gap-4 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-green-200" /> Healthy</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-yellow-200" /> Warning</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-red-200" /> Critical</div>
                </div>
            </div>

            {selectedTree ? (
                <div className="md:w-64 bg-white p-4 rounded-xl border border-border shadow-sm h-fit animate-in fade-in slide-in-from-left-4">
                    <h4 className="font-bold mb-4">Tree Details</h4>
                    <div className="space-y-3">
                        <div className="text-sm">
                            <span className="text-muted-foreground">ID:</span> {selectedTree.id}
                        </div>
                        <div className="text-sm">
                            <span className="text-muted-foreground">Position:</span> ({selectedTree.row}, {selectedTree.col})
                        </div>
                        <div className="text-sm">
                            <span className="text-muted-foreground">Moisture:</span> {selectedTree.moisture}%
                        </div>
                        <div className={clsx(
                            "flex items-center gap-2 p-2 rounded-lg text-sm font-medium",
                            selectedTree.status === 'HEALTHY' && "bg-green-50 text-green-700",
                            selectedTree.status === 'WARNING' && "bg-yellow-50 text-yellow-700",
                            selectedTree.status === 'CRITICAL' && "bg-red-50 text-red-700"
                        )}>
                            {selectedTree.status === 'HEALTHY' && <CheckCircle size={16} />}
                            {selectedTree.status === 'WARNING' && <AlertTriangle size={16} />}
                            {selectedTree.status === 'CRITICAL' && <AlertCircle size={16} />}
                            {selectedTree.status}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="md:w-64 flex items-center justify-center text-muted-foreground text-sm border border-dashed border-border rounded-xl">
                    Select a tree to view details
                </div>
            )}
        </div>
    );
}
