import { ColorSchemeToggle } from "./_components/color-scheme-toogle";
import { ThemeModeToogle } from "./_components/theme-mode-toggle";

export default function Profile() {
  return (
    <main className="p-4 sm:p-6 w-full max-w-full overflow-x-hidden">
      <header className="flex justify-between items-center">
        <p className="text-2xl font-bold mb-3">Editar perfil</p>
        <div className="flex gap-2">
          <ColorSchemeToggle />
          <ThemeModeToogle />
        </div>
      </header>
    </main>
  )
}