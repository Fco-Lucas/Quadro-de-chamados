import { AppSidebar } from "@/components/ui/appSideBar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex h-dvh w-full max-w-full overflow-x-hidden">
        <AppSidebar />
        <main className="flex-1">
          <SidebarTrigger className="cursor-pointer md:hidden" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  )
}
