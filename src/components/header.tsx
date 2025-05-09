import {
  Heart,
  LogOut,
  Settings,
  Sun,
  UserRound,
  UserRoundPen,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  return (
    <header className="bg-background shadow-sm sticky top-0 z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://grupopermaneo.com.br/img/faviconLight.svg?2023110632321150?2023110632321150"
              alt="Grupo Permaneo"
            />
            <AvatarFallback>GP</AvatarFallback>
          </Avatar>

          <span className="font-bold text-xl">Learn Flow</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/favoritos"
            className="flex items-center gap-1 hover:text-purple-600 transition-colors"
          >
            <Heart size={20} />
            <span className="font-medium hidden sm:inline">Favoritos</span>

            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-0.5 rounded-full">
              1
            </span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-medium">
              <UserRound size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <UserRoundPen size={20} />
                <span className="font-medium">Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings size={20} />
                <span className="font-medium">Configurações</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Sun size={20} />
                <span className="font-medium">Tema</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="text-destructive" size={20} />
                <span className="font-medium">Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
