"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.3,
        },
    },
};

export default function ClientProjectsPage({ projects }) {
    return (
        <div>
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 px-5 pt-5 items-start"
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
