"use client";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { favoriteCoursesStore } from "~/store/favorite-courses";
import type { Course } from "~/types/data";

const STATE_MACHINE_NAME = "State Machine 1";
const INPUT_NAME = "Like";

export function FavoriteCourseButton({ course }: { course: Course }) {
  const { isFavoriteCourse, toggleFavoriteCourse } = favoriteCoursesStore();
  const { RiveComponent, rive } = useRive({
    src: "/like.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    shouldDisableRiveListeners: true,
  });

  const isFavorite = isFavoriteCourse(course.id);

  const likeButtonInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME,
    isFavorite
  );

  function handleToggleLike() {
    if (likeButtonInput) {
      likeButtonInput.value = !likeButtonInput.value;
      toggleFavoriteCourse(course);
    }
  }

  return (
    <button
      type="button"
      onClick={() => handleToggleLike()}
      className="border border-muted-foreground rounded-full shadow-sm size-8"
      aria-label={
        isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
      }
    >
      <RiveComponent className="size-full" />
    </button>
  );
}
