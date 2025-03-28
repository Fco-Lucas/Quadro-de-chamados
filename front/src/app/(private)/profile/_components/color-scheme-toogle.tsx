"use client"

import { useColorScheme } from "@/providers/themeProvider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const colors = [
  { label: "Padrão", value: "zinc", color: "bg-zinc-600" },
  { label: "Vermelho", value: "red", color: "bg-red-600" },
  { label: "Rosa", value: "rose", color: "bg-rose-600" },
  { label: "Laranja", value: "orange", color: "bg-orange-600" },
  { label: "Verde", value: "green", color: "bg-green-600" },
  { label: "Azul", value: "blue", color: "bg-blue-600" },
  { label: "Amarelo", value: "yellow", color: "bg-yellow-500" },
  { label: "Roxo", value: "violet", color: "bg-violet-600" },
] as const;

export function ColorSchemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme()

  return (
    <ToggleGroup type="single" defaultValue={colorScheme} className="grid grid-cols-3 gap-2">
      {colors.map((color) => (
        <ToggleGroupItem key={color.value} value={color.value} className={` flex items-center gap-2 p-2 rounded-lg cursor-pointer`} onClick={() => setColorScheme(`${color.value}`)}>
          <div className={`w-4 h-4 rounded-full ${color.color}`}></div>
          {color.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}