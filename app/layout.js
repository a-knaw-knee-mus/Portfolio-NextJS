"use client";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
    const [isMounted, setIsMounted] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );
        setIsMounted(true);
    }, []);

    return (
        <html lang="en">
            <body>
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
                                    />
                                    {children}
                                    <Footer />
                                </div>
                            )}
                        </div>
                    </NotificationsProvider>
                </MantineProvider>
            </body>
        </html>
    );
}
