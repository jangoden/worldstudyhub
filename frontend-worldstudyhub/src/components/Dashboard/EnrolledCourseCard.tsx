import { Course } from "@/types/course";
import { Enrollment } from "@/types/enrollment";
import Image from "next/image";
import Link from "next/link";

// A type that combines course and enrollment data
type EnrolledCourse = Course & {
  progress: number;
  status: Enrollment["status"];
};

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
    <div
      className="bg-primary h-2.5 rounded-full"
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const EnrolledCourseCard = ({ course }: { course: EnrolledCourse }) => {
  return (
    <div className="shadow-one dark:bg-dark flex flex-col rounded-sm bg-white">
      <div className="relative aspect-[37/22] w-full">
        <Image src={course.image} alt={course.title} fill className="rounded-t-sm" />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
          {course.title}
        </h3>
        <p className="text-body-color mb-4 text-sm">By {course.instructor.name}</p>

        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className={`text-sm font-semibold ${course.status === 'Completed' ? 'text-green-500' : 'text-body-color'}`}>
              {course.status}
            </span>
            <span className="text-sm font-bold text-black dark:text-white">
              {course.progress}%
            </span>
          </div>
          <ProgressBar progress={course.progress} />
        </div>

        <div className="mt-auto">
          <Link
            href={`/courses/${course.id}`}
            className="bg-primary hover:bg-primary-dark block w-full rounded-md py-2 px-5 text-center text-base font-medium text-white transition-colors"
          >
            {course.status === 'Completed' ? 'View Certificate' : 'Continue Learning'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
