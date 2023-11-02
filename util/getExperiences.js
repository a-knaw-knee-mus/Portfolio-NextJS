export default async function getExperiences() {
    const query =
        encodeURIComponent(`*[_type == "experience"]{
        _id,
        indexNumber,
        company,
        position,
        companyLogo,
        "companyLogoUrl": companyLogo.asset->url,
        startDate,
        endDate,
        isCurrentPosition,
        body
    }`);

    const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url, { next: { revalidate: 10 } }).then((res) => res.json());
    return result.result
}