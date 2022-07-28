import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ProjectCard from "../../components/ProjectCard";

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
      {/* <ProjectCard title={title} demo={demo} github={github} imageUrl={imageUrl} body={body} /> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const query =
    encodeURIComponent(`*[_type == "post" && slug.current == "${slug}"]{
        title,
        demo,
        github,
        "imageUrl": mainImage.asset->url,
        body,
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
