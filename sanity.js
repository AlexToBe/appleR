import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.SANITY_STUDIO_SANITY_DATASET || "production",
  token:process.env.SANITY_API_TOKEN,
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);