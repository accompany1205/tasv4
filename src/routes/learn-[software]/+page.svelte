<script lang="ts">
    import type { PageData } from './$types';
    import {PortableText} from '@portabletext/svelte'

	import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
	import GeneralServices from '$lib/components/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/components/blocks/frontpage/GeneralServicesDetail.svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import H4 from '$lib/components/elements/H4.svelte';

    import RichBlock from '$sanity/blocks/RichBlock.svelte';
    import Image from '$sanity/elements/Image.svelte';
    import Faq from '$sanity/blocks/FAQ.svelte';
    import SwipeBlock from '$sanity/blocks/SwipeBlock.svelte';
    import TutorCard from '$sanity/cards/TutorCard.svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';
    
    export let data: PageData;
    // @ts-ignore
    const page_data = data.page[0];
</script>

<svelte:head>
    <title>{page_data.landing_metadata.page_title}</title>
</svelte:head>

<main >
    <section class="overflow-x-hidden bg-[#e8e8e8] dark:bg-gray-900">
        <div class="bg-nile-blue-900 py-3 sm:py-6">
            <h1 class="
                    m-auto
                    max-w-screen-xl
                    px-4
                    text-left
                    font-bold
                    leading-none
                    tracking-tight
                    text-white
                    text-fc-[1.3rem_3.5cqw_2.75rem]
            "
            >
                {page_data.top_block.page_heading}
            </h1>
        </div>
            <div
                class="
                    mx-auto
                    grid
                    max-w-screen-xl
                    grid-rows-[auto_1fr]
                    items-top
                    gap-x-4
        
                    px-3
                    py-2
                    sm:grid-cols-[minmax(100px,_1fr)_1fr]
                    lg:gap-x-8
                    m-6
                    "
            >
                <div class="left-col mt-3">
                    <ImageCarousel images="{page_data.top_block.featured_images.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref) + ".webp", }))}" showLogo={true}/>
                </div>
        
                <div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg micro:max-sm:text-lg">
                    <div class="w-full max-w-md pb-6 @container">
                        <div class="flex">
                            <h2 class="mb-4 max-w-lg font-bold text-fc-[1.5rem_5cqw_8rem]">
                                Don't Struggle Alone,&nbsp;Get Sketchup Help from a Pro.
                            </h2>
                            <div class="hidden lg:block">
                                {#each page_data.top_block.featured_tutors as tutor}
                                    <img
                                        src="{AssetRefToImageURL(tutor.asset._ref)}.webp"
                                        alt="Featured Tutor"
                                        class="aspect-square h-20 w-20 flex-shrink-0 rounded-full p-1 object-cover object-center max-w-none"
                                        width="80"
                                        height="80"
                                    />
                                {/each}
                            </div>
                        </div>
                        <div class="text-left font-normal text-gray-950 micro:max-unfolded:text-lg unfolded:text-xl">
                            <PortableText
                            value={page_data.top_block.blurb}
                            onMissingComponent={false}
                            components={{}}
                        />
                        </div>
                    </div>
        
                    <GoogleRatings />
        
                    <button class="
                            max-w-sm
                            items-center
                            bg-emerald-400
                            p-3
                            text-center
                            text-3xl
                            font-bold
                            text-white
                            hover:bg-emerald-300"
                    >
                        Get Started Today
                    </button>
                </div>
            </div>
    </section>
    <SwipeBlock>
        {#each page_data.tutorsBlock.featured_tutors as tutor}
            <swiper-slide class="">
                <div class="m-auto h-[100cqh] w-96 max-w-2xl flex-shrink-0 p-2">
                    <TutorCard {tutor}/>
                </div>
            </swiper-slide>
        {/each}
    </SwipeBlock>
    <GeneralServices />
    <GeneralServicesDetail />
    <div class="bg-nile-blue-900 p-4 text-white">
        {#each page_data.services_block.featured_services as sub}
            <RichBlock data={sub}/>
        {/each}
        <div class="card mx-auto grid max-w-7xl flex-shrink-0 gap-4 p-4 sm:grid-cols-2">
            <div class="order-1 sm:-order-1">
                <H4>We Can Help!</H4>
                <PortableText
                    value={page_data.services_block.other_services}
                    onMissingComponent={false}
                    components={{}}
                />
            </div>
            <div>
                <H4>About Sketchup</H4>
                <PortableText
                    value={page_data.services_block.extra_info}
                    onMissingComponent={false}
                    components={{}}
                />
            </div>
        </div>
    </div>
    <Faq data={page_data.faq.faq}/>
</main>

<!-- <pre>{JSON.stringify(data, undefined, 2)}</pre> -->