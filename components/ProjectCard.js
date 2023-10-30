"use client";

import Image from "next/image";
import getSanityImage from "../util/getSanityImage";
import { useRouter } from "next/navigation";
import { Accordion } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { useCursorTextAtom, useCursorVariantAtom } from "./Jotai";

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="text-sm sm:text-base transition-all font-overpass dark:text-gray-400">
                • {children}
            </li>
        ),
    },
};

const item = {
    hidden: { opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
};

export default function ProjectCard({ post, projectEnter, projectLeave }) {
    const router = useRouter();
    const [cursorText, setCursorText] = useCursorTextAtom()
    const [cursorVariant, setCursorVariant] = useCursorVariantAtom()

    return (
        <motion.div
            whileHover={{scale: 1.05}}
            variants={item}
            className="mx-auto mt-3 m-3 shadow-xl relative rounded-lg text-black dark:shadow-blue-900 dark:shadow-lg"
            key={post._id}
            onMouseEnter={projectEnter}
            onMouseLeave={projectLeave}
        >
            <div className="flex group">
                <motion.h1
                    layoutId={`${post._id}-title`}
                    className="text-lg font-bold absolute transition-all px-3 pt-3 pb-2 bg-slate-50 bg-opacity-60 font-overpass
                                rounded-br-lg rounded-tl-lg sm:text-2xl sm:group-hover:text-3xl sm:group-hover:bg-opacity-100"
                >
                    {post.title}
                </motion.h1>
                <motion.div layoutId={post._id}>
                <Image
                    className="rounded-t-lg cursor-pointer sm:cursor-none"
                    onClick={() => router.push(`/projects/${post.slug}`)}
                    onMouseEnter={() => {
                        setCursorText("humbleicons:expand")
                        setCursorVariant("project")
                    }}
                      onMouseLeave={() => {
                        setCursorText("")
                        setCursorVariant("default")
                    }}
                    src={getSanityImage(post.mainImage).width(576).height(324).url()}
                    alt="project preview"
                    height={324}
                    width={576}
                />
                </motion.div>
                <div
                    className="transition-all flex absolute top-0 right-0 bg-slate-50 bg-opacity-50 
                                    rounded-bl-lg rounded-tr-lg md:group-hover:bg-opacity-100"
                >
                    <motion.a
                        layoutId={`${post._id}-demo`}
                        target="_blank"
                        href={post.demo}
                        rel="noopener noreferrer"
                        className="p-3 z-40"
                    >
                        <Icon
                            className="transition-all sm:hover:scale-[1.15]"
                            icon="eva:external-link-fill"
                            width="30"
                        />
                    </motion.a>
                    <motion.a
                        layoutId={`${post._id}-github`}
                        target="_blank"
                        href={post.github}
                        rel="noopener noreferrer"
                        className="p-3 z-40"
                    >
                        <Icon
                            className="transition-all sm:hover:scale-[1.15]"
                            icon="akar-icons:github-fill"
                            width="30"
                        />
                    </motion.a>
                </div>
            </div>
            <motion.div layoutId={`${post._id}-message`} className="max-w-xl">
                <Accordion variant="filled">
                    <Accordion.Item value={post.summary} className="mt-0">
                        <Accordion.Control className="text-sm rounded-b-lg sm:text-base transition-all font-overpass pt-[17px] dark:bg-darkblue dark:text-white">
                            {post.summary}
                        </Accordion.Control>
                        <Accordion.Panel className="dark:bg-darkblue rounded-b-lg -mt-2">
                            <PortableText
                                value={post.body}
                                components={components}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </motion.div>
        </motion.div>
    );
}
