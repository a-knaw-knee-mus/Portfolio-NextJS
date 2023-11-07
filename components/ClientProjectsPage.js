"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef } from "react";
import { useSectionInView } from "../util/useSectionInView";

const container = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0 } },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0,
            delayChildren: 0.7,
            staggerChildren: 0.3,
        },
    },
};

export default function ClientProjectsPage({ projects }) {
    const controls = useAnimation();
    const { ref } = useSectionInView("projects", 0.1);
    const inViewRef = useRef();
    const isInView = useInView(inViewRef, { once: false });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, isInView]);

    return (
        <div ref={inViewRef} id="projects" className="pt-24">
            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}
                className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 px-5 items-start pb-10"
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
    );
}
