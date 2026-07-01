import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const productos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      itemCount: z.string(),
      icon: z.string().optional(),
      coverImage: image(),
      category: z.array(z.string()),
    }),
});

export const collections = { productos };
