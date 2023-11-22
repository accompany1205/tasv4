import {createClient} from "@sanity/client";

export const client = createClient({
  projectId: "20gocjb2",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});