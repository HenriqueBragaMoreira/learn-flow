"use client";

import { RotateCcw } from "lucide-react";

import { Play } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import type { Course } from "~/types/data";

interface CoursePlayerProps {
  course: Course;
}

export function CoursePlayer({ course }: CoursePlayerProps) {
  const [progress, setProgress] = useState(0);

  function handleContinueWatching() {
    setProgress(Math.min(progress + 10, 100));
  }

  function handleRestart() {
    setProgress(0);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-black border border-accent rounded-xl overflow-hidden relative">
        <div className="aspect-video flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-20 h-20 text-white opacity-70 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div
              className="h-full bg-purple-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="flex-1" onClick={handleContinueWatching}>
          Continuar assistindo
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="flex-1"
          onClick={handleRestart}
        >
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
            <div
              className="bg-purple-500 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-right text-sm text-gray-500 mt-1">
            0% concluído
          </div>
        </div>
      </div>
    </div>
  );
}
