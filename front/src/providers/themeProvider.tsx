"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes"

type ColorScheme = "zinc" | "red" | "rose" | "orange" | "green" | "blue" | "yellow" | "violet" 

const ColorSchemeContext = React.createContext<{
  colorScheme: ColorScheme
  setColorScheme: (color: ColorScheme) => void
}>({
  colorScheme: "zinc",
  setColorScheme: () => {},
})

export function useColorScheme() {
  return React.useContext(ColorSchemeContext)
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("colorScheme") as ColorScheme) || "zinc"
    }
    return "zinc"
  })

  React.useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", colorScheme)
    localStorage.setItem("colorScheme", colorScheme)
  }, [colorScheme])

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ColorSchemeContext.Provider>
  )
}