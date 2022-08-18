export default async function getLanguages() {
    const query =
      encodeURIComponent(`*[_type == "language"]{
          iconName,
          iconifyName,
          indexNumber,
      }`);
    const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url).then((res) => res.json());
    return result.result;
}