import type { PageLoad } from './$types';

import {createClient} from "@sanity/client";

const client = createClient({
  projectId: "kcijxcsz",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
});


export const load: PageLoad = async ({ params }) => {
    const data = await client.fetch(`*[_type == "landing_page"]`);
    console.log("*************************************")
    console.log(JSON.stringify(data, undefined, 2))
    
	if (data) return {
        page: data
	};

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
};