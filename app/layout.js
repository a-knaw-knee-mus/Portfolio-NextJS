"use client";

import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import {
    useCursorTextAtom,
    useCursorVariantAtom,
    useDarkModeAtom,
} from "../components/Jotai";
import { Icon } from "@iconify/react";

export default function RootLayout({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useDarkModeAtom();
    const ref = useRef(null);
    const mouse = useMouse(ref, { enterDelay: 100, leaveDelay: 100, fps: 60 });
    const [cursorText, setCursorText] = useCursorTextAtom();
    const [cursorVariant, setCursorVariant] = useCursorVariantAtom();

    useEffect(() => {
        setIsDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        setIsMounted(true);
    }, []);

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse !== null) {
        mouseXPosition = mouse.clientX;
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 0,
            height: 0,
            width: 0,
            fontSize: "16px",
            backgroundColor: "white",
            x: mouseXPosition - 5,
            y: mouseYPosition - 5,
        },
        project: {
            opacity: 1,
            backgroundColor: "white",
            color: "#0f172a",
            height: 40,
            width: 40,
            fontSize: "18px",
            x: mouseXPosition - 20,
            y: mouseYPosition - 20,
        },
        icon: {
            opacity: 1,
            height: 46,
            width: 46,
            fontSize: "16px",
            backgroundColor: "white",
            x: mouseXPosition - 23,
            y: mouseYPosition - 23,
            mixBlendMode: "difference",
        },
    };

    return (
        <html lang="en">
            <body ref={ref}>
                <MantineProvider
                    theme={{ colorScheme: isDarkMode ? "dark" : "light" }}
                >
                    <NotificationsProvider>
                        {isMounted && (
                            <div className={`${isDarkMode && "dark"}`}>
                                <div
                                    className={
                                        "transition-all dark:bg-darkblue dark:text-white bg-lightgrey text-black"
                                    }
                                >
                                    {children}
                                    <motion.div
                                        variants={variants}
                                        className="fixed z-50 flex content-center justify-center top-0 left-0 w-[10px] h-[10px] rounded-full pointer-events-none text-center invisible sm:visible"
                                        animate={cursorVariant}
                                    >
                                        {cursorText !== "" && (
                                            <Icon
                                                className="flex-auto text-inherit pointer-events-none m-auto"
                                                icon={cursorText}
                                                width="30"
                                            />
                                        )}
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </NotificationsProvider>
                </MantineProvider>
            </body>
        </html>
    );
}
