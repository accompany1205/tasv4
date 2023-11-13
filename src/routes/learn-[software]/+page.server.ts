import type { PageServerLoad  } from './$types';
import type ServicePage from '$lib/schemas/ServicePage';
import {createClient} from "@sanity/client";
import groq from "groq";

const client = createClient({
  projectId: "20gocjb2",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

export const load: PageServerLoad = async ({ params }) => {
    /* groq */
    const query = groq`*[_type == "service" && slug.current == "sketchup"]{
      ...defaultPage -> {
        pageTitle,
        heroBlock,
        builderBlock,
        ...,
        "tutorBlock" : tutorBlock {
          ...,
          featuredTutors[] -> {
            _type,
            blurb,
            rate,
            shortName,
            longName,
            headshot,
            defaultCard -> {
              coverImage,
              featuredTags,
              featuredServices,
              overrides
            }
        }
      }
      }
    }`
    const data = <ServicePage[]> await client.fetch(query);

    console.log("*************************************")
    // console.log(data)
    // console.log(data[0].top_block.blurb)
    // console.log(JSON.stringify(data, undefined, 2))
    
	if (data) return {
        page: data
	};

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
};