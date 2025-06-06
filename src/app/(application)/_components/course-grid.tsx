import { courses } from "~/data/courses";
import { user } from "~/data/user";
import { CourseCard } from "./course-card";

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isPurchased={user.courses.some((c) => c.courseId === course.id)}
        />
      ))}
    </div>
  );
}
