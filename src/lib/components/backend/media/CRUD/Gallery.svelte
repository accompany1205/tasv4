<script lang="ts">
    import { writable, derived } from "svelte/store";
    import EditMedia from "./EditMedia.svelte";
    import { media } from '../../stores/mediaStore';

    export let zoomIndex: any;
    export let filterText = writable('');

    const filteredImages = derived([media, filterText], ([$media, $filterText]) =>
        $media.filter(image =>
            image.title.toLowerCase().includes($filterText.toLowerCase())
        )
    );
</script>

<div class="max-w-7xl m-auto mt-17 mb-20 bg-white rounded-xl border-2 p-4">
    <div class={`grid gap-4 grid-cols-${zoomIndex}`}>
        {#each $filteredImages as image}
            <div class="relative inline-block group">
                <EditMedia imageId={image.id} btnClass="text-gray-600 border-gray-600 absolute z-30 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-100 left-0 m-1"/>
                <img src={image.url} alt={image.alt} class="h-auto max-w-full rounded-xl shadow-lg group-hover:scale-105 transition-transform ease-in-out duration-100" />
            </div>
        {/each}
    </div>
</div>
