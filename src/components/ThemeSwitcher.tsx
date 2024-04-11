"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {Button} from "@/components/ui/button";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    function setValueTheme(){
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <Button className={`hover:scale-110 active:scale-100 duration-200`}
            onClick={() => setValueTheme()}
        >
            {theme === "light" ? "Dark" : "Light"}
        </Button>
    );
};
