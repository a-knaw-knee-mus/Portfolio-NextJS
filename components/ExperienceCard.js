"use client";

import { motion } from "framer-motion";
import Blob from "./Blob";
import ScrollIcon from "./ScrollIcon";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getSanityImage from "../util/getSanityImage";
import { useSectionInView } from "../util/useSectionInView";

const ExperienceCard = ({ experiences }) => {
    const { ref } = useSectionInView("experience", 0.5);

    return (
        <div className="relative">
            <div
                ref={ref}
                id="experience"
                className="min-h-screen pt-24 justify-center align-middle items-center flex relative overflow-x-hidden"
            >
                <Blob />
                <motion.div className="scale-75 sm:scale-100 max-w-7xl mx-auto relative z-0 my-auto">
                    <motion.div
                        variants={timelineVariants}
                        initial="hidden"
                        whileInView="visible"
                        className="absolute left-[56px] border-l-2 h-full border-gray-500"
                    />
                    <motion.ol
                        className="relative"
                        variants={listVariants}
                        initial="hidden"
                        whileInView="visible"
                    >
                        {experiences
                            .sort((a, b) => {
                                if (a.indexNumber > b.indexNumber) return 1;
                                if (a.indexNumber < b.indexNumber) return -1;
                                return 0;
                            })
                            .map((experience) => {
                                return (
                                    <JobCard
                                        key={experience._id}
                                        experience={experience}
                                    />
                                );
                            })}
                    </motion.ol>
                </motion.div>
            </div>
            <ScrollIcon location={"projects"} />
        </div>
    );
};

const JobCard = ({ experience }) => {
    const options = { year: "numeric", month: "long" };
    const startDate = new Date(experience.startDate);
    const formattedStartDate = startDate.toLocaleString(undefined, options);
    const endDate = new Date(experience.endDate);
    const formattedEndDate = endDate.toLocaleString(undefined, options);

    return (
        <motion.li
            variants={listItemVariants}
            className="mb-7 ml-6 flex items-start pr-4"
        >
            <span className="w-16 h-16 bg-blue-300 rounded-full ring-8 ring-lightgrey dark:ring-darkblue dark:bg-blue-900">
                <Image
                    className="w-12 h-12 mx-2 my-2"
                    src={getSanityImage(experience.companyLogo)
                        .width(120)
                        .height(120)
                        .url()}
                    alt="company logo"
                    height={160}
                    width={160}
                />
            </span>
            <div className="flex-1 ml-5">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {`${experience.company} `}
                    {experience.isCurrentPosition && (
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                            Current
                        </span>
                    )}
                </h3>
                <h4 className="flex items-center mb-1 text-md text-gray-900 dark:text-white italic">
                    {experience.position}
                </h4>
                <time className="block mb-2 text-md font-normal leading-none text-gray-600 dark:text-gray-200">
                    {formattedStartDate} - {formattedEndDate}
                </time>
                <PortableText value={experience.body} components={components} />
            </div>
        </motion.li>
    );
};

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="text-sm sm:text-base transition-all font-overpass">
                • {children}
            </li>
        ),
    },
};

const listVariants = {
    hidden: { transition: { duration: 0 } },
    visible: {
        transition: {
            duration: 0,
            when: "beforeChildren",
            delayChildren: 0.5,
            staggerChildren: 1.5,
        },
    },
};

const listItemVariants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0 },
    },
    visible: {
        opacity: 1,
    },
};

const timelineVariants = {
    hidden: {
        height: 0,
        transition: { duration: 0 },
    },
    visible: {
        height: "100%",
        transition: { duration: 3 },
    },
};

export default ExperienceCard;
