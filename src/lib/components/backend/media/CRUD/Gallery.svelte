<script lang="ts">
	import EditMedia from "./EditMedia.svelte";

    export let images:any;
    export let zoomIndex:any;
    export let filterText:string;

    $: filteredImages = images.filter((image: { title: string; }) =>
        image.title.toLowerCase().includes(filterText.toLowerCase())
    );
</script>

<div class={`grid gap-4 grid-cols-${zoomIndex} max-w-4xl m-auto mt-12 mb-20`}>
    {#each filteredImages as image}
        <div class="relative inline-block group">
            <EditMedia image={image} btnClass="absolute z-30"/>
            <img src={image.url} alt={image.alt} class="h-auto max-w-full rounded-xl shadow-lg hover:scale-105 transition ease-in-out duration-75" />
        </div>
    {/each}
</div>
