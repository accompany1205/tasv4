<script lang="ts">
    import EnhancedRichBlock from '$sanity/blocks/EnhancedRichBlock.svelte';
    import type EnhancedRichBlockData from '$lib/schemas/RichBlock';

    export let software: EnhancedRichBlockData[]
</script>

<div class="bg-nile-blue-900">
    <h2 class=" m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-5xl font-black text-white">
        1-on-1 Software Tutoring For:
    </h2>
</div>

<div class="mx-auto ">
    {#each software as data, idx}
        <EnhancedRichBlock data={{...data, bg: idx % 2 === 1 ? "dark-blue" : "light-blue" }}/>
    {/each}
</div>