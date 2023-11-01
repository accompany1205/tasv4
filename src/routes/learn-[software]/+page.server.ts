import type { PageServerLoad  } from './$types';

import {createClient} from "@sanity/client";
import groq from "groq";

const client = createClient({
  projectId: "20gocjb2",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});

interface landing_page_data {
    landing_metadata: {
        slug: { current: string },
        page_title: string
    },
    top_block: {
        page_heading: string,
        sub_heading: string,
        blurb: [],
        featured_tutors: {
            _type: "image",
            _key: string,
            asset: {
                _ref: string,
                type: string
            }
        }[],
        featured_images: {
            _type: "image",
            _key: string,
            asset: {
                _ref: string,
                type: string
            }
        }[],
    },
    tutorsBlock: {
        slug: {current: string}
        block_heading: string,
        featured_tutors: {
            TutorCoreInfo: {
                featured_tags: string[],
                blurb: string,
                featured_services: string[],
                full_name: string,
                rate: number,
                headshot: {
                    _type: "image",
                    _key: string,
                    asset: {
                        _ref: string,
                        type: string
                    }
                },
                cover_image: {
                    _type: "image",
                    _key: string,
                    asset: {
                        _ref: string,
                        type: string
                    }
                },
            }
        }[]
    },
    services_block: {
        block_heading: string,
        sub_heading: string,
        block_desc: [],
        featured_services: [],
        other_services: [],
        extra_info: []
    },
    faq: {
        faq: []
    }
}

export const load: PageServerLoad = async ({ params }) => {
    /* groq */
    const query = groq`*[_type == "landing_page" && landing_metadata.slug.current == "${params.software}"]{..., "tutorsBlock": tutorsBlock {..., featured_tutors[] ->}}`
    const data = <landing_page_data[]> await client.fetch(query);

    // console.log("*************************************")
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