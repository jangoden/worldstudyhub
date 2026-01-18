import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CoursesHeader } from '@/components/sections/courses/CoursesHeader';
import { CourseGrid } from '@/components/sections/courses/CourseGrid';
import { CoursesPagination } from '@/components/sections/courses/CoursesPagination';

export default function CoursesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow w-full">
                <CoursesHeader />
                <CourseGrid />
                <CoursesPagination />
            </main>
            <Footer />
        </div>
    );
}
