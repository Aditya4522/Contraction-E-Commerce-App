import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";

export default function AdminRoot({children}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="sm:m-10">
        {children}
        </div>
        
      </main>
    </SidebarProvider>
  );
}
