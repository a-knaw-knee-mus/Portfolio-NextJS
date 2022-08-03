import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: "219pd81c",
  dataset: "production",
});

export default function getSanityImage(source) {
    return builder.image(source)
}
