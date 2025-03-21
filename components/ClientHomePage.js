"use client";

import Image from "next/image";
import IconifyList from "./IconifyList";
import { Icon } from "@iconify/react";
import { PortableText } from "@portabletext/react";
import getSanityImage from "../util/getSanityImage";
import { useCursorTextAtom, useCursorVariantAtom } from "./Jotai";
import { useSectionInView } from "../util/useSectionInView";
import GithubHeatmap from "./GithubHeatmap";

const components = {
    block: {
        normal: ({ children }) => (
            <p className="mt-6 text-sm sm:text-base md:text-lg font-medium transition-all">
                {children}
            </p>
        ),
    },
};

export default function ClientHomePage({
    homeContent,
    languages,
    technologies,
}) {
    const [cursorText, setCursorText] = useCursorTextAtom();
    const [cursorVariant, setCursorVariant] = useCursorVariantAtom();
    const { ref } = useSectionInView("home", 0.5)

    return (
        <main ref={ref} id="home" className="pt-28 font-overpass max-w-2xl mx-auto px-5 h-screen relative overflow-hidden">
            <div className="m-auto flex rounded-full border-double border-4 w-[120px]">
                <Image
                    className="rounded-full"
                    src={getSanityImage(homeContent.image)
                        .width(120)
                        .height(120)
                        .quality(100)
                        .url()}
                    alt="project preview"
                    height={120}
                    width={120}
                    priority={true}
                />
            </div>
            <div>
                <PortableText components={components} value={homeContent.bio} />
            </div>
            <div className="mt-3 mb-3">
                <IconifyList
                    listNamePlural="Languages"
                    listNameSingular="Language"
                    listItems={languages}
                />
                <IconifyList
                    listNamePlural="Technologies"
                    listNameSingular="Technology"
                    listItems={technologies}
                />
            </div>
            <div className="flex">
                <h2 className="font-extrabold mr-3 text-sm sm:text-base md:text-lg pt-[4px] sm:pt-[1px] md:pt-0">
                    Resume:
                </h2>
                <a
                    target="_blank"
                    href={homeContent.resumeUrl}
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-center sm:hover:scale-125 transition-all"
                >
                    <Icon
                        onMouseEnter={() => {
                            setCursorVariant("icon");
                        }}
                        onMouseLeave={() => {
                            setCursorText("");
                            setCursorVariant("default");
                        }}
                        icon="bi:file-earmark-pdf"
                        width={25}
                    />
                </a>
            </div>
            <div className="mt-5">
                <GithubHeatmap />
            </div>
        </main>
    );
}
