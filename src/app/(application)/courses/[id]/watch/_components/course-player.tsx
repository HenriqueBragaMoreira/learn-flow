"use client";

import { Play, RotateCcw } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useCourseProgressStore } from "~/store/course-progress";
import type { Course } from "~/types/data";
import { AnimatedProgressBar } from "./animated-progress-bar";

interface CoursePlayerProps {
  course: Course;
}

export function CoursePlayer({ course }: CoursePlayerProps) {
  const { getProgress, setProgress, restartProgress } =
    useCourseProgressStore();

  const progress = getProgress(String(course.id));

  function handleContinueWatching() {
    const newProgress = Math.min(progress + 10, 100);
    setProgress(String(course.id), newProgress);
  }

  function handleRestart() {
    restartProgress(String(course.id));
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-black border border-accent rounded-xl overflow-hidden relative">
        <div className="aspect-video flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-20 h-20 text-white opacity-70 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <AnimatedProgressBar className="h-full" progress={progress} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 sm:*:data-[slot=button]:flex-1">
        <Button size="lg" onClick={handleContinueWatching}>
          Continuar assistindo
        </Button>
        <Button variant="outline" size="lg" onClick={handleRestart}>
          <RotateCcw className="w-4 h-4 mr-2" />
          Reiniciar curso
        </Button>
      </div>

      <div className="bg-card rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold">Sobre este curso</h2>
        <p className="text-muted-foreground mb-6">{course.description}</p>

        <div className="mb-6">
          <h3 className="font-medium mb-2">Seu progresso</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <AnimatedProgressBar
              className="h-2.5 rounded-full"
              progress={progress}
            />
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">
            {progress}% concluído
          </div>
        </div>
      </div>
    </div>
  );
}
