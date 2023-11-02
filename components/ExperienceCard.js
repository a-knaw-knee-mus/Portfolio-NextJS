"use client";

import { motion } from "framer-motion";
import Blob from "./Blob";

const JobCard = ({ company, position, date, description }) => {
    return (
        <motion.li
            variants={listItemVariants}
            className="mb-7 ml-6 flex items-start"
        >
            <span className="w-16 h-16 bg-blue-300 rounded-full ring-8 ring-lightgrey dark:ring-darkblue dark:bg-blue-900">
                <img
                    className="w-10 h-10 mx-3 my-3"
                    src=""
                    alt=""
                />
            </span>
            <div className="flex-1 ml-5">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    {`${company} `}
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                        Current
                    </span>
                </h3>
                <h4 className="flex items-center mb-1 text-md text-gray-900 dark:text-white italic">
                    {position}
                </h4>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {date}
                </time>
                {description.map((point, index) => {
                    return (
                        <p
                            key={index}
                            className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400"
                        >
                            {point}
                        </p>
                    );
                })}
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

const ExperienceCard = () => {
    return (
        <>
        <div id="experience" className="block w-full h-20 overflow-hidden" />
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
                    <JobCard
                        company={"AMD"}
                        position={"SOC Design for Test Engineer Intern"}
                        description={[
                            "- Get access to over 20+ pages including a dashboard layout, charts kanban board, calendar, and pre-order E-commerce & Marketing pages.",
                            "- Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
                        ]}
                    />
                    <JobCard
                        company={"TD Bank"}
                        position={"SWE Intern"}
                        description={[
                            "- Get access to over 20+ pages including a dashboard layout, charts kanban board, calendar, and pre-order E-commerce & Marketing pages.",
                            "- Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
                        ]}
                    />
                </motion.ol>
            </motion.div>
            </div>
        </>
    );
};

export default ExperienceCard;
