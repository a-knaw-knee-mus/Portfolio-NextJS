"use client";

import { animate, motion, transform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Cursor({ isDarkMode, stickyRef }) {
    const [isHovered, setIsHovered] = useState(false);
    const [cursorSize, setCursorSize] = useState({ width: 40, height: 40 });
    const cursorRef = useRef(null);
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const smoothOptions = { damping: 10, stifness: 300, mass: 0.5 };
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions),
    };

    const manageMouseMove = (e, ref) => {
        if (!stickyRef.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } =
           ref.getBoundingClientRect();
        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = {x:clientX-center.x, y:clientY-center.y}

        if (isHovered) {
            mouse.x.set((center.x - cursorSize.width / 2) + distance.x*0.1);
            mouse.y.set((center.y - cursorSize.height / 2) + distance.y*0.1);
        } else {
            mouse.x.set(clientX - cursorSize.width / 2);
            mouse.y.set(clientY - cursorSize.height / 2);
        }
    };

    const manageMouseOver = (ref) => {
        setIsHovered(true);
        if (!stickyRef.current) return;
        const { left, top, width, height } =
            ref.getBoundingClientRect();
        setCursorSize({ width: width+18, height: height });
    };

    const manageMouseLeave = () => {
        setIsHovered(false);
        setCursorSize({ width: 40, height: 40 });
    };

    useEffect(() => {
        let sRef = null;
        let sTitleRef = null;
        let cRef = null;
        let cTitleRef = null;
        
        if (stickyRef.current) {
            sRef = stickyRef.current.projects;
            sTitleRef = stickyRef.current.projectsTitle;
            if (sRef) {
                sRef.addEventListener("mouseover", () => manageMouseOver(sTitleRef));
                sRef.addEventListener("mouseleave", manageMouseLeave);

                window.addEventListener("mousemove", () => manageMouseMove(sRef));
            }

            cRef = stickyRef.current.contact;
            cTitleRef = stickyRef.current.contactTitle;
            if (cRef) {
                cRef.addEventListener("mouseover", () => manageMouseOver(cTitleRef));
                cRef.addEventListener("mouseleave", manageMouseLeave);

                window.addEventListener("mousemove", () => manageMouseMove(cRef));
            }
        }

        return () => {
            if (sRef) {
                sRef.removeEventListener("mouseover", () => manageMouseOver(sTitleRef));
                sRef.removeEventListener("mouseleave", manageMouseLeave);

                window.removeEventListener("mousemove", () => manageMouseMove(sRef));
            }

            if (cRef) {
                cRef.removeEventListener("mouseover", () => manageMouseOver(cTitleRef));
                cRef.removeEventListener("mouseleave", manageMouseLeave);

                window.removeEventListener("mousemove", () => manageMouseMove(cRef));
            }
        };
    });

    return (
        <motion.div
            ref={cursorRef}
            className={`w-10 h-10 z-auto inset-0 ${isDarkMode ? "bg-white" : "bg-black"} ${isHovered ? "blur-none" : "blur-lg"} fixed rounded-md pointer-events-none`}
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
            animate={{ width: cursorSize.width, height: cursorSize.height }}
        ></motion.div>
    );
}
