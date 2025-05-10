import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Course } from "~/types/data";

interface FavoriteCoursesStore {
  favoriteCourses: Course[];
  toggleFavoriteCourse: (course: Course) => void;
  isFavoriteCourse: (courseId: number) => boolean;
}

export const favoriteCoursesStore = create(
  persist<FavoriteCoursesStore>(
    (set, get) => ({
      favoriteCourses: [],
      toggleFavoriteCourse: (course: Course) => {
        set((state) => ({
          favoriteCourses: state.favoriteCourses.some((c) => c.id === course.id)
            ? state.favoriteCourses.filter((c) => c.id !== course.id)
            : [...state.favoriteCourses, course],
        }));
      },
      isFavoriteCourse: (courseId: number) =>
        get().favoriteCourses.some((c) => c.id === courseId),
    }),
    {
      name: "favorite-courses",
    }
  )
);
