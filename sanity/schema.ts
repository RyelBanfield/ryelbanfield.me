import { type SchemaTypeDefinition } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "Projects",
      type: "document",
      fields: [
        {
          name: "projectName",
          type: "string",
        },
      ],
    },
  ],
};
