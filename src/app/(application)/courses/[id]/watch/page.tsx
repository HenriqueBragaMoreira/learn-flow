import { notFound } from "next/navigation";
import { courses } from "~/data/courses";
import { CoursePlayer } from "./_components/course-player";

interface CourseWatchPageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseWatchPage({
  params,
}: CourseWatchPageProps) {
  const { id } = await params;

  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{course.title}</h1>

        <CoursePlayer course={course} />
      </div>
    </div>
  );
}
