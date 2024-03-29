export default async function getTechnologies() {
    const query =
      encodeURIComponent(`*[_type == "technology"]{
          iconName,
          iconifyName,
          indexNumber,
      }`);
    const url = `https://219pd81c.api.sanity.io/v1/data/query/production?query=${query}`;
    const result = await fetch(url, { next: { revalidate: 10 } }).then((res) => res.json());
    return result.result;
}