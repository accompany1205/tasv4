<script lang="ts">
    import StaticCard from "$sanity/cards/StaticCard.svelte";
    import type TypesOfServices from "$lib/schemas/TypesOfServices";

    export let data: TypesOfServices;
</script>

<div class="overflow-x-hidden py-4  mb-6">
	<h3 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black"
		>{data.blockHeading}</h3
	>
	<div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-white">
        {#each data.services as service}
            <StaticCard cardData={service}/>
        {/each}
	</div>
</div>