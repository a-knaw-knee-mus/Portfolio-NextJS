import { PortableText } from "@portabletext/react";
import useRouter from "next/router";
import getProjects from "../../util/getProjects";
import Image from "next/image";
import { Accordion } from "@mantine/core";
import { Icon } from "@iconify/react";

const components = {
  // list: {
  //   bullet: ({children}) => <ul style={{ listStyleType: "upper-roman" }}>{children}</ul>,
  // },
  listItem: {
    bullet: ({ children }) => <li>• {children}</li>,
  },
};

export default function Projects({ posts }) {
  const router = useRouter;

  return (
    <>
      <div className="sm:grid lg:grid-cols-2 max-w-7xl mx-auto gap-5 items-start px-5">
        {posts
          .sort((a, b) => {
            if (a.indexNumber > b.indexNumber) return 1;
            if (a.indexNumber < b.indexNumber) return -1;
            return 0;
          })
          .map((post) => {
            return (
              <div className="mx-auto mt-3 m-3 drop-shadow-xl" key={post._id}>
                <div className="cursor-pointer group">
                  <h1
                    onClick={() => router.push(`/projects/${post.slug}`)}
                    className="text-lg font-bold absolute transition-all z-40 p-3 bg-slate-50 bg-opacity-50 
                                rounded-br-md md:text-2xl md:group-hover:text-3xl md:group-hover:bg-opacity-100"
                  >
                    {post.title}
                  </h1>
                  <Image
                    className="rounded-md"
                    onClick={() => router.push(`/projects/${post.slug}`)}
                    src={post.imageUrl}
                    alt="project preview"
                    height={324}
                    width={576}
                  />
                  <div
                    className="transition-all flex absolute top-0 right-0 bg-slate-50 bg-opacity-50 
                                    rounded-bl-md md:group-hover:bg-opacity-100"
                  >
                    <a
                      target="_blank"
                      href={post.demo}
                      rel="noopener noreferrer"
                      className="p-3 z-40"
                    >
                      <Icon
                        className="transition-all md:hover:scale-[1.15]"
                        icon="eva:external-link-fill"
                        width="30"
                      />
                    </a>
                    <a
                      target="_blank"
                      href={post.github}
                      rel="noopener noreferrer"
                      className="p-3 z-40"
                    >
                      <Icon
                        className="transition-all md:hover:scale-[1.15]"
                        icon="akar-icons:github-fill"
                        width="30"
                      />
                    </a>
                  </div>
                </div>
                <div className="max-w-xl">
                  <Accordion variant="filled">
                    <Accordion.Item value={post.summary}>
                      <Accordion.Control>{post.summary}</Accordion.Control>
                      <Accordion.Panel>
                        <PortableText
                          value={post.body}
                          components={components}
                        />
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await getProjects();

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: res,
    },
    revalidate: 10,
  };
}
