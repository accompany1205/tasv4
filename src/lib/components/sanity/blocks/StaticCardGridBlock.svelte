<script lang="ts">
    import StaticCard from "$sanity/cards/StaticCard.svelte";
    import type StaticCardGridData from "$lib/schemas/StaticCardGridData";

    export let data: StaticCardGridData;
</script>

<div class="overflow-x-hidden py-4  mb-6">
	<h3 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black"
		>{data.heading}</h3
	>
	<div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
        {#each data.cards as card}
            <StaticCard cardData={card}/>
        {/each}
	</div>
</div>