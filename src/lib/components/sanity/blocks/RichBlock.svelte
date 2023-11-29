<script lang="ts">
    import type RichBlockData from '$lib/schemas/RichBlock';
    export let data: RichBlockData

    let _class = '';
	export { _class as class };

    import { PortableText } from '@portabletext/svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import ImageCarouselBlock from './ImageCarouselBlock.svelte';
    import ImageGridBlock from './ImageGridBlock.svelte';

	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte'; 

    const images = data.gallery?.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref)})) ?? []

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
</script>

<div class="{background}">
    <div class="
        {_class}
        card
        flex-shrink-0
        gap-4
        p-4
        {layout}
        mx-auto
        max-w-7xl
        ">
        <div class="max-w-sm">
            <H4>{data.heading}</H4>
            <PortableText
                value={data.body}
                components={{}}
            />
        </div>
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
    </div>
</div>
