// types
import type { Dispatch, SetStateAction } from "react";
import type { Sonner } from "@/interfaces/Sonner";

const VITE_API_URL = import.meta.env.VITE_API_URL;

export async function api(
    path: string,
    options: RequestInit = {},
    setSonner?: Dispatch<SetStateAction<Sonner>>,
) { 
    let response = await fetch(`${VITE_API_URL}${path}`, {
        ...options,
        credentials: "include"
    });

    if(response.status === 401) {
        const refreshResponse = await fetch(`${VITE_API_URL}/api/auth/refresh`, {
            method: "GET",
            credentials: "include"
        });

        if (!refreshResponse.ok) {
            setSonner && setSonner({type: "warning", message: "Refresh failed"});
            return;
        }

        response = await fetch(`${VITE_API_URL}${path}`, {
            ...options,
            credentials: "include"
        });
    }

    let result = await response.json();
    let type = "success";
    if(!response.ok) type = "error";

    setSonner && setSonner({
        type,
        message: result.message
    });

    return result;
}