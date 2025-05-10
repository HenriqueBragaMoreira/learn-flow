import { notFound, redirect } from "next/navigation";
import { courses } from "~/data/courses";
import { CoursePlayer } from "./_components/course-player";

import type { Metadata } from "next";
import { user } from "~/data/user";

interface CourseWatchPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Assistir curso",
};

export default async function CourseWatchPage({
  params,
}: CourseWatchPageProps) {
  const { id } = await params;

  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    notFound();
  }

  const isCoursePurchased = user.courses.some((c) => c.courseId === course.id);

  if (!isCoursePurchased) {
    redirect(`/courses/${id}`);
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
