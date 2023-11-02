import getHomeContent from "../util/getHomeContent";
import getLanguages from "../util/getLanguages";
import getTechnologies from "../util/getTechnologies";
import getProjects from "../util/getProjects";
import getExperiences from "../util/getExperiences";
import ClientHomePage from "../components/ClientHomePage";
import ExperienceCard from "../components/ExperienceCard";
import ClientProjectsPage from "../components/ClientProjectsPage";
import Navbar from "../components/Navbar";

export const metadata = {
    title: "Muhammad Mehdi Ali",
    description:
        "Muhammad Mehdi Ali's portfolio website created using NextJS, TailwindCSS and Sanity.io",
    keywords:
        "Muhammad Mehdi Ali, Portfolio, NextJS, Tailwind, TailwindCSS, Sanityio, Sanity, React, ReactJS",
    author: "Muhammad Mehdi Ali",
    themeColor: "#228be6",
    link: [
        { rel: "icon", href: "/favicon.ico" },
        {
            name: "google-site-verification",
            content: "q_fdLOOl9EydiXNKJePmXERYBWFEbH6H5K4IoXxE9KA",
        },
    ],
};

export default async function Page() {
    const homeContent = await getHomeContent();
    const languages = await getLanguages();
    const technologies = await getTechnologies();
    const projects = await getProjects();
    const experiences = await getExperiences()
    console.log(experiences)

    return (
        <>
            <Navbar />
            <ClientHomePage
                homeContent={homeContent}
                languages={languages}
                technologies={technologies}
            />
            <ExperienceCard experiences={experiences} />
            <ClientProjectsPage projects={projects} />
        </>
    );
}
