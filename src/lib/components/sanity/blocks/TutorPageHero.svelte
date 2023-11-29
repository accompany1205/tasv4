<script lang="ts">
    import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

    import {PortableText} from '@portabletext/svelte'

    import ImageGridBlock from './ImageGridBlock.svelte';

    import type EnhancedRichBlockData from '$lib/schemas/RichBlock';
    export let blockData: EnhancedRichBlockData;
    export let tutorData: {
        shortName: string,
        longName: string,
        blurb: string,
        headshot: string,
        rate: number
    }

    const images = blockData.gallery?.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref)})) ?? []

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
            {tutorData.blurb}
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
            lg:grid-cols-[minmax(300px,_2fr)_1fr]
            lg:gap-x-8
            m-6
            "
        >
            <div class="left-col mt-3 grid sm:grid-cols-2">

                <picture class="mx-auto">
                    <img
                        src="{AssetRefToImageURL(tutorData.headshot)}"
                        alt="Featured Tutor"
                        class="aspect-square h-60 w-60 flex-shrink-0 rounded-full p-1 object-cover object-center max-w-none"
                        width="240"
                        height="240"
                    />
                </picture>
                <div>
                    <div>
                        <div class="font-bold text-2xl">
                            Hi, My Name Is
                        </div>
                        <div class="mt-4 font-extrabold text-6xl">
                            {tutorData.longName}
                        </div>
                        <div class="font-bold my-4 text-3xl text-emerald-400">
                            ${tutorData.rate} / Hour
                        </div>
                    </div>
                    <div class="text-xl my-4">
                        <PortableText
                            value={blockData.body}
                            components={{}}
                        />
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
                        {blockData.button?.buttonText}
                    </button>
                </div>
            </div>
            <div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg micro:max-sm:text-lg">
                <ImageGridBlock {images}/>
            </div>
        </div>
</section>