export function OurStory() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 lg:order-1">
                    <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCysEWGbMigzcq2pkxy5H_4Vco0a_ClMBIhg2EANmq3RDxsdK8QclxhIuUsapkKBR5ekZk49Cn2N08yLWzT-I6a0xUIO8y91_lCdtgFzh3iSBYE_Mx54LDfePnDoxKnodu4-zXqgEEFkfXrEINyxlcD8HinI9sdxET_B-enpQR6tITnmDxx2JpCZKWqSDydL7zsruFMvQeqPY0Aha6Ohh6R2hlc4TsI0NlfDvj8gJT1vRvj0S4U_XoOkntwjCKji3vTEFV_JnHTmG4j")' }}></div>
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8 text-white">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="size-2 rounded-full bg-accent"></div>
                                <p className="font-bold uppercase tracking-widest text-xs">Innovation</p>
                            </div>
                            <p className="text-xl font-bold">Bridging the digital divide since 2021.</p>
                        </div>
                    </div>
                    <div className="hidden lg:block absolute -z-10 -top-8 -left-8 size-32 bg-slate-200 dark:bg-slate-800 opacity-20 rounded-full"></div>
                    <div className="absolute -z-10 -bottom-8 -right-8 size-64 bg-accent/5 rounded-full blur-2xl"></div>
                </div>
                <div className="order-1 lg:order-2">
                    <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                        Democratizing access to education across the continent.
                    </h2>
                    <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        <p>
                            World Study Hub was born from a simple yet powerful realization: talent is evenly distributed, but opportunity is not. For millions of ambitious learners across Africa, unstable internet connections and high data costs create an insurmountable barrier to quality education.
                        </p>
                        <p>
                            We refused to accept this status quo. Our platform is engineered with <strong className="text-slate-900 dark:text-white">accessibility at its core</strong>. Through our innovative offline-first technology and low-data learning modes, we ensure that a spotty connection never means a stopped education.
                        </p>
                        <p>
                            Today, we are more than just a Learning Management System; we are a movement. By connecting students with expert mentors and locally relevant content, we are unlocking the potential of Africa&apos;s youth workforce, one lesson at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
