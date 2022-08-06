import Image from "next/image";
import getHomeContent from "../util/getHomeContent";
import { Icon } from "@iconify/react";
import getSanityImage from "../util/getSanityImage";
import { PortableText } from "@portabletext/react";

export default function Home({
  fullName,
  resumeUrl,
  bio,
  image,
}) {
  return (
    <main className="text-center font-overpass">
      <h1>Homepage</h1>
      <h1>{fullName}</h1>
      <Image
        className="w-40"
        src={getSanityImage(image).width(100).height(150).url()}
        alt="project preview"
        height={150}
        width={100}
      />
      <div>
        <PortableText value={bio}/>
      </div>
      <div className="w-11 m-auto">
        <a className="group text-xs sm:text-sm text-center" target="_blank" href={resumeUrl} rel="noopener noreferrer">
          <Icon className="ml-[4px]" icon="carbon:document-pdf" width="40" data-tip="Resume"/>
          <p className="sm:opacity-0 sm:group-hover:opacity-100 transition-all">Resume</p>
        </a>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const res = await getHomeContent();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...res,
    },
    revalidate: 10,
  };
}
