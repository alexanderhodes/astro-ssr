import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    // kind: "local",
    kind: "github",
    repo: {
      owner: "alexanderhodes",
      name: "astro-ssr",
    },
  },
  ui: {
    brand: { name: "Coacheria" },
    navigation: ["---", "authors", "---", "posts"],
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "public/images/posts",
            publicPath: "/images/posts",
          },
        }),
        authors: fields.array(
          fields.relationship({
            collection: "authors",
            label: "Authors",
            description: "A list of authors for this post.",
          }),
          {
            label: "Authors",
            itemLabel: (props) => props?.value ?? "-",
          }
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "public/images/authors",
          publicPath: "/images/authors",
        }),
      },
    }),
  },
});
