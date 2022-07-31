export default async function handler(req, res) {
    if (req.method !== "GET")
        return res.status(400).json({ fail: "Only accepts GET requests" });

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
    res.status(200).json({homecontent: result.result[0]})

}
