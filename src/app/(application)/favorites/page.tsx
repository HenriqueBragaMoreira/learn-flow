"use client";
import { FavoritesContainer } from "./_components/favorites-container";

export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Meus Favoritos</h1>

      <FavoritesContainer />
    </div>
  );
}
