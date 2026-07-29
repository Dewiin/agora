import { Outlet } from "react-router"

// components
import { MobileLeftSidebar } from "./MobileSidebar/MobileLeftSidebar"
import { MobileRightSidebar } from "./MobileSidebar/MobileRightSidebar"
import { LeftSidebar } from "./Sidebar/LeftSidebar"
import { RightSidebar } from "./Sidebar/RightSidebar"

export function AppLayout() {

    return (
        <div
        className="w-full h-screen flex"
        >
            <LeftSidebar />

            <Outlet />

            <RightSidebar />
        </div>
    )
}