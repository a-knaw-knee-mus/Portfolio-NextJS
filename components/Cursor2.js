import { motion, useMotionValue } from "framer-motion"
import { useState } from "react";
import { useEffect } from "react";

export default function Cursor2({ isDarkMode }) {
    const [cursorSize, setCursorSize] = useState({ width: 40, height: 40 });
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    };

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize.width / 2);
        mouse.y.set(clientY - cursorSize.height / 2);
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    });

    return (
        <motion.div
            className={`w-10 h-10 z-auto inset-0 ${isDarkMode ? "bg-white" : "bg-black"} fixed rounded-full pointer-events-none`}
            style={{x: mouse.x, y: mouse.y}}
            animate={{ width: cursorSize.width, height: cursorSize.height }}
            whileHover={{ mixBlendMode: 'difference' }}
        ></motion.div>
    )
}