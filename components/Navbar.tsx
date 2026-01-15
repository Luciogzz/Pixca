'use client';

import Link from 'next/link';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/advanced', label: 'Advanced' },
    { href: '/services', label: 'Services' },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-xl supports-[backdrop-filter]:bg-white/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Leaf size={20} />
                    </div>
                    <span>Pixca</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                'text-sm font-medium transition-colors hover:text-primary',
                                pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/dashboard"
                        className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur px-4 py-4 shadow-lg">
                    <div className="flex flex-col space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={clsx(
                                    'text-sm font-medium transition-colors hover:text-primary',
                                    pathname === link.href ? 'text-primary' : 'text-foreground'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            onClick={() => setIsOpen(false)}
                            className="w-full rounded-md bg-primary px-4 py-2 text-center text-sm font-medium text-primary-foreground"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
