import { Outlet } from "react-router"

// components
import { MobileLeftSidebar } from "./MobileSidebar/MobileLeftSidebar"
import { MobileRightSidebar } from "./MobileSidebar/MobileRightSidebar"
import { LeftSidebar } from "./Sidebar/LeftSidebar"
import { RightSidebar } from "./Sidebar/RightSidebar"

// contexts
import { useUI } from "@/contexts/UIContext"

export function AppLayout() {
    const { isMobile } = useUI();

    return (
        <div
        className="w-full h-screen flex"
        >
            {isMobile ? <MobileLeftSidebar /> : <LeftSidebar />}
            <Outlet />
            {isMobile ? <MobileRightSidebar /> : <RightSidebar />}
        </div>
    )
}