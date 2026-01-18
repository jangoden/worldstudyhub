export function AboutCTA() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
                <div className="absolute -top-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 size-64 bg-accent/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us in shaping the future</h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">Whether you are a student, mentor, or partner, there is a place for you in our community.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-primary hover:bg-blue-50 px-8 py-3.5 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 hover:cursor-pointer">
                            Partner With Us
                        </button>
                        <button className="bg-blue-700/50 hover:bg-blue-700 border border-blue-400/30 text-white px-8 py-3.5 rounded-full font-bold transition-transform hover:-translate-y-1 hover:cursor-pointer">
                            View Open Roles
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
