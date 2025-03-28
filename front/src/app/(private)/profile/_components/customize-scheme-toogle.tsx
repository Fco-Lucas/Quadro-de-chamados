import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ColorSchemeToggle } from "./color-scheme-toogle"
import { ThemeSchemeToogle } from "./theme-scheme-toggle"

export function CustomizeSchemeToogle() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="cursor-pointer" variant={"outline"}>Customizar</Button>
      </PopoverTrigger>
      <PopoverContent className="w-100 me-5">
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-300">Cor</p>
            <ColorSchemeToggle />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-300">Modo</p>
            <ThemeSchemeToogle />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}