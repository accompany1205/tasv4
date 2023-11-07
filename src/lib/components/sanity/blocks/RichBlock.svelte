<script lang="ts">
    import type RichBlockData from '$lib/schemas/RichBlock';
    export let data: RichBlockData

    import { PortableText } from '@portabletext/svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte'; 

    const images = data.imageGallery.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref)}))
</script>

<ServiceCard {images}>
    <H4>{data.blockHeading}</H4>
    
    <PortableText
        value={data.blockBody}
        components={{}}
    />
</ServiceCard>