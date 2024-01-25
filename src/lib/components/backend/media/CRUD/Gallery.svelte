<script lang="ts">
    import EditMedia from "./EditMedia.svelte";

    export let images: any;
    export let zoomIndex: any;
    export let filterText: string;

    $: filteredImages = images.filter((image: { title: string; }) =>
        image.title.toLowerCase().includes(filterText.toLowerCase())
    );
</script>

<div class={`grid gap-4 grid-cols-${zoomIndex} max-w-7xl m-auto mt-12 mb-20`}>
    {#each filteredImages as image}
        <div class="relative inline-block group">
            <EditMedia image={image} btnClass="text-white absolute z-30 hover:bg-transparent hover:text-white bg-opacity-25 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-100 right-0 m-1"/>
            <img src={image.url} alt={image.alt} class="h-auto max-w-full rounded-xl shadow-lg group-hover:scale-105 transition-transform ease-in-out duration-100" />
        </div>
    {/each}
</div>
