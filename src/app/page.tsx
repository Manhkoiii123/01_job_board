import { AppSidebarClient } from "@/app/_AppSidebarClient";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">ManhJobs</span>
          </SidebarHeader>
          <SidebarContent></SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>sdsds</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 ">aaaaaaaaaa</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}

//44 15
