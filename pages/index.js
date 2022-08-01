import BlockContent from '@sanity/block-content-to-react'
import Image from "next/image";
import { server } from "../config";
import getHomeContent from '../util/getHomeContent';

export default function Home({ fullName, firstName, imageUrl, resumeUrl, bio }) {
  return (
    <main className="m-auto text-center">
      <h1>Homepage</h1>
      <h1>{fullName}</h1>
      <Image className="w-40" src={imageUrl} alt="project preview" height={100} width={100}/>
      <div>
        <BlockContent blocks={bio}/>
      </div>
      <a href={resumeUrl}>Resume</a>
    </main>
  );
}

export async function getStaticProps() {
  const res = await getHomeContent()

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
