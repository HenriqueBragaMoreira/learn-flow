import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CourseProgressState {
  progress: Record<string, number>;
  setProgress: (courseId: string, progress: number) => void;
  getProgress: (courseId: string) => number;
  restartProgress: (courseId: string) => void;
}

export const useCourseProgressStore = create<CourseProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      setProgress: (courseId, newProgress) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [courseId]: Math.max(0, Math.min(100, newProgress)),
          },
        })),
      getProgress: (courseId) => get().progress[courseId] || 0,
      restartProgress: (courseId) =>
        set((state) => {
          const { [courseId]: _, ...rest } = state.progress;
          return {
            progress: rest,
          };
        }),
    }),
    {
      name: "course-progress-storage",
    }
  )
);
