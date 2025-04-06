import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "g2pb422n",
  dataset: "production",
  apiVersion: "2023-07-24",
  useCdn: false,
});