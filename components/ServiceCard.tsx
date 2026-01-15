'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    colorClass: string;
}

export function ServiceCard({ title, description, icon: Icon, features, colorClass }: ServiceCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
                <Icon size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {description}
            </p>
            <ul className="space-y-2 mb-6">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        {feature}
                    </li>
                ))}
            </ul>
            <button className="w-full py-2 px-4 rounded-lg border border-border text-sm font-medium hover:bg-gray-50 transition-colors">
                Learn More
            </button>
        </div>
    );
}
