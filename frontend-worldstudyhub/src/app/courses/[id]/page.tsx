import { notFound } from 'next/navigation';
import Image from 'next/image';
import courseData from '@/components/Courses/courseData';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Course } from '@/types/course';

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return courseData.map((course) => ({
    id: course.id.toString(),
  }));
}

// Helper component for info boxes
const InfoCard = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-sm bg-white p-4 shadow-one dark:bg-dark-2">
    <h4 className="text-body-color mb-1 text-sm font-medium">{label}</h4>
    <p className="text-lg font-bold text-black dark:text-white">{value}</p>
  </div>
);

const CourseDetailsPage = ({ params }: { params: { id: string } }) => {
  const courseId = parseInt(params.id, 10);
  const course = courseData.find((c) => c.id === courseId);

  if (!course) {
    notFound(); // Redirect to 404 page if course is not found
  }

  const {
    title,
    category,
    paragraph,
    image,
    instructor,
    duration,
    effort,
    rating,
    price,
    prerequisites,
    curriculum,
  } = course;

  return (
    <>
      <Breadcrumb
        pageName={title}
        description={`Home / Courses / ${title}`}
      />
      <section className="overflow-hidden py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {/* Main Content */}
            <div className="w-full px-4 lg:w-2/3">
              <div className="shadow-one dark:bg-dark rounded-sm bg-white p-8">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                  {title}
                </h1>
                <div className="mb-6 flex items-center">
                  <span className="bg-primary mr-4 rounded px-3 py-1 text-sm font-medium text-white">
                    {category}
                  </span>
                  <span className="flex items-center text-sm text-body-color">
                    <span className="mr-1 text-yellow-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.24-.662 1.561 0l1.825 3.776 4.166.605c.732.106 1.025.998.494 1.512l-3.014 2.938.712 4.148c.125.728-.638 1.283-1.29.95l-3.727-1.96-3.727 1.96c-.652.333-1.415-.222-1.29-.95l.712-4.148-3.014-2.938c-.531-.514-.238-1.406.494-1.512l4.166-.605 1.825-3.776z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {rating}
                  </span>
                </div>

                <div className="relative mb-8 aspect-[37/22] w-full">
                  <Image src={image} alt={title} fill className="rounded-md object-cover object-center" />
                </div>

                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">About This Course</h2>
                <p className="text-body-color mb-8 text-base leading-relaxed">{paragraph}</p>

                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Curriculum</h2>
                <div className="mb-8 space-y-4">
                  {curriculum.map((module, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-black dark:text-white">{module.title}</h3>
                      <p className="text-body-color text-base">{module.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="mb-4 text-2xl font-bold text-black dark:text-white">Prerequisites</h2>
                <ul className="mb-8 list-disc space-y-2 pl-5">
                  {prerequisites.map((prereq, index) => (
                    <li key={index} className="text-body-color text-base">{prereq}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full px-4 lg:w-1/3">
              <div className="shadow-one dark:bg-dark sticky top-24 rounded-sm bg-white p-8">
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <InfoCard label="Duration" value={duration} />
                  <InfoCard label="Effort" value={effort} />
                </div>

                <div className="mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-black dark:text-white">${price}</span>
                </div>

                <button className="bg-primary hover:bg-primary-dark mb-4 w-full rounded-md py-3 px-6 text-lg font-semibold text-white transition-colors">
                  Enroll Now
                </button>

                <div className="mt-8 text-center">
                  <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">Instructor</h3>
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
                      <Image src={instructor.image} alt={instructor.name} fill className="object-cover" />
                    </div>
                    <h4 className="text-md font-bold text-black dark:text-white">{instructor.name}</h4>
                    <p className="text-body-color text-sm">{instructor.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsPage;
