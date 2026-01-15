'use client';

import { Bundle } from '@/types';
import { Check, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import Link from 'next/link';

interface BundleCardProps {
    bundle: Bundle;
    isPopular?: boolean;
}

export function BundleCard({ bundle, isPopular }: BundleCardProps) {
    return (
        <div className={clsx(
            'relative flex flex-col p-6 rounded-2xl transition-all duration-300',
            'border',
            isPopular
                ? 'bg-primary/5 border-primary shadow-lg scale-105 z-10'
                : 'bg-white border-border shadow-sm hover:shadow-md hover:border-primary/50'
        )}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Best Value
                </div>
            )}

            <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground">{bundle.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{bundle.description}</p>
            </div>

            <div className="mb-6">
                <span className="text-4xl font-bold text-primary">${bundle.price}</span>
                <span className="text-muted-foreground ml-1">/ season</span>
            </div>

            <ul className="flex-1 space-y-3 mb-8">
                {bundle.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <div className="mt-0.5 rounded-full bg-primary/10 p-1 text-primary">
                            <Check size={12} strokeWidth={3} />
                        </div>
                        {feature}
                    </li>
                ))}
            </ul>

            <Link
                href={`/checkout?bundle=${bundle.id}`}
                className={clsx(
                    'mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-colors',
                    isPopular
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                )}
            >
                Choose Plan <ArrowRight size={16} />
            </Link>
        </div>
    );
}
