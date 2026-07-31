import { Outlet } from "react-router"

// components
import { MobileSidebar } from "./MobileSidebar/MobileSidebar"
import { LeftSidebar } from "./Sidebar/LeftSidebar"
import { RightSidebar } from "./Sidebar/RightSidebar"

// contexts
import { useUI } from "@/contexts/UIContext"

export function AppLayout() {
    const { isMobile } = useUI();

    return (
        <div
        className={`w-full h-screen flex ${isMobile && "flex-col"}`}
        >
            {!isMobile && <LeftSidebar />}
            <Outlet />
            {isMobile ? <MobileSidebar /> : <RightSidebar />}
        </div>
    )
}