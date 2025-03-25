"use client"

import { useColorScheme } from "@/providers/themeProvider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Palette } from "lucide-react"

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change color scheme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setColorScheme("zinc")}>
          Padrão
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("red")}>
          Vermelho
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("rose")}>
          Rosa
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("orange")}>
          Laranja
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("green")}>
          Verde
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("blue")}>
          Azul
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("yellow")}>
          Amarelo
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setColorScheme("violet")}>
          Roxo
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}