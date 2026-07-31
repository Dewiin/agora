import { useNavigate } from "react-router"

// context
import { useUI } from "@/contexts/UIContext"

export function HomeScreen() {
    const { isMobile } = useUI();

    return (
        <div
        className={`flex-1 
        ${isMobile ? "border-b-1" : "border-x-1"} border-sidebar-ring`}
        >
            
        </div>
    )
}