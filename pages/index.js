import React, { useState, useEffect } from "react";
import BlockContent from '@sanity/block-content-to-react'
import Image from "next/image";

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

export async function getServerSideProps(context) {
  console.log("hello")
  const query =
    encodeURIComponent(`*[_type == "author" && slug.current == "muhammad-mehdi-ali"]{
    fullName,
    firstName,
    bio,
    "imageUrl": image.asset->url, 
    bio,
    "resumeUrl": resume.asset->url,    
  }`);
  const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  }
  
  return {
    props: {
      ...post,
    },
  };
}
