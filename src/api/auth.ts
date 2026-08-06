import { api } from "./client";

// types
import type { User } from "@/interfaces/User";

export async function signup(
    data: {
        firstName: string,
        lastName: string,
        username: string,
        password: string
    }
): Promise<User|undefined> {
    const result = await api("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"},
    });

    return result.user;
}