export default async function getHomeContent() {
  const query =
    encodeURIComponent(`*[_type == "author" && slug.current == "muhammad-mehdi-ali"]{
    fullName,
    firstName,
    bio,
    "imageUrl": image.asset->url, 
    bio,
    "resumeUrl": resume.asset->url,    
    }`);
  const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  return result.result[0];
}
