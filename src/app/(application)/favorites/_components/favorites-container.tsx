import { Heart } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { user } from "~/data/user";
import { favoriteCoursesStore } from "~/store/favorite-courses";
import { CourseCard } from "../../_components/course-card";

export function FavoritesContainer() {
  const { favoriteCourses } = favoriteCoursesStore();

  return (
    <>
      {favoriteCourses.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center py-12"
        >
          <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Nenhum curso favorito</h2>
          <p className="text-muted-foreground">
            Adicione cursos aos favoritos clicando no ícone de coração na página
            do curso.
          </p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {favoriteCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                className="h-full"
              >
                <CourseCard
                  course={course}
                  isPurchased={user.courses.some(
                    (c) => c.courseId === course.id
                  )}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
