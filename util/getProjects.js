export default async function getProjects(slug) {
    const query =
        encodeURIComponent(`*[_type == "post" ${slug ? ` && slug.current == "${slug}"` : ''}]{
        _id,
        title,
        "slug": slug.current,
        demo,
        github,
        "imageUrl": mainImage.asset->url,
        body,
        indexNumber,
        summary,
    }`);

    const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then((res) => res.json());
    return result.result
}