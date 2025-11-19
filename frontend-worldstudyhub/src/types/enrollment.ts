export type EnrollmentStatus = "Not Started" | "In Progress" | "Completed";

export type Enrollment = {
  id: number;
  userId: number;
  courseId: number;
  progress: number; // A percentage from 0 to 100
  status: EnrollmentStatus;
  enrolledDate: string;
};
