<script lang="ts">
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte'; 

    import {PortableText} from '@portabletext/svelte'


    export let data = {
        heading: "jimmy",
        body: []
    }
</script>

<ServiceCard>
    <H4>{data.heading}</H4>
    <PortableText
        value={data.body}
        components={{}}
    />
</ServiceCard>