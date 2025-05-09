import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import type { Course } from "~/types/data";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-accent hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src="https://kzmlp8t3rjvyhf733pm3.lite.vusercontent.net/placeholder.svg?height=400&width=800&text=Node.js"
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        <button
          type="button"
          className="absolute top-2 right-2 p-2 bg-background rounded-full shadow-sm hover:bg-accent"
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg line-clamp-1">{course.title}</h3>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-bold">{course.price}</div>

          <Link href={`/cursos/${course.id}`}>
            <Button variant="outline">Acessar curso</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
