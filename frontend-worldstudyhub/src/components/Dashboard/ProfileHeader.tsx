"use client";

import { mockUser } from "@/data/userData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const ProfileHeader = () => {
  const router = useRouter();
  const user = mockUser; // In a real app, you'd get this from a session

  const handleLogout = () => {
    Cookies.remove("auth_session", { path: '/' });
    router.push("/");
    router.refresh();
  };

  return (
    <div className="shadow-one dark:bg-dark mb-8 rounded-sm bg-white p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Welcome back, {user.name}!
            </h2>
            <p className="text-body-color mt-1 text-base">
              Ready to continue your learning journey?
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-4 text-base font-semibold text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
