import getHomeContent from "../util/getHomeContent";
import getLanguages from "../util/getLanguages";
import getTechnologies from "../util/getTechnologies";
import BioPage from "../components/BioPage";

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

    return (
        <BioPage homeContent={homeContent} languages={languages} technologies={technologies} />
    );
}
