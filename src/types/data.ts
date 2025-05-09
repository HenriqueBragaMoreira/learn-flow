export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
}

export interface User {
  id: number;
  name: string;
  courses: UserCourses[];
}

export interface UserCourses {
  courseId: number;
  dateJoined: string;
}
