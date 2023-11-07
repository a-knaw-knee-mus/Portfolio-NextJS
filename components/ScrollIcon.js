"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function ScrollIcon({ location }) {
    return (
        <div className="absolute bottom-14 w-full hidden sm:flex justify-center items-center cursor-pointer">
            <Link to={location} smooth={true}>
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-darkblue dark:border-lightgrey flex justify-center items-start p-2">
                    <motion.div
                        animate={{ y: [0, 24, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-3 h-3 rounded-full bg-darkblue dark:bg-lightgrey"
                    ></motion.div>
                </div>
            </Link>
        </div>
    );
}
