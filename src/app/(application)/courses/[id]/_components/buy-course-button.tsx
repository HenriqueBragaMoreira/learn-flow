"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";

export function BuyCourseButton() {
  return (
    <Button
      onClick={() => {
        toast.info("É de graça, apenas aproveite! 🎉");
      }}
      size="lg"
      className="md:w-auto w-full"
    >
      Comprar agora
    </Button>
  );
}
