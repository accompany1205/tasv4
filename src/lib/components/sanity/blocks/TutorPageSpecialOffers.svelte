<script lang="ts">
    import EnhancedRichBlock from '$sanity/blocks/EnhancedRichBlock.svelte';
    import type { EnhancedRichBlockData } from '$lib/schemas/RichBlock';

    export let specialOffers: EnhancedRichBlockData[]
</script>

<div class="bg-emerald-400 ">
    <div class="max-w-xl mx-auto grid sm:grid-cols-[1fr_4fr]">
        <svg aria-hidden="true" class="mx-auto sm:mx-0 p-4 min-w-[4rem] max-w-xs fill-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"></path>
        </svg>
        <h2 class="mx-auto sm:mx-0 my-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-fc-[2rem_8vw_3rem] text-5xl font-black text-white">
            My Special Offers
        </h2>
    </div>
</div>

<div class="mx-auto ">
    {#each specialOffers as data}
        <EnhancedRichBlock data={{...data, bg:"green"}}/>
    {/each}
</div>