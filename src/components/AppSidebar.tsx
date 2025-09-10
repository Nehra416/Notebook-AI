
import { Sidebar, SidebarContent, SidebarGroupLabel, SidebarMenuButton, SidebarTrigger, SidebarHeader, SidebarGroup, SidebarMenuItem, SidebarGroupAction, SidebarGroupContent, SidebarMenu, SidebarMenuAction } from '@/components/ui/sidebar'

import { FileText, Plus } from 'lucide-react'
import { Checkbox } from './ui/checkbox'


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className='flex items-center flex-row p-2 border-b'>
                <SidebarTrigger className="dark:hover:bg-[#2f2f2f] hover:bg-[#efefef] m-0.5 cursor-pointer" />
                <SidebarGroupLabel className="text-lg font-[500]">Source</SidebarGroupLabel>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    
                    <SidebarMenuButton className='z-10'>
                        <Plus/>
                        <SidebarGroupLabel>
                            <span className="truncate">Add Source file</span>
                        </SidebarGroupLabel>
                    </SidebarMenuButton>
                    <SidebarGroupLabel>Select Sources</SidebarGroupLabel>

                    <SidebarMenuButton className='mt-2'>
                        <FileText className="text-[#71A5FF]" />
                        <SidebarGroupLabel className='flex justify-between w-full'>
                            <span className="truncate">nodejs.pdf</span>
                            <Checkbox className='mr-5' />
                        </SidebarGroupLabel>
                    </SidebarMenuButton>

                    <SidebarMenuButton className='mt-2'>
                        <FileText className="text-[#71A5FF]" />
                        <SidebarGroupLabel className='flex justify-between w-full'>
                            <span className="truncate">nodejs.pdf</span>
                            <Checkbox className='mr-5' />
                        </SidebarGroupLabel>
                    </SidebarMenuButton>

                    
                </SidebarGroup>
            </SidebarContent>

        </Sidebar>
    )
}
