import SectionTitle from "../Common/SectionTitle";
import SingleCourse from "./SingleCourse";
import courseData from "./courseData";
import Link from "next/link";

const Courses = () => {
  return (
    <section
      id="courses"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Popular Courses"
          paragraph="Choose from our diverse range of courses designed to take your skills to the next level."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {courseData.slice(0, 3).map((course) => (
            <div key={course.id} className="w-full">
              <SingleCourse course={course} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/courses"
            className="bg-primary hover:bg-primary-dark rounded-md py-3 px-8 text-lg font-semibold text-white transition-colors"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
