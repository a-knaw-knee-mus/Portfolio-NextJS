import Image from "next/image";
import { PortableText } from "@portabletext/react";

const components = {
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>• {children}</li>
    ),
  },
};

export default function ProjectCard({ title, demo, github, imageUrl, body }) {
  return (
    <>
      <h1>{title}</h1>
      <h2>
        <a href={demo}>{demo}</a>
      </h2>
      <h2>
        <a href={github}>{github}</a>
      </h2>
      <Image
        className="h-70 aspect-auto"
        src={imageUrl}
        alt="project preview"
        height={338}
        width={600}
      />
      <div>
        <PortableText value={body} components={components} />
      </div>
    </>
  );
}
