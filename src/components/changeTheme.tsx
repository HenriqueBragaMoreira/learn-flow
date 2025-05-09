"use client";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function ChangeTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenuItem
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
      <span className="font-medium">Tema</span>
    </DropdownMenuItem>
  );
}
