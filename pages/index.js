import Image from "next/image";
import getHomeContent from "../util/getHomeContent";
import getSanityImage from "../util/getSanityImage";
import { PortableText } from "@portabletext/react";
import HoverIcon from "../components/HoverIcon";

const components = {
  block: {
    normal: ({children}) => <p className="mt-6 text-sm sm:text-base md:text-lg font-medium transition-all">{children}</p>
  }
}

export default function Home({
  resumeUrl,
  bio,
  image,
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
        <PortableText components={components} value={bio}/>
      </div>
      <div className="w-11 m-auto mt-5">
        <HoverIcon name="Resume" href={resumeUrl} iconName="bi:file-earmark-pdf" />
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
