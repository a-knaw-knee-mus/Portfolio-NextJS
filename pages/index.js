import Image from "next/image";
import getHomeContent from "../util/getHomeContent";
import { Icon } from "@iconify/react";
import getSanityImage from "../util/getSanityImage";
import { PortableText } from "@portabletext/react";

const components = {
  block: {
    normal: ({children}) => <p className="mt-6 text-sm sm:text-base md:text-lg font-medium">{children}</p>
  }
}

export default function Home({
  fullName,
  resumeUrl,
  bio,
  image,
}) {
  return (
    <main className="text-center font-overpass mt-5 max-w-2xl mx-auto px-5">
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
        <PortableText components={components} value={bio}/>
      </div>
      <div className="w-11 m-auto mt-5">
        <a className="group text-xs sm:text-sm text-center" target="_blank" href={resumeUrl} rel="noopener noreferrer">
          <Icon className="ml-[4px]" icon="carbon:document-pdf" width="40"/>
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
