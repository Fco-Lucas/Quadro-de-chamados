"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const themes = [
  { label: "Claro", value: "light", icon: Sun },
  { label: "Escuro", value: "dark", icon: Moon }
] as const;


export function ThemeSchemeToogle() {
  const { theme, setTheme } = useTheme()

  return (
    <ToggleGroup type="single" defaultValue={theme} className="grid grid-cols-2 gap-2">
      {themes.map(({ value, label, icon: Icon }) => (
        <ToggleGroupItem key={value} value={value} className={`flex items-center gap-2 p-2 rounded-lg cursor-pointer`} onClick={() => setTheme(value)}>
          <Icon className="w-4 h-4" />
          {label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}