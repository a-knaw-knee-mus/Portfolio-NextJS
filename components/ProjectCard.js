"use client";

import Image from "next/image";
import getSanityImage from "../util/getSanityImage";
import { useRouter } from "next/navigation";
import { Accordion } from "@mantine/core";
import { PortableText } from "@portabletext/react";
import { Icon } from "@iconify/react";

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="text-sm sm:text-base transition-all font-overpass dark:text-gray-400">
                • {children}
            </li>
        ),
    },
};

export default function ProjectCard({ post }) {
    const router = useRouter();

    return (
        <div
            className="mx-auto mt-3 m-3 shadow-xl relative rounded-b-sm text-black dark:shadow-blue-900 dark:shadow-lg"
            key={post._id}
        >
            <div className="flex cursor-pointer group">
                <h1
                    onClick={() => router.push(`/projects/${post.slug}`)}
                    className="text-lg font-bold absolute transition-all z-40 px-3 pt-3 pb-2 bg-slate-50 bg-opacity-60 font-overpass
                                rounded-br-sm rounded-tl-sm sm:text-2xl sm:group-hover:text-3xl sm:group-hover:bg-opacity-100"
                >
                    {post.title}
                </h1>
                <Image
                    className="rounded-t-sm"
                    onClick={() => router.push(`/projects/${post.slug}`)}
                    src={getSanityImage(post.mainImage).url()}
                    alt="project preview"
                    height={324}
                    width={576}
                />
                <div
                    className="transition-all flex absolute top-0 right-0 bg-slate-50 bg-opacity-50 
                                    rounded-bl-sm rounded-tr-sm md:group-hover:bg-opacity-100"
                >
                    <a
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
                    </a>
                    <a
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
                    </a>
                </div>
            </div>
            <div className="max-w-xl">
                <Accordion variant="filled">
                    <Accordion.Item value={post.summary} className="mt-0">
                        <Accordion.Control className="text-sm sm:text-base transition-all font-overpass pt-[17px] dark:bg-darkblue dark:text-white">
                            {post.summary}
                        </Accordion.Control>
                        <Accordion.Panel className="dark:bg-darkblue rounded-b-sm">
                            <PortableText
                                value={post.body}
                                components={components}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}
