import imageUrlBuilder from "@sanity/image-url";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { client } from "../../sanity/lib/client";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const urlFor = (source: string) => {
  const builder = imageUrlBuilder(client);
  return builder.image(source);
};
