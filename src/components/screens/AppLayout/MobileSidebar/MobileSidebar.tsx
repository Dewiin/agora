import { useLocation, useNavigate } from "react-router"

// icons
import { 
    House,
    Search,
    MessageCircle,
    Bell,
    UserRound,
} from "lucide-react"
import { useEffect } from "react";

const navigationMenu = [
    {
        "path": "/",
        "icon": <House size={24} />
    },
    {
        "path": "/search",
        "icon": <Search size={24} />
    },
    {
        "path": "/notifications",
        "icon": <Bell size={24} />
    },
    {
        "path": "/messages",
        "icon": <MessageCircle size={24} />
    },
    {
        "path": "/profile",
        "icon": <UserRound size={24} />
    },
]

export function MobileSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    useEffect(() => {
        const pathname = location.pathname;

    }, [location]);

    return (
        <div
        className="flex"
        >
            {navigationMenu.map(({path, icon}) => (
                <div 
                className={`${location.pathname === path && "bg-accent"} 
                flex-1 cursor-pointer py-3 rounded-xs
                duration-150 *:m-auto`}
                onClick={() => navigate(path)}
                >
                    {icon}
                </div>
            ))}
        </div>
    )
}