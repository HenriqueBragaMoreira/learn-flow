import { Heart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "~/data/courses";
import { formatCurrency } from "~/utils/formatCurrency";
import { BuyCourseButton } from "./_components/buyCourseButton";

interface CourseDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id.toString(),
  }));
}

export default async function CourseDetailPage({
  params,
}: CourseDetailPageProps) {
  const { id } = await params;

  const course = courses.find((c) => c.id.toString() === id);

  if (!course) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-4xl font-bold">{course.title}</h1>

          <button type="button" className="p-2 rounded-full hover:bg-accent">
            <Heart className="size-6" />
          </button>
        </div>

        <div className="bg-card rounded-xl shadow-md overflow-hidden">
          <div className="h-96 flex items-center justify-center">
            <Image
              src="https://kzmlp8t3rjvyhf733pm3.lite.vusercontent.net/placeholder.svg?height=400&width=800&text=Node.js"
              alt={course.title}
              className="size-full object-cover"
              height={400}
              width={800}
              priority
            />
          </div>

          <div className="p-6">
            <p className="text-lg text-foreground mb-6">{course.description}</p>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-3xl font-bold">
                  {formatCurrency(course.price)}
                </div>

                <div className="text-sm text-muted-foreground">
                  Este curso começa em {new Date().toLocaleDateString("pt-BR")}
                </div>
              </div>

              <BuyCourseButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
