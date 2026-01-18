import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseHeader } from '@/components/sections/course-detail/CourseHeader';
import { VideoPreview } from '@/components/sections/course-detail/VideoPreview';
import { WhatYouWillLearn } from '@/components/sections/course-detail/WhatYouWillLearn';
import { Curriculum } from '@/components/sections/course-detail/Curriculum';
import { CourseSidebar } from '@/components/sections/course-detail/CourseSidebar';
import { MobileBottomBar } from '@/components/sections/course-detail/MobileBottomBar';

export default function CourseDetailPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full pb-24 lg:pb-12">
                <CourseHeader />
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <div className="lg:col-span-8 space-y-10">
                            <VideoPreview />
                            <div>
                                <div className="flex border-b border-border-light dark:border-border-dark mb-8 overflow-x-auto scrollbar-hide">
                                    <button className="px-6 py-4 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap bg-blue-50/50 dark:bg-blue-900/10 hover:cursor-pointer">Overview</button>
                                    <button className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white whitespace-nowrap transition-colors hover:cursor-pointer">Curriculum</button>
                                    <button className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white whitespace-nowrap transition-colors hover:cursor-pointer">Instructor</button>
                                    <button className="px-6 py-4 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white whitespace-nowrap transition-colors hover:cursor-pointer">Reviews</button>
                                </div>
                                <div className="space-y-8 animate-fade-in">
                                    <WhatYouWillLearn />
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Course Description</h3>
                                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            <p className="mb-4">
                                                Poultry farming is one of the most lucrative agricultural businesses in Africa, but success requires more than just buying chicks. This comprehensive course bridges the gap between traditional methods and modern agri-tech solutions.
                                            </p>
                                            <p>
                                                Designed by industry experts and successful farmers, this curriculum covers the entire value chain—from selecting the right breed for your climate to leveraging digital tools for record-keeping and market access. Whether you{`'`}re starting with 50 birds or scaling to 5,000, this course provides the blueprint for a profitable and sustainable poultry business.
                                            </p>
                                        </div>
                                    </div>
                                    <Curriculum />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 relative">
                            <CourseSidebar />
                        </div>
                    </div>
                </div>
            </main>
            <MobileBottomBar />
            <Footer />
        </div>
    );
}
