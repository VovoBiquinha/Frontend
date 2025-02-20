'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOutIcon, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '../themes/theme-toggle';
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";

export default function AvatarUser() {
  // const router = useRouter()

  // const [user, setUser] = useState<any>(null)

  return (
    <div className="mr-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="relative flex items-center justify-center w-10 h-10 p-0 rounded-full"
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              {/* <div className="flex items-center justify-center bg-gray-300 text-black font-bold w-10 h-10 rounded-full">
                    {initials}
                  </div> */}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="left-0 -translate-x-10">
          <DropdownMenuLabel>
            Minha Conta <ThemeToggle />
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="flex items-center mt-4 mb-4">
            <Avatar>
              {/* <div className="flex items-center justify-center bg-gray-300 text-black font-bold w-10 h-10 rounded-full">
                        {initials}
                        </div> */}
            </Avatar>
            {/* <div className="ml-2">
                    <h1 className="font-sans">{formattedUsername}</h1>
                    <h1 className="font-sans">{user.email}</h1>
                    </div>*/}
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer" /*onClick={handleLogout}*/
          >
            <LogOutIcon className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
