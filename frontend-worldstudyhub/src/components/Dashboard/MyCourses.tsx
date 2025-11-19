import { enrollmentData } from "@/data/enrollmentData";
import courseData from "@/components/Courses/courseData";
import EnrolledCourseCard from "./EnrolledCourseCard";
import { Course } from "@/types/course";
import { Enrollment } from "@/types/enrollment";
import Link from "next/link";

// A type that combines course and enrollment data
type EnrolledCourse = Course & {
  progress: number;
  status: Enrollment["status"];
};

const MyCourses = () => {
  // In a real app, you'd get the userId from the session
  const loggedInUserId = 1;

  const userEnrollments = enrollmentData.filter(
    (enrollment) => enrollment.userId === loggedInUserId
  );

  const enrolledCourses: EnrolledCourse[] = userEnrollments.map((enrollment) => {
    const course = courseData.find((c) => c.id === enrollment.courseId);
    // Note: In a real app, handle the case where a course might not be found
    return {
      ...course!,
      progress: enrollment.progress,
      status: enrollment.status,
    };
  });

  return (
    <div>
      {enrolledCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {enrolledCourses.map((course) => (
            <EnrolledCourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <p className="text-body-color text-lg">You are not enrolled in any courses yet.</p>
          <Link href="/courses" className="text-primary hover:underline mt-2 inline-block">
            Browse Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
