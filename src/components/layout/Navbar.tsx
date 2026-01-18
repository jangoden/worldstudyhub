"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-md border-b border-border-light dark:border-border-dark px-4 py-4 md:px-6 lg:px-8 transition-colors duration-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 shrink-0 cursor-pointer">
                    <div className="size-9 rounded bg-primary flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                        <span className="material-symbols-outlined text-[22px]">school</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">World Study Hub</h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'About Us', href: '/about-us' },
                        { label: 'Courses', href: '/courses' },
                        { label: 'Blog', href: '/blog' },
                        { label: 'Contact', href: '#' },
                    ].map((item) => (
                        <Link key={item.label} href={item.href} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <button className="hidden sm:block text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white px-3 py-2 transition-colors">
                        Log In
                    </button>
                    <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hidden sm:block cursor-pointer">
                        Get Started
                    </button>
                    <button
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
                    {[
                        { label: 'Home', href: '/' },
                        { label: 'About Us', href: '/about-us' },
                        { label: 'Courses', href: '/courses' },
                        { label: 'Blog', href: '/blog' },
                        { label: 'Contact', href: '#' },
                    ].map((item) => (
                        <Link key={item.label} href={item.href} className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary">
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex flex-col gap-3 mt-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button className="w-full text-center text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg py-2.5 transition-colors">Log In</button>
                        <button className="w-full bg-primary hover:bg-blue-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-blue-500/20">Get Started</button>
                    </div>
                </div>
            )}
        </header>
    );
}
