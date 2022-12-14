import Image from "next/image";
import getHomeContent from "../util/getHomeContent";
import getSanityImage from "../util/getSanityImage";
import { PortableText } from "@portabletext/react";
import getLanguages from "../util/getLanguages";
import getTechnologies from "../util/getTechnologies";
import IconifyList from "../components/IconifyList";
import { Icon } from "@iconify/react";

const components = {
  block: {
    normal: ({ children }) => (
      <p className="mt-6 text-sm sm:text-base md:text-lg font-medium transition-all">
        {children}
      </p>
    ),
  },
};

export default function Home({
  resumeUrl,
  bio,
  image,
  languages,
  technologies,
}) {
  return (
    <main className="font-overpass mt-5 max-w-2xl mx-auto px-5">
      <div className="m-auto flex rounded-full border-double border-4 w-[120px]">
        <Image
          className="rounded-full"
          src={getSanityImage(image).width(120).height(120).quality(100).url()}
          alt="project preview"
          height={120}
          width={120}
        />
      </div>
      <div>
        <PortableText components={components} value={bio} />
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
          href={resumeUrl}
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-center sm:hover:scale-125 transition-all"
        >
          <Icon icon="bi:file-earmark-pdf" width={25} />
        </a>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const homeContent = await getHomeContent();
  const languages = await getLanguages();
  const technologies = await getTechnologies();

  if (!homeContent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...homeContent,
      languages,
      technologies,
    },
    revalidate: 10,
  };
}
