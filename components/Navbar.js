"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactModal from "./ContactModal";
import { useRouter } from "next/navigation";
import Magnetic from "./Magnetic";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
    const [showContactModal, setShowContactModal] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className="max-w-2xl m-auto pt-3 text-xl sm:text-2xl font-overpass">
                <div className="mx-4 flex justify-between border-b border-black dark:border-white">
                    <Magnetic>
                        <h1
                            className="cursor-pointer font-extrabold sm:hover:scale-[1.15] transition-all"
                            onClick={() => router.push("/")}
                        >
                            Muhammad
                        </h1>
                    </Magnetic>
                    <ul className="flex font-semibold">
                        <Magnetic>
                            <li
                                className="cursor-pointer mr-4 sm:mr-5 transition-all hover:mix-blend-difference relative left-0 top-0"
                                onClick={() => router.push("/projects")}
                            >
                                Projects
                            </li>
                        </Magnetic>
                        <Magnetic>
                            <li
                                className="cursor-pointer transition-all hover:mix-blend-difference relative left-0 top-0"
                                onClick={() => {
                                    setShowContactModal(true);
                                }}
                            >
                                Contact
                            </li>
                        </Magnetic>
                        <Magnetic>
                            <DarkModeSwitch
                                className="ml-4 sm:mt-[2px]"
                                checked={isDarkMode}
                                onChange={(checked) => setIsDarkMode(checked)}
                                moonColor="silver"
                            />
                        </Magnetic>
                    </ul>
                </div>
            </nav>
            <ContactModal
                showContactModal={showContactModal}
                setShowContactModal={setShowContactModal}
            />
        </>
    );
}
