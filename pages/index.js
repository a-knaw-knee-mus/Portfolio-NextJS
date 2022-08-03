import BlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import getHomeContent from "../util/getHomeContent";
import imageUrlBuilder from "@sanity/image-url";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import ReactTooltip from "react-tooltip";

export default function Home({
  fullName,
  firstName,
  imageUrl,
  resumeUrl,
  bio,
  image,
}) {
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const builder = imageUrlBuilder({
    projectId: "219pd81c",
    dataset: "production",
  });
  const urlFor = (source) => builder.image(source);

  return (
    <main className="text-center">
      <h1>Homepage</h1>
      <h1>{fullName}</h1>
      {/* <Image className="w-40" src={imageUrl} alt="project preview" height={100} width={100}/> */}
      <Image
        className="w-40"
        src={urlFor(image).width(100).height(150).url()}
        alt="project preview"
        height={150}
        width={100}
      />
      <div>
        <BlockContent blocks={bio} />
      </div>
      <div className="w-11 m-auto">
        <a target="_blank" href={resumeUrl} rel="noopener noreferrer">
          <Icon className="m-auto mb-4" icon="carbon:document-pdf" width="40" data-tip="Resume"/>
        </a>
        {isMounted && (
          <ReactTooltip
            textColor="black"
            backgroundColor="transparent"
            place="bottom"
            effect="solid"
            offset={{ top: 15 }}
          />
        )}
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
