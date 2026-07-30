import { createContext, useState, useEffect, useContext } from "react";

// types
import type { Dispatch, SetStateAction, ReactNode } from "react";

type UIContextProps = {
    isMobile: boolean,
    setIsMobile: Dispatch<SetStateAction<boolean>>
}

const UIContext = createContext<UIContextProps>({
    isMobile: false,
    setIsMobile: () => {}
});

export function UIProvider({children}: {children: ReactNode}) {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            removeEventListener("resize", handleResize);
        }
    }, []);

    const values = {
        isMobile,
        setIsMobile
    }

    return (
        <UIContext value={values}>
            {children}
        </UIContext>
    )
}

export function useUI() {
    return useContext(UIContext);
}