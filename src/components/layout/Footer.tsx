import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-border-light dark:border-border-dark pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="size-8 rounded bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-[20px]">school</span>
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">World Study Hub</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                            Empowering the next generation of African leaders through accessible, offline-first education technology.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="size-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-sm">public</span>
                            </Link>
                            <Link href="#" className="size-9 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-sm">alternate_email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Partners</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Impact Report</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Resources</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="/courses" className="hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Scholarships</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
                                <span>Lagos, Nigeria</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">email</span>
                                <span>hello@worldstudyhub.com</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                                <span>+234 800 123 4567</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <p>© 2024 World Study Hub. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
