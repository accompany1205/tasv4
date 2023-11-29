<script lang="ts">
    import EnhancedRichBlock from '$sanity/blocks/EnhancedRichBlock.svelte';
    import type TestimonialData from '$lib/schemas/TestimonialData';

    export let testimonials: TestimonialData[]
</script>

<div class="bg-alabaster-50">
    <h2 class=" m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-5xl font-black text-black">
        Testimonials
    </h2>
</div>

<div class="mx-auto ">
    {#each testimonials as data, idx}
        <EnhancedRichBlock data={{...data.content, bg: idx % 2 === 1 ? "grey" : "white", layout: 'carousel-compact' }}/>
    {/each}
</div>