export default async function handler(req, res) {
    if (req.method !== "GET")
        return res.status(400).json({ fail: "Only accepts GET requests" });

    const slug = req.headers.slug;

    const query =
        encodeURIComponent(`*[_type == "post" ${slug ? ` && slug.current == "${slug}"` : ''}]{
        _id,
        title,
        "slug": slug.current,
        demo,
        github,
        "imageUrl": mainImage.asset->url,
        body,
    }`);

    const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then((res) => res.json());
    res.status(200).json({ posts: result.result });
}
