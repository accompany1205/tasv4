<script lang="ts">
    import AddMedia from "./CRUD/AddMedia.svelte";
    import { ButtonGroup, Input} from 'flowbite-svelte';
    import {Button} from 'flowbite-svelte';
    import Table from './CRUD/Table.svelte';
    import GalleryView from './CRUD/Gallery.svelte';
	import { writable } from 'svelte/store';

    let zoomIndex = 5;
    let isGallery = false;
    let filterText = writable('');

    function zoomOut() {
        if (zoomIndex < 7) 
            zoomIndex++;
    }

    function zoomIn() {
        if (zoomIndex > 1) 
            zoomIndex--;
    }

    function toggleView() {
        isGallery = !isGallery;
    }

</script>

<div class="max-w-7xl bg-white rounded-xl border-2 border-emerald-200 dark:border-gray-600 border-solid shadow-lg h-24 m-auto my-10 flex justify-between px-8 items-center gap-10 dark:bg-gray-800">
    <Input placeholder="Search Images" bind:value={$filterText} class="max-w-xs"/>

    <ButtonGroup>
        <Button on:click={zoomOut}>Zoom Out</Button>
        <Button on:click={zoomIn}>Zoom In</Button>
    </ButtonGroup>

    <ButtonGroup>
        <Button on:click={toggleView} disabled={!isGallery}>List</Button>
        <Button on:click={toggleView} disabled={isGallery}>Gallery</Button>
    </ButtonGroup>

    <AddMedia/>
</div>


{#if isGallery}
    <GalleryView zoomIndex={zoomIndex} filterText={filterText}/>
{:else}
    <Table zoomIndex={zoomIndex} filterText={filterText}/>
{/if}