import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import type { Course } from "~/types/data";
import { formatCurrency } from "~/utils/formatCurrency";

interface CourseCardProps {
  course: Course;
  isPurchased: boolean;
}

export function CourseCard({ course, isPurchased }: CourseCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm overflow-hidden border border-accent hover:shadow-md transition-shadow">
      <div className="relative">
        <Image
          src="https://kzmlp8t3rjvyhf733pm3.lite.vusercontent.net/placeholder.svg?height=400&width=800&text=Node.js"
          alt={course.title}
          className="h-48 object-cover"
          height={400}
          width={800}
          priority
        />

        <button
          type="button"
          className="absolute top-2 right-2 p-2 bg-background rounded-full shadow-sm hover:bg-accent"
        >
          <Heart size={20} />
        </button>

        {isPurchased && (
          <div className="absolute top-2 left-2 bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            Adquirido
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg line-clamp-1">{course.title}</h3>

          <p className="text-muted-foreground text-sm line-clamp-2">
            {course.description}
          </p>
        </div>

        <div className="flex justify-between items-center">
          {isPurchased ? (
            <Link href={`/courses/${course.id}/watch`} className="w-full">
              <Button variant="default" className="w-full">
                Continuar assistindo
              </Button>
            </Link>
          ) : (
            <>
              <div className="font-bold">{formatCurrency(course.price)}</div>
              <Link href={`/courses/${course.id}`}>
                <Button variant="outline">Acessar curso</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
