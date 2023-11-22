import type { PageServerLoad  } from './$types';
import type TutorData from '$lib/schemas/TutorData';
import { client } from "$lib/server/sanity"
import groq from "groq";

export const load: PageServerLoad = async ({ params }) => {
    console.log(params)
    const query = groq`*[_type == "tutor" && slug.current == "${params.tutor}"] {
        headshot,
        shortname,
        longName,
        blurb,
        slug,
        rate,
        defaultPage -> {
            slug,
            pageTitle,
            richBlock_TutorHero,
            software,
            services,
            specialOffers,
            details,
            galleryBlock,
            bio
        }
    }`

    const data = <TutorData[]> await client.fetch(query);

	if (data) return {
        page: data
	};

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}