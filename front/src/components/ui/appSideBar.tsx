"use client"

import { User2, Home, ChevronsUpDown, ChevronDown, LogOut } from "lucide-react"
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import Cookies from "js-cookie"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { useTheme } from "next-themes";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSub, MenubarSubContent, MenubarSubTrigger } from "./menubar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Usuários",
    url: "/users",
    icon: User2,
  },
]

export function AppSidebar() {
  const { setTheme } = useTheme()
  const router = useRouter()

  const Logout = (): void => {
    Cookies.remove("authToken");
    router.push("/sign-in");
  }
  
  return (
    <Sidebar className="flex-shrink-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quadro de chamados</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a className="cursor-pointer" onClick={() => router.push(item.url)}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer!">
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="left" className="w-[--radix-popper-anchor-width]">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => Logout()}>
                  <LogOut />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
