import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Header from "@/components/Header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />

            {/* For Sidebar */}
            <div className="mt-[56px]">
                <SidebarProvider>
                    <AppSidebar className="fixed top-14 ml-3 left-0 h-[calc(100vh-75px)] rounded-xl overflow-hidden" />
                    {children}
                </SidebarProvider>
            </div>
        </div>
    )
}