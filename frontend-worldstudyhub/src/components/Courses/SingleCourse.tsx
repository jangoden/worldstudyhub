import { Course } from "@/types/course";
import Image from "next/image";
import Link from "next/link";

const SingleCourse = ({ course }: { course: Course }) => {
  const { id, title, image, paragraph, instructor, category, rating, duration } = course;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-sm bg-white duration-300">
        <Link
          href={`/courses/${id}`}
          className="relative block aspect-[37/22] w-full"
        >
          <span className="bg-primary absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold capitalize text-white">
            {category}
          </span>
          <Image src={image} alt={title} fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/courses/${id}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image src={instructor.image} alt={instructor.name} fill />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {instructor.name}
                </h4>
                <p className="text-xs text-body-color">{instructor.designation}</p>
              </div>
            </div>
            <div className="inline-flex items-center">
              <span className="mr-2 text-yellow-500">
                {/* Basic star icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path fillRule="evenodd" d="M10.868 2.884c.321-.662 1.24-.662 1.561 0l1.825 3.776 4.166.605c.732.106 1.025.998.494 1.512l-3.014 2.938.712 4.148c.125.728-.638 1.283-1.29.95l-3.727-1.96-3.727 1.96c-.652.333-1.415-.222-1.29-.95l.712-4.148-3.014-2.938c-.531-.514-.238-1.406.494-1.512l4.166-.605 1.825-3.776z" clipRule="evenodd" />
                </svg>
              </span>
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {rating}
              </h4>
              <span className="mx-2 text-gray-400">|</span>
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                {duration}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
