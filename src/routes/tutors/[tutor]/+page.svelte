<script lang="ts">
    import type { PageData } from './$types';

    import {AssetRefToImageURL} from '$sanity/helpers';

    import TutorPageHero from '$sanity/blocks/TutorPageHero.svelte';
    import TutorPageSpecialOffers from '$sanity/blocks/TutorPageSpecialOffers.svelte';
    import TutorPageSoftware from "$sanity/blocks/TutorPageSoftware.svelte"
    import TutorPageServices from '$sanity/blocks/TutorPageServices.svelte';
    import TutorPageTestimonials from '$sanity/blocks/TutorPageTestimonials.svelte';
    import TutorPageBio from '$sanity/blocks/TutorPageBio.svelte';
    import EnhancedRichBlock from '$sanity/blocks/EnhancedRichBlock.svelte';

    import GeneralServices from '$lib/components/blocks/frontpage/GeneralServices.svelte';
    import StaticCardGridBlock from '$sanity/blocks/StaticCardGridBlock.svelte';
	import services from '$lib/services';
	import { json } from '@sveltejs/kit';

    export let data: PageData;
    // @ts-ignore
    const rd = data.page[0]
    
    const tutorData = {
        shortName: rd.shortName,
        longName: rd.longName,
        blurb: rd.blurb,
        headshot: rd.headshot.asset._ref,
        rate: rd.rate
    };
    // @ts-ignore
    const page = rd.defaultPage
</script>

<svelte:head>
    <title>{tutorData.longName}</title>
</svelte:head>

<main>
    <TutorPageHero blockData={page.richBlock_TutorHero} {tutorData} />
    <div class="bg-nile-blue-900 text-white py-6 ">
        <h2 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-fc-[2rem_8vw_3.75rem]  font-black">
            Tutoring and Services Offered:
        </h2>
        <div class="grid sm:grid-cols-2 max-w-7xl mx-auto p-4">
            <div>
                <h3 class="font-bold text-3xl mb-2">
                    Tutoring for:
                </h3>
                <ul class="list-disc list-outside ml-6 text-xl">
                    {#each page.software as software}
                        <li>{software.heading}</li>
                    {/each}
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-3xl mb-2">
                    Services Provided:
                </h3>
                <ul class="list-disc list-outside ml-6 text-xl">
                    {#each page.services as service}
                        <li>{service.heading}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
    <div class="overflow-x-hidden py-4  mb-6 ">
        <h3 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black">
            Details
        </h3>
        <div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
            <div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
                <div class="card mx-auto w-full max-w-xs flex-shrink-0 bg-nile-blue-900 p-4">
                    <svg aria-hidden="true" class="w-14 h-14 p-2 mx-auto fill-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"></path>
                    </svg>
                    <h4 class="mb-2 text-center text-2xl font-black">Availability</h4>
                    <div class="text-center">
                        {page.details.availability}
                    </div>
                </div>
            </div>
            <div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
                <div class="card mx-auto w-full max-w-xs flex-shrink-0 bg-nile-blue-900 p-4">
                    <svg aria-hidden="true" class="w-14 h-14 p-2 mx-auto fill-white" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                    <h4 class="mb-2 text-center text-2xl font-black">Location</h4>
                    <div class="text-center">
                        {page.details.location}
                    </div>
                </div>
            </div>
            
            <div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
                <div class="card mx-auto w-full max-w-xs flex-shrink-0 bg-nile-blue-900 p-4">
                    <svg aria-hidden="true" class="w-14 h-14 p-2 mx-auto fill-white" viewBox="0 0 288 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z"></path>
                    </svg>
                    <h4 class="mb-2 text-center text-2xl font-black">Rate</h4>
                    <div class="text-center">
                        <p>${tutorData.rate} / Hour</p>
                        <p>${(tutorData.rate / 60).toFixed(2)} / Minute</p>
                        {page.details.minSession}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TutorPageSpecialOffers specialOffers={page.specialOffers} />
    <TutorPageSoftware software={page.software}/>
    <GeneralServices/>
    <TutorPageServices services={page.services}/>
    <TutorPageBio bio={page.bio}/>
    
    {#await data.streamed?.testimonials }
        <span>...LOADING</span>
    {:then testimonialData }
        {@const testimonials = testimonialData ?? []} 
        <TutorPageTestimonials {testimonials} />
    {/await}
    <div class="bg-alabaster-50">
        <h2 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-fc-[2rem_8vw_3rem] font-black text-black">
            Don't struggle alone, get help from a real person.
        </h2>
        <div class="grid sm:grid-cols-2 p-4 m-auto max-w-screen-xl">
            <picture class="mx-auto">
                <img
                    src="{AssetRefToImageURL(tutorData.headshot)}"
                    alt="Featured Tutor"
                    class="aspect-square h-60 w-60 flex-shrink-0 rounded-full p-1 object-cover object-center max-w-none"
                    width="240"
                    height="240"
                />
            </picture>
            <div class="grid grid-rows-[2fr_auto]">
                <div>
                    <div class="font-bold text-2xl">
                        Start A Conversation With
                    </div>
                    <div class="my-4 font-extrabold text-6xl">
                        {tutorData.longName}
                    </div>
                </div>

                <button class="
                    w-full
                    items-center
                    bg-emerald-400
                    p-3
                    text-center
                    text-3xl
                    font-bold
                    text-white
                    hover:bg-emerald-300"
                >
                    PLSVHSDKF
                </button>
            </div>
        </div>
    </div>

    <!-- <pre>{JSON.stringify(rd, undefined, 2)}</pre> -->
</main>