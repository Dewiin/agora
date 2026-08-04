import { useNavigate, useLocation } from "react-router"
import logo from "@/assets/agora_logo.svg"

// components
import { Button } from "@/components/ui/button";
import {
    Avatar,
    AvatarImage,
    AvatarFallback
} from "@/components/ui/avatar";

// icons
import { 
    House,
    Search,
    Bell,
    MessageCircle,
    Bookmark, 
    UserRound,
    Settings,
    LogIn
} from "lucide-react";

const navigationMenu = [
    {
        "path": "/",
        "icon": <House />,
        "name": "Home"
    },
    {
        "path": "/search",
        "icon": <Search />,
        "name": "Search"
    },
    {
        "path": "/notifications",
        "icon": <Bell />,
        "name": "Notifications"
    },
    {
        "path": "/messages",
        "icon": <MessageCircle />,
        "name": "Messages"
    },
    {
        "path": "/bookmarks",
        "icon": <Bookmark />,
        "name": "Bookmarks"
    },
    {
        "path": "/profile",
        "icon": <UserRound />,
        "name": "Profile"
    },
    {
        "path": "/settings",
        "icon": <Settings />,
        "name": "Settings"
    },
]

export function LeftSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div 
        className="w-2xs flex flex-col justify-between p-4"
        >
            <div
            className="flex flex-col gap-12 text-lg"
            >
                <img 
                src={logo} 
                width={36} 
                className="cursor-pointer"
                onClick={() => navigate("/")} 
                />
                
                <div className="flex flex-col gap-2">
                {navigationMenu.map(({path, icon, name}) => (
                    <div
                    className={`${location.pathname === path && "bg-accent font-semibold"}
                    flex gap-4 items-center cursor-pointer
                    p-4 rounded-full 
                    hover:bg-accent duration-150`}
                    onClick={() => navigate(path)}
                    >
                        {icon}
                        <p>{name}</p>
                    </div>
                ))}
                </div>

                <Button className="rounded-full py-6 cursor-pointer font-semibold">
                    Post
                </Button>
            </div>
            
            <div 
            className="flex gap-4 cursor-pointer items-center
            p-4 rounded-full text-lg
            hover:bg-accent duration-150 "
            onClick={() => navigate("/login")}
            >
                {/* <Avatar size="lg">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">Devin Xie</p>
                    <p className="text-ring text-sm">@dewiin</p>
                </div> */}
                <LogIn />
                <p>Sign In</p>
            </div>
        </div>
    )
}