"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactModal from "./ContactModal";
import { useRouter } from "next/navigation";
import Magnetic from "./Magnetic";
import Socials from "./Socials";
import { Link } from "react-scroll";
import { Button, Menu } from "@mantine/core";
import { Icon } from "@iconify/react";
import { useDarkModeAtom } from "./Jotai";

export default function Navbar() {
    const [showContactModal, setShowContactModal] = useState(false);
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useDarkModeAtom();

    return (
        <>
            <nav className="text-2xl font-overpass sticky top-0 z-50 overflow-x-hidden">
                <div className="w-full mx-auto bg-lightgrey dark:bg-darkblue">
                    <div className="max-w-2xl mx-auto pt-3 px-3 flex justify-between border-b border-black dark:border-white z-50">
                        <h1 className="cursor-pointer font-extrabold sm:hover:scale-[1.15] transition-all">
                            <Link to="home" smooth={true}>
                                Muhammad
                            </Link>
                        </h1>

                        <ul className="font-semibold flex">
                            <li className="cursor-pointer mr-4 transition-all">
                                <Link
                                    to="experience"
                                    smooth={true}
                                >
                                    <h1 className="hidden sm:inline pointer-events-none sm:pointer-events-auto">
                                        Experience
                                    </h1>
                                    <h1 className="sm:pointer-events-auto sm:hidden">
                                        <Icon
                                            className="pointer-events-none"
                                            icon="material-symbols:work"
                                            width="30"
                                        />
                                    </h1>
                                </Link>
                            </li>
                            <li className="cursor-pointer mr-4 transition-all">
                                <Link to="projects" smooth={true}>
                                    <h1 className="hidden sm:inline pointer-events-none sm:pointer-events-auto">
                                        Projects
                                    </h1>
                                    <h1 className="sm:pointer-events-auto sm:hidden">
                                        <Icon
                                            className="pointer-events-none"
                                            icon="ant-design:project-filled"
                                            width="30"
                                            rotate={3}
                                        />
                                    </h1>
                                </Link>
                            </li>
                            <li
                                className="cursor-pointer transition-all"
                                onClick={() => {
                                    setShowContactModal(true);
                                }}
                            >
                                <h1 className="hidden pointer-events-none sm:pointer-events-auto sm:inline">
                                    Contact
                                </h1>
                                <h1 className="sm:pointer-events-auto sm:hidden">
                                    <Icon
                                        className="pointer-events-none"
                                        icon="ic:round-email"
                                        width="30"
                                    />
                                </h1>
                            </li>
                            <DarkModeSwitch
                                className="ml-4 sm:mt-[2px]"
                                checked={isDarkMode}
                                onChange={(checked) => setIsDarkMode(checked)}
                                moonColor="silver"
                            />
                        </ul>
                    </div>
                </div>
                <Socials />
            </nav>
            <ContactModal
                showContactModal={showContactModal}
                setShowContactModal={setShowContactModal}
            />
        </>
    );
}
