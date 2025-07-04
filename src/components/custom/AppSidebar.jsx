import {  ChartBar, FilePlus2Icon, GalleryVerticalEnd, PackageSearchIcon, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Button } from "../ui/button"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { SetUserLogOut } from "@/redux/Slices/AuthSlice"


// Menu items.
const items = [
  {
    title: "Create Products",
    url: "/admin/dashboard",
    icon: FilePlus2Icon,
  },
  {
    title: "All Products",
    url: "/admin/dashboard/all-products",
    icon: GalleryVerticalEnd,
  },
  {
    title: "Orders",
    url: "/admin/dashboard/orders",
    icon: PackageSearchIcon,
  },
  {
    title: "Analytics",
    url: "/admin/dashboard/analytics",
    icon: ChartBar,
  },
  {
    title: "Settings",
    url: "/admin/dashboard/settings",
    icon: Settings,
  },
]

export default function AppSidebar() {
  const dispatch = useDispatch()
    const {pathname} = useLocation()
  return (
    <Sidebar>
        <SidebarHeader className="text-2xl font-bold"> Dashboard</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
            <SidebarMenu>
              {items.map((item ,idx) => (
                <SidebarMenuItem key={idx}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button onClick={()=> dispatch(SetUserLogOut())}>Log out</Button>
      </SidebarFooter>
    </Sidebar>
  )
}
