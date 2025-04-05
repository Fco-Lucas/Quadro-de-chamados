"use client"

import { User2, Home, ChevronsUpDown, ChevronDown, LogOut, Settings } from "lucide-react"
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
import { useEffect, useState } from "react";
import apiServer from "@/lib/apiServer";
import type { UserInterface } from "@/types/users";
import { DetailedSidebarSkeleton } from "../skeletons/detailedSidebarSkeleton";

// Menu items.
const items = [
  {
    title: "Chamados",
    url: "/",
    icon: Home,
    permission: ["ADMIN", "SUPERVISOR", "USER"] // Todos podem acessar
  },
  {
    title: "Usuários",
    url: "/users",
    icon: User2,
    permission: ["ADMIN", "SUPERVISOR"] // Apenas admin e supervisor
  },
]

export function AppSidebar() {
  const router = useRouter()
  const [authToken, setAuthToken] = useState<string | undefined>(undefined)
  const [username, setUsername] = useState<string>("Usuário")
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadUserData = async () => {
      try {
        setIsLoading(true)
        const token = Cookies.get("authToken")
        setAuthToken(token)
        
        if (!token) throw new Error("AuthToken não encontrado")

        const payload = JSON.parse(atob(token.split('.')[1]));
        if (!payload.id) throw new Error("ID não encontrado no token")
        if (!payload.role) throw new Error("Role não encontrado no token")

        const userData = await apiServer<UserInterface>("GET", `/users/${payload.id}`, { 
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        setUsername(userData.name || "Usuário")
        setUserRole(payload.role)
      } catch (err: any) {
        console.error("Erro ao carregar sidebar:", err.message ?? err)
        // if (!authToken) router.push("/sign-in")
      } finally {
        setIsLoading(false)
      }
    };

    loadUserData()
  }, [authToken, router])

  const handleLogout = (): void => {
    Cookies.remove("authToken")
    router.push("/sign-in")
    router.refresh()
  }

  // Filtra os itens baseados na permissão do usuário
  const filteredItems = items.filter(item => userRole && item.permission.includes(userRole))

  if (isLoading) return <DetailedSidebarSkeleton />
  
  return (
    <Sidebar className="flex-shrink-0">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quadro de chamados</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a 
                      className="cursor-pointer flex items-center gap-2 w-full" 
                      onClick={() => router.push(item.url)}
                    >
                      <item.icon className="h-4 w-4" />
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
              <DropdownMenuTrigger asChild className="w-full cursor-pointer!">
                <SidebarMenuButton className="w-full">
                  <div className="flex items-center gap-2 w-full">
                    <User2 className="h-4 w-4" />
                    <span className="truncate">{username}</span>
                    <ChevronsUpDown className="ml-auto h-4 w-4" />
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="left" className="w-[var(--radix-popper-anchor-width)]" align="start">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={() => router.push("/profile")}>
                  <Settings className="h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer flex items-center gap-2" onClick={handleLogout}>
                  <LogOut className="h-4 w-4" />
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