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

    const images = data.imageGallery.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref)}))
</script>

<div class="card grid flex-shrink-0 gap-4 p-4 sm:grid-cols-2 {_class} mx-auto max-w-7xl">
	<div class="max-w-sm">
        <H4>{data.blockHeading} {data.layout}</H4>
        <PortableText
            value={data.blockBody}
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
