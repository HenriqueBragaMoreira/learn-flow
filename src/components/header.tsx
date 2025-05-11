import { LogOut, Settings, UserRound, UserRoundPen } from "lucide-react";
import Link from "next/link";
import { ChangeTheme } from "./changeTheme";
import { FavoriteLink } from "./favorite-link";
import { HeaderAnimation } from "./motion/header-animation";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export function Header() {
  return (
    <HeaderAnimation>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="data:image/jpeg;base64,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"
              alt="Grupo Permaneo"
            />
            <AvatarFallback>GP</AvatarFallback>
          </Avatar>

          <span className="font-bold text-xl">Learn Flow</span>
        </Link>

        <div className="flex items-center gap-6">
          <FavoriteLink />

          <DropdownMenu>
            <DropdownMenuTrigger
              aria-label="Menu de usuário"
              className="size-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-800 font-medium"
            >
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

              <ChangeTheme />

              <DropdownMenuItem>
                <LogOut className="text-destructive" size={20} />
                <span className="font-medium">Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </HeaderAnimation>
  );
}
