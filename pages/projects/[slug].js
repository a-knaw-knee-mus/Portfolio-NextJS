import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getProjects from "../../util/getProjects";
import { Icon } from "@iconify/react";

const components = {
  listItem: {
    bullet: ({ children }) => (
      <li className="text-xl">• {children}</li>
    ),
  },
};

export default function Project({
  title,
  demo,
  github,
  imageUrl,
  body,
  summary,
}) {
  return (
    <>
      <div className="m-auto text-center p-5">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <div
          className="transition-all flex bg-slate-50 bg-opacity-50 
                    rounded-bl-md md:group-hover:bg-opacity-100 justify-center"
        >
          <a
            target="_blank"
            href={demo}
            rel="noopener noreferrer"
            className="p-3"
          >
            <Icon
              className="transition-all md:hover:scale-[1.15]"
              icon="eva:external-link-fill"
              width="40"
            />
          </a>
          <a
            target="_blank"
            href={github}
            rel="noopener noreferrer"
            className="p-3"
          >
            <Icon
              className="transition-all md:hover:scale-[1.15]"
              icon="akar-icons:github-fill"
              width="40"
            />
          </a>
        </div>
        <Image
          className="rounded-md"
          src={imageUrl}
          alt="project preview"
          height={513}
          width={912}
        />
        <div className="md:w-4/5 lg:w-3/5 m-auto text-left">
          <p className="font-semibold text-2xl my-2">{summary}</p>
          <PortableText value={body} components={components} />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;

  if (!slug) {
    return {
      notFound: true,
    };
  }

  const res = await getProjects(slug);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ...res[0],
    },
    revalidate: 10,
  };
}
