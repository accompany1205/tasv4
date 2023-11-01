<script lang="ts">
    interface RichBlockData {
        heading: string,
        body: [],
        gallery: {
            _type: "image",
            _key: string,
            asset: {
                _ref: string,
                type: string
            }
        }[],
    }
    export let data: RichBlockData

    import { PortableText } from '@portabletext/svelte';
    import {AssetRefToImageURL} from '$sanity/helpers';

	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte'; 

    const images = data.gallery.map(img => ({alt: '', src: AssetRefToImageURL(img.asset._ref) + ".webp"}))
</script>

<ServiceCard {images}>
    <H4>{data.heading}</H4>
    <PortableText
        value={data.body}
        components={{}}
    />
</ServiceCard>