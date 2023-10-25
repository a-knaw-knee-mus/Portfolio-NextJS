"use client";

import { Icon } from "@iconify/react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getSanityImage from "../util/getSanityImage";

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="md:text-lg transition-all font-overpass dark:text-gray-400">
                • {children}
            </li>
        ),
    },
};

export default function ExpandedProjectCard({ project }) {
    return (
        <>
            <div className="m-auto text-center p-5">
                <h1 className="font-semibold text-3xl font-overpass">
                    {project.title}
                </h1>
                <div
                    className="transition-all flex bg-opacity-50 
                    rounded-bl-md md:group-hover:bg-opacity-100 justify-center"
                >
                    <a
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
                    </a>
                    <a
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
                    </a>
                </div>
                <div className="flex justify-center drop-shadow-md">
                    <Image
                        className="rounded-t-md"
                        src={getSanityImage(project.mainImage).url()}
                        alt="project preview"
                        height={513}
                        width={912}
                        priority={true}
                    />
                </div>
                <div className="max-w-[912px] m-auto text-left shadow-xl p-4 rounded-b-md dark:shadow-blue-900 dark:shadow-lg">
                    <p className="transition-all font-semibold text-lg md:text-2xl my-2 font-overpass">
                        {project.summary}
                    </p>
                    <PortableText
                        value={project.body}
                        components={components}
                    />
                </div>
            </div>
        </>
    );
}
