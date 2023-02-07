import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z
    .object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    })
    .strict(),
});

export const collections = {
  blog: blogCollection,
};
