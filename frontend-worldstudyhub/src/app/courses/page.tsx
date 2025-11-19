import SingleCourse from "@/components/Courses/SingleCourse";
import courseData from "@/components/Courses/courseData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Courses | World Study Hub",
  description: "Explore all available courses at World Study Hub.",
  // other metadata
};

const CoursesPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="All Courses"
        description="Find the right course for you from a wide range of categories. Start your learning journey with us today."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {courseData.map((course) => (
              <div
                key={course.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleCourse course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
