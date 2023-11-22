import type { PageServerLoad  } from './$types';
import type TutorData from '$lib/schemas/TutorData';
import type TestimonialData from '$lib/schemas/TestimonialData';
import { client } from "$lib/server/sanity"
import groq from "groq";

export const load: PageServerLoad = async ({ params }) => {
    console.log(params)
    const query = groq`*[_type == "tutor" && slug.current == "${params.tutor}"] {
        _id,
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
    const testimonialQuery = groq`*[_type == "testimonial" && references("${data[0]?._id}")]`
    // Notice that we don't await this fetch; we're deliberately returning a promise.
    // See: https://svelte.dev/blog/streaming-snapshots-sveltekit
    const testimonialData: Promise<TestimonialData[]> = client.fetch(testimonialQuery)

	return {
        page: data,
        streamed: {
            testimonials: testimonialData
        }
        
	};

    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}