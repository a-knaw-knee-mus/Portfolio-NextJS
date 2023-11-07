"use client";

import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactModal from "./ContactModal";
import Socials from "./Socials";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import { useActiveSectionAtom, useDarkModeAtom, useTimeOfLastClickAtom } from "./Jotai";
import { motion } from "framer-motion";

export default function Navbar() {
    const [showContactModal, setShowContactModal] = useState(false);
    const [isDarkMode, setIsDarkMode] = useDarkModeAtom();
    const [activeTab, setActiveTab] = useState("home");
    const [activeSection, setActiveSection] = useActiveSectionAtom();
    const [timeOfLastClick, setTimeOfLastClick] = useTimeOfLastClickAtom()

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative"
        >
            <div className="text-xl w-full font-overpass h-[4.5rem] fixed top-0 z-50 mt-0 mx-auto items-center">
                <div className="relative max-w-xl mx-auto py-2 px-2 mt-3 flex scale-90 sm:scale-100 transition-transform bg-white rounded-full bg-opacity-80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.2rem]">
                    <ul className="w-full font-semibold flex justify-between text-black">
                        <li className="relative px-3 py-1 cursor-pointer transition-all">
                            {activeSection === "home" && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gray-200"
                                    style={{ borderRadius: 9999 }}
                                />
                            )}
                            <Link
                                className="hover:opacity-80 transition-opacity"
                                onClick={() => {
                                    setActiveSection("home");
                                    setTimeOfLastClick(Date.now());
                                }}
                                to="home"
                                smooth={true}
                            >
                                <span className="hidden sm:inline relative z-10">
                                    About
                                </span>
                                <span className="z-10 sm:pointer-events-auto relative sm:hidden">
                                    <Icon
                                        className="pointer-events-none"
                                        icon="mdi:about"
                                        width="30"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li className="relative px-3 py-1 cursor-pointer transition-all">
                            {activeSection === "experience" && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gray-200"
                                    style={{ borderRadius: 9999 }}
                                />
                            )}
                            <Link
                                className="hover:opacity-80 transition-opacity"
                                onClick={() => {
                                    setActiveSection("experience");
                                    setTimeOfLastClick(Date.now());
                                }}
                                to="experience"
                                smooth={true}
                            >
                                <span className="hidden sm:inline relative z-10">
                                    Experience
                                </span>
                                <span className="z-10 sm:pointer-events-auto relative sm:hidden">
                                    <Icon
                                        className="pointer-events-none"
                                        icon="material-symbols:work"
                                        width="30"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li className="relative px-3 py-1 cursor-pointer transition-all">
                            {activeSection === "projects" && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gray-200"
                                    style={{ borderRadius: 9999 }}
                                />
                            )}
                            <Link
                                className="hover:opacity-80 transition-opacity"
                                onClick={() => {
                                    setActiveSection("projects");
                                    setTimeOfLastClick(Date.now());
                                }}
                                to="projects"
                                smooth={true}
                            >
                                <span className="hidden sm:inline relative z-10">
                                    Projects
                                </span>
                                <span className="z-10 relative sm:pointer-events-auto sm:hidden">
                                    <Icon
                                        className="pointer-events-none"
                                        icon="ant-design:project-filled"
                                        width="30"
                                    />
                                </span>
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                setShowContactModal(true);
                            }}
                            className="relative px-3 py-1 cursor-pointer transition-all"
                        >
                            {activeTab === "contact" && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-gray-200"
                                    style={{ borderRadius: 9999 }}
                                />
                            )}
                            <span className="hidden sm:inline relative z-10 hover:opacity-80 transition-opacity">
                                Contact
                            </span>
                            <span className="z-10 relative sm:pointer-events-auto sm:hidden hover:opacity-80 transition-opacity">
                                <Icon
                                    className="pointer-events-none"
                                    icon="ic:round-email"
                                    width="30"
                                />
                            </span>
                        </li>
                        <DarkModeSwitch
                            className="mt-1.5 sm:mt-1 mr-1"
                            checked={isDarkMode}
                            onChange={(checked) => setIsDarkMode(checked)}
                            moonColor="gray"
                        />
                    </ul>
                </div>
                <Socials />
            </div>
            <ContactModal
                showContactModal={showContactModal}
                setShowContactModal={setShowContactModal}
            />
        </motion.nav>
    );
}
