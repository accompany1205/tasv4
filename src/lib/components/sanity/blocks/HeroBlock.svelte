<script lang="ts">
    import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

    import {PortableText} from '@portabletext/svelte'

    import type HeroBlock from "$lib/schemas/HeroBlock";
    export let heroBlock: HeroBlock;
</script>

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
            {heroBlock.richBlock.blockHeading}
        </h1>
    </div>
        <div class="
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
                <ImageCarousel images="{heroBlock.richBlock.imageGallery.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref) }))}" showLogo={true}/>
            </div>
            <div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg micro:max-sm:text-lg">
                <div class="w-full max-w-md pb-6 @container">
                    <div class="flex">
                        <h2 class="mb-4 max-w-lg font-bold text-fc-[1.5rem_5cqw_8rem]">
                            {heroBlock.richBlock.subHeading}
                        </h2>
                        <div class="hidden lg:flex">
                            {#each heroBlock.featuredTutors as tutor}
                                <div class="-mx-4 flex-shrink-0">
                                    <img
                                        src="{AssetRefToImageURL(tutor.asset._ref)}"
                                        alt="Featured Tutor"
                                        class="aspect-square h-20 w-20 flex-shrink-0 rounded-full p-1 object-cover object-center max-w-none"
                                        width="80"
                                        height="80"
                                    />
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="text-left font-normal text-gray-950 micro:max-unfolded:text-lg unfolded:text-xl">
                        <PortableText
                            value={heroBlock.richBlock.blockBody}
                            onMissingComponent={false}
                            components={{}}
                        />
                    </div>
                </div>
    
                <GoogleRatings />
    
                <a href="{heroBlock.button.buttonLink}">
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
                        {heroBlock.button.buttonText}
                    </button>
                </a>
            </div>
        </div>
</section>