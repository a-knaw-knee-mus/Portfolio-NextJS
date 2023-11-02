"use client";

import { motion } from "framer-motion";
import Blob from "./Blob";
import ScrollIcon from "./ScrollIcon";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getSanityImage from "../util/getSanityImage";

const components = {
    listItem: {
        bullet: ({ children }) => (
            <li className="text-sm sm:text-base transition-all font-overpass">
                • {children}
            </li>
        ),
    },
};

const JobCard = ({ experience }) => {
    return (
        <motion.li
            variants={listItemVariants}
            className="mb-7 ml-6 flex items-start pr-4"
        >
            <span className="w-16 h-16 bg-blue-300 rounded-full ring-8 ring-lightgrey dark:ring-darkblue dark:bg-blue-900">
                <Image className="w-10 h-10 mx-3 my-3 rounded-lg" src={getSanityImage(experience.companyLogo).width(40).height(40).url()} alt='company logo' height={40} width={40} />
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
                <time className="block mb-2 text-md font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.startDate} - {experience.endDate}
                </time>
                <PortableText value={experience.body} components={components} />
            </div>
        </motion.li>
    );
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

const ExperienceCard = ({ experiences }) => {
    return (
        <div className="relative">
            <div
                id="experience"
                className="block w-full h-20 overflow-hidden"
            />
            <div className="h-screen justify-center align-middle items-center flex relative overflow-x-hidden">
                <Blob />
                <motion.div className="max-w-7xl mx-auto relative z-0 my-auto">
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
                        {experiences.map((experience) => {
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

export default ExperienceCard;
