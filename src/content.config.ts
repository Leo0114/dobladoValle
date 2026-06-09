import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const productos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      itemCount: z.string(),
      icon: z.string().optional(),
      coverImage: image(),
    }),
});

export const collections = { productos };
