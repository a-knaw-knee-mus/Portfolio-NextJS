import { PortableText } from "@portabletext/react";
import useRouter from "next/router";
import { server } from "../../config";

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
      <h1>Projects</h1>
      {posts &&
        posts.map((post) => {
          return (
            <div key={post._id}>
              <h1>{post.slug}</h1>
              <h1 onClick={() => router.push(`/projects/${post.slug}`)}>{post.title}</h1>
              <h2>
                <a href={post.demo}>{post.demo}</a>
              </h2>
              <h2>
                <a href={post.github}>{post.github}</a>
              </h2>
              <img
                className="h-70 aspect-auto"
                src={post.imageUrl}
                alt="project preview"
              />
              <div>
                <PortableText value={post.body} components={components} />
              </div>
            </div>
          );
        })}
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(`${server}/api/projects`).then((res) => res.json());

  if (!res) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: res.posts,
    },
    revalidate: 10,
  };
}
