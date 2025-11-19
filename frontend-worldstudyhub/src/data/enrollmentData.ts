import { Enrollment } from "@/types/enrollment";

export const enrollmentData: Enrollment[] = [
  {
    id: 1,
    userId: 1,
    courseId: 1, // Modern Web Development
    progress: 75,
    status: "In Progress",
    enrolledDate: "2025-09-01",
  },
  {
    id: 2,
    userId: 1,
    courseId: 2, // UI/UX Design Fundamentals
    progress: 100,
    status: "Completed",
    enrolledDate: "2025-07-15",
  },
  {
    id: 3,
    userId: 1,
    courseId: 3, // Agile Project Management
    progress: 20,
    status: "In Progress",
    enrolledDate: "2025-10-05",
  },
];
