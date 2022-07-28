import { PortableText } from "@portabletext/react";

const components = {
  // list: {
  //   bullet: ({children}) => <ul style={{ listStyleType: "upper-roman" }}>{children}</ul>,
  // },
  listItem: {
    bullet: ({ children }) => (
      <li>• {children}</li>
    ),
  },
};

export default function Projects({ posts }) {
  return (
    <>
      <h1>Projects</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.slug}</h1>
            <h1>{post.title}</h1>
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

export async function getServerSideProps(context) {
  const query = encodeURIComponent(`*[_type == "post"]{
        _id,
        title,
        demo,
        github,
        "imageUrl": mainImage.asset->url,
        body,
    }`);
  const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const posts = result.result;

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts,
    },
  };
}
