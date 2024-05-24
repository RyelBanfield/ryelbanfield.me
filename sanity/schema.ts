import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "projects",
      title: "Projects",
      type: "document",
      fields: [
        {
          name: "projectName",
          title: "Project Name",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          validation: (rule) => rule.required(),
        },
        {
          name: "screenshot",
          title: "Screenshot",
          type: "image",
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "projectName",
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            isUnique: (value, context) =>
              context.defaultIsUnique(value, context),
          },
          validation: (rule) => rule.required(),
        },
      ],
    },
    {
      name: "blogPosts",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
          validation: (rule) => rule.required(),
        },
        {
          name: "coverImage",
          title: "Cover Image",
          type: "image",
          validation: (rule) => rule.required(),
        },
        {
          name: "published",
          title: "Published",
          type: "date",
          validation: (rule) => rule.required(),
        },
        {
          name: "slug",
          title: "Slug",
          type: "slug",
          options: {
            source: "projectName",
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            isUnique: (value, context) =>
              context.defaultIsUnique(value, context),
          },
          validation: (rule) => rule.required(),
        },
      ],
    },
  ],
};
