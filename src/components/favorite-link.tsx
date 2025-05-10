"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { favoriteCoursesStore } from "~/store/favorite-courses";

export function FavoriteLink() {
  const { favoriteCourses } = favoriteCoursesStore();

  return (
    <Link
      href="/favorites"
      className="flex items-center gap-1 hover:text-purple-600 transition-colors"
    >
      <Heart size={20} />
      <span className="font-medium hidden sm:inline">Favoritos</span>

      {favoriteCourses.length > 0 && (
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-1.5 py-0.5 rounded-full">
          {favoriteCourses.length}
        </span>
      )}
    </Link>
  );
}
