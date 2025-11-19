import Breadcrumb from "@/components/Common/Breadcrumb";
import MyCourses from "@/components/Dashboard/MyCourses";
import ProfileHeader from "@/components/Dashboard/ProfileHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dashboard | World Study Hub",
  description: "View your enrolled courses and progress.",
};

const DashboardPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="My Dashboard"
        description="Welcome to your learning dashboard."
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <ProfileHeader />
          <div className="mt-12">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
              My Courses
            </h2>
            <MyCourses />
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
