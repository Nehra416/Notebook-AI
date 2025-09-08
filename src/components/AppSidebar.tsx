import { Sidebar, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>

            <SidebarHeader className="flex flex-row justify-between">
                {/* <h1 className="text-lg">Sources</h1> */}
                <SidebarTrigger />
            </SidebarHeader>
        </Sidebar>
    )
}