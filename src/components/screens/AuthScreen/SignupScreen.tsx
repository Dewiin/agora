import { useNavigate } from "react-router"
import logo from "@/assets/agora_logo.svg"

// components
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GoogleLogo, GithubLogo } from "@/components/ui/logos"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

// icons
import { Eye, EyeOff } from "lucide-react"

export function SignupScreen() {
    const navigate = useNavigate();

    return (
        <div 
        className="w-full h-full flex gap-48
        justify-center items-center py-40">
            <div 
            className="h-full w-sm
            flex flex-col gap-12">
                <p className="text-6xl font-bold">
                    Share your story.
                </p>
                <form
                className="flex flex-col gap-4"
                >   
                    {/* Oauth options */}
                    <Button
                    className="rounded-full cursor-pointer py-6"
                    variant="secondary"
                    type="button"
                    >
                            <GoogleLogo />
                            Continue with Google
                    </Button>
                    <Button
                    className="rounded-full cursor-pointer py-6"
                    variant="secondary"
                    type="button"
                    >
                            <GithubLogo />
                            Continue with GitHub
                    </Button>

                    <div className="flex items-center gap-4 
                    *:flex-1">
                        <Separator />
                        or
                        <Separator />
                    </div>

                    {/* Local sign up */}
                    <div className="flex gap-2">
                        <InputGroup>
                            <InputGroupInput placeholder="First Name" />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupInput placeholder="Last Name" />
                        </InputGroup>
                    </div>

                    <InputGroup>
                        <InputGroupInput placeholder="Username" />
                    </InputGroup>

                    <InputGroup>
                        <InputGroupInput type="password" placeholder="Password" />
                        <InputGroupAddon align="inline-end" className="cursor-pointer">
                            <Eye />
                        </InputGroupAddon>
                    </InputGroup>

                    <Button 
                    variant="default"
                    type="submit"
                    >
                        Sign up
                    </Button>

                    <p className="w-full text-muted-foreground text-sm text-center">
                            Already have an account?{" "}
                        <button 
                        className="font-medium underline cursor-pointer" 
                        type="button"
                        onClick={() => navigate("/login")}
                        >
                            Log in
                        </button>
                    </p>
                </form>
            </div>
            <img src={logo} width={500} />
        </div>
    )
}