import { Heart } from "lucide-react";
import { user } from "~/data/user";
import { favoriteCoursesStore } from "~/store/favorite-courses";
import { CourseCard } from "../../_components/course-card";

export function FavoritesContainer() {
  const { favoriteCourses } = favoriteCoursesStore();

  return (
    <>
      {favoriteCourses.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Nenhum curso favorito</h2>
          <p className="text-muted-foreground">
            Adicione cursos aos favoritos clicando no ícone de coração na página
            do curso.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isPurchased={user.courses.some((c) => c.courseId === course.id)}
            />
          ))}
        </div>
      )}
    </>
  );
}
