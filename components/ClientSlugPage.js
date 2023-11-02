"use client";

import { Icon } from "@iconify/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getSanityImage from "../util/getSanityImage";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCursorTextAtom, useCursorVariantAtom } from "./Jotai";

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="md:text-lg transition-all font-overpass dark:text-gray-400">
                • {children}
            </li>
        ),
    },
};

export default function ClientSlugPage({ project }) {
    const router = useRouter();
    const [cursorText, setCursorText] = useCursorTextAtom();
    const [cursorVariant, setCursorVariant] = useCursorVariantAtom();

    return (
        <div
            className="cursor-pointer sm:cursor-none"
            onMouseEnter={() => {
                setCursorText("carbon:previous-filled");
                setCursorVariant("project");
            }}
            onMouseLeave={() => {
                setCursorText("");
                setCursorVariant("default");
            }}
            onClick={() => {
                router.push(`/#projects`);
                setCursorText("");
                setCursorVariant("default");
            }}
        >
            <motion.div
                className="m-auto text-center p-5 max-w-[912px] cursor-auto"
                transition={{ delay: 1 }}
                onMouseLeave={() => {
                    setCursorText("carbon:previous-filled");
                    setCursorVariant("project");
                }}
                onMouseEnter={() => {
                    setCursorText("");
                    setCursorVariant("default");
                }}
            >
                <motion.h1
                    layoutId={`${project._id}-title`}
                    className="font-semibold text-3xl font-overpass"
                >
                    {project.title}
                </motion.h1>
                <div
                    className="transition-all flex bg-opacity-50 
                    rounded-bl-md md:group-hover:bg-opacity-100 justify-center"
                >
                    <motion.a
                        layoutId={`${project._id}-demo`}
                        target="_blank"
                        href={project.demo}
                        rel="noopener noreferrer"
                        className="p-3"
                    >
                        <Icon
                            className="transition-all md:hover:scale-[1.15]"
                            icon="eva:external-link-fill"
                            width="40"
                        />
                    </motion.a>
                    <motion.a
                        layoutId={`${project._id}-github`}
                        target="_blank"
                        href={project.github}
                        rel="noopener noreferrer"
                        className="p-3"
                    >
                        <Icon
                            className="transition-all md:hover:scale-[1.15]"
                            icon="akar-icons:github-fill"
                            width="40"
                        />
                    </motion.a>
                </div>
                <motion.div
                    layoutId={project._id}
                    className="flex justify-center drop-shadow-md"
                >
                    <Image
                        className="rounded-t-md"
                        src={getSanityImage(project.mainImage)
                            .width(912)
                            .height(513)
                            .url()}
                        alt="project preview"
                        height={513}
                        width={912}
                        priority={true}
                    />
                </motion.div>
                <motion.div
                    layoutId={`${project._id}-message`}
                    className="max-w-[912px] m-auto text-left shadow-xl p-4 rounded-b-md dark:shadow-blue-900 dark:shadow-lg"
                >
                    <p className="transition-all font-semibold text-lg md:text-2xl my-2 font-overpass">
                        {project.summary}
                    </p>
                    <PortableText
                        value={project.body}
                        components={components}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
