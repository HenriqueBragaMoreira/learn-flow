import type { Metadata } from "next";
import { CourseGrid } from "./_components/course-grid";

export const metadata: Metadata = {
  title: "Cursos",
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-12">
      <section className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Aprenda e avance na sua carreira</h1>

        <p className="text-xl text-muted-foreground">
          Explore nossos cursos cuidadosamente elaborados para impulsionar seu
          desenvolvimento profissional.
        </p>
      </section>

      <CourseGrid />
    </div>
  );
}
