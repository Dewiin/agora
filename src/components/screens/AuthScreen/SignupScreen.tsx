import { useNavigate } from "react-router"
import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import logo from "@/assets/agora_logo.svg"

// components
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { GoogleLogo, GithubLogo } from "@/components/ui/logos"
import { FieldError } from "@/components/ui/field"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"
import { Input } from "@/components/ui/input"

// icons
import { Eye, EyeOff } from "lucide-react"

// schemas
import { signupSchema } from "@/schemas/authSchema"

export function SignupScreen() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const form = useForm<z.infer<typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        },
        mode: "onChange"
    });

    async function handleSignup(data: z.infer<typeof signupSchema>) {
        console.log(data);
    }

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
                onSubmit={form.handleSubmit(handleSignup)}
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
                    <div className="flex gap-2 *:flex-1">
                        <Controller
                        name="firstName"
                        control={form.control}
                        render={({field, fieldState, formState}) => (
                            <div className="flex flex-col gap-2">
                                <Input 
                                {...field}
                                aria-invalid={fieldState.invalid}
                                placeholder="First Name" 
                                autoComplete="new-password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </div>
                        )}
                        />
                        <Controller
                        name="lastName"
                        control={form.control}
                        render={({field, fieldState, formState}) => (
                            <div className="flex flex-col gap-2">
                                <Input 
                                {...field}
                                aria-invalid={fieldState.invalid}
                                placeholder="Last Name" 
                                autoComplete="new-password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </div>
                        )}
                        />
                    </div>

                    <Controller
                        name="username"
                        control={form.control}
                        render={({field, fieldState, formState}) => (
                            <div className="flex flex-col gap-2">
                                <Input 
                                {...field}
                                aria-invalid={fieldState.invalid}
                                placeholder="Username" 
                                autoComplete="new-password"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </div>
                        )}
                    />

                    <Controller
                        name="password"
                        control={form.control}
                        render={({field, fieldState, formState}) => (
                            <div className="flex flex-col gap-2">
                                <InputGroup>
                                    <InputGroupInput 
                                    {...field}
                                    aria-invalid={fieldState.invalid}
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Password" 
                                    autoComplete="new-password"
                                    />
                                    <InputGroupAddon 
                                    align="inline-end" 
                                    className="cursor-pointer"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    >
                                        {showPassword ? <Eye /> : <EyeOff />}
                                    </InputGroupAddon>
                                </InputGroup>
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </div>
                        )}
                    />

                    <Button 
                    variant="default"
                    type="submit"
                    className="cursor-pointer"
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