"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState, useRef } from "react";
import Cursor from "../components/Cursor";
import Cursor2 from "../components/Cursor2";

export default function RootLayout({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const stickyRef = useRef(null);

    useEffect(() => {
        setIsDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        setIsMounted(true);
    }, []);

    return (
        <html lang="en">
            <body>
                <Cursor2 isDarkMode={isDarkMode} />
                {/* <Cursor isDarkMode={isDarkMode} stickyRef={stickyRef} /> */}
                <MantineProvider
                    theme={{ colorScheme: isDarkMode ? "dark" : "light" }}
                >
                    <NotificationsProvider>
                        <div className={`${isDarkMode && "dark"}`}>
                            {isMounted && (
                                <div
                                    className={
                                        "min-h-screen transition-all dark:bg-darkblue dark:text-white"
                                    }
                                >
                                    <Navbar
                                        isDarkMode={isDarkMode}
                                        setIsDarkMode={setIsDarkMode}
                                        ref={stickyRef}
                                    />
                                    {children}
                                    <Footer />
                                </div>
                            )}
                        </div>
                    </NotificationsProvider>
                </MantineProvider>
                <Cursor2 isDarkMode={isDarkMode} />
            </body>
        </html>
    );
}
