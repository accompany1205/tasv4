<script lang="ts">
    import type RichBlockData from '$lib/schemas/RichBlock';
    export let data: RichBlockData

    let _class = '';
	export { _class as class };

    import { PortableText } from '@portabletext/svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

	import ImageCarouselBlock from './ImageCarouselBlock.svelte';
    import ImageGridBlock from './ImageGridBlock.svelte';

	import H4 from '$lib/components/elements/H4.svelte';

    const images = data.gallery?.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref)})) ?? []

    // TODO: Move these out into utility functions.
    const layout = 
        data.layout === "carousel-compact" ? 'grid sm:grid-cols-2' 
        : data.layout === "carousel-hero"  ? 'flex flex-col-reverse'
        : data.layout === "grid-compact"   ? 'grid sm:grid-cols-2'
        : data.layout === "grid-hero"      ? 'flex flex-col-reverse'
        : ''
    const background = 
        data.bg === "dark-blue" ? 'bg-nile-blue-900'
        : data.bg === "light-blue" ? 'bg-bay-of-many-700'
        : data.bg === "white" ? 'bg-alabaster-50'
        : data.bg === "grey" ? 'bg-alabaster-200'
        : data.bg === "green" ? 'bg-emerald-400'
        : '';
    const textColor =
        data.bg   === "dark-blue"  ? 'text-white'
        : data.bg === "light-blue" ? 'text-white'
        : data.bg === "white"      ? 'text-black'
        : data.bg === "grey"       ? 'text-black'
        : data.bg === "green"      ? 'text-white'
        : '';
</script>

<div class="{background} py-4">
    <div class="
        {_class}
        card
        flex-shrink-0
        grid
        gap-8
        p-4
        {layout}
        mx-auto
        max-w-7xl
        {textColor}
        ">
        <div class="max-w-xl text-xl ">
            <H4 class="font-medium text-4xl">{data.heading}</H4>
            <PortableText
                value={data.body}
                components={{}}
            />
        </div>
        {#if images.length > 0}
            <div class="slider ">
                {#if data.layout === "carousel-compact"}
                <ImageCarouselBlock {images} />
                {:else if data.layout === "carousel-hero"}
                <ImageCarouselBlock {images} />
                {:else if data.layout === "grid-compact"}
                <ImageGridBlock {images} />
                {:else if data.layout === "grid-hero"}
                <ImageGridBlock {images} />
                {/if}
            </div>
        {/if}
        {#if data.button}
            <a href="{data.button.enhancedUrl.url}" class="">
                <button class="
                    w-full
                    items-center
                    bg-white
                    p-3
                    text-center
                    text-2xl
                    font-bold
                    text-emerald-400
                    hover:bg-emerald-300"
                >
                    {data.button.buttonText}
                </button>
            </a>
        {/if}
    </div>
</div>
