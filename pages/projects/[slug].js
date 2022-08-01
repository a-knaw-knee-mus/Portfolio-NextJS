import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { server } from "../../config";

const components = {
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>• {children}</li>
    ),
  },
};

export default function Project({ slug, title, demo, github, imageUrl, body }) {
  return (
    <>
      <h1>{slug}</h1>
      <h1>{title}</h1>
      <h2>
        <a href={demo}>{demo}</a>
      </h2>
      <h2>
        <a href={github}>{github}</a>
      </h2>
      <Image className="h-70 aspect-auto" src={imageUrl} alt="project preview" height={338} width={600} />
      <div>
        <PortableText value={body} components={components} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(`${server}/api/projects`, {
    headers: {slug: slug}
  }).then(res => res.json())

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...res.posts[0],
    },
    revalidate: 10,
  };
}
