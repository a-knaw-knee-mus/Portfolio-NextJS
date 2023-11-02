"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";

const container = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0 } },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0,
            delayChildren: 0.5,
            staggerChildren: 0.3,
        },
    },
};

export default function ClientProjectsPage({ projects }) {
    const controls = useAnimation();
    const ref = useRef();
    const isInView = useInView(ref, { once: false });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    return (
        <>
            <div id="projects" className="block w-full h-20 overflow-hidden" />
            <div ref={ref}>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 px-5 items-start"
                >
                    {projects
                        .sort((a, b) => {
                            if (a.indexNumber > b.indexNumber) return 1;
                            if (a.indexNumber < b.indexNumber) return -1;
                            return 0;
                        })
                        .map((post) => {
                            return <ProjectCard key={post._id} post={post} />;
                        })}
                </motion.div>
            </div>
        </>
    );
}
