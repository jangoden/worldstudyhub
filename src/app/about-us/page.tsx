
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AboutHero } from '@/components/sections/about/AboutHero';
import { AboutStats } from '@/components/sections/about/AboutStats';
import { OurStory } from '@/components/sections/about/OurStory';
import { LeadershipTeam } from '@/components/sections/about/LeadershipTeam';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
                <AboutHero />
                <AboutStats />
                <OurStory />
                <LeadershipTeam />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
