import { PortableText } from "@portabletext/react";
import Image from "next/image";
import getProjects from "../../util/getProjects";
import { Icon } from "@iconify/react";
import getSanityImage from "../../util/getSanityImage";

const components = {
  listItem: {
    bullet: ({ children }) => <li className="md:text-lg transition-all">• {children}</li>,
  },
};

export default function Project({
  title,
  demo,
  github,
  imageUrl,
  body,
  summary,
  mainImage,
}) {
  return (
    <>
      <div className="m-auto text-center p-5">
        <h1 className="font-semibold text-3xl">{title}</h1>
        <div
          className="transition-all flex bg-opacity-50 
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
        <div className="flex justify-center drop-shadow-md">
          <Image
            className="rounded-t-md"
            src={getSanityImage(mainImage).url()}
            alt="project preview"
            height={513}
            width={912}
          />
        </div>
        <div className="max-w-[912px] m-auto text-left shadow-xl p-4 rounded-b-md">
          <p className="transition-all font-semibold text-lg md:text-2xl my-2">{summary}</p>
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
