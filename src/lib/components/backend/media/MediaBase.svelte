<script lang="ts">
    import { onMount } from 'svelte';
    import AddMedia from "./CRUD/AddMedia.svelte";
    import DelMedia from "./CRUD/DelMedia.svelte";
    import { ButtonGroup, Gallery, Input} from 'flowbite-svelte';
    import { CloseOutline } from 'flowbite-svelte-icons';
    import {Button} from 'flowbite-svelte';
    import { Toggle } from 'flowbite-svelte';
    import Table from './CRUD/Table.svelte';
    import GalleryView from './CRUD/Gallery.svelte';

    import { getFirestore, collection, getDocs } from 'firebase/firestore';
	import { writable } from 'svelte/store';

    let images: any[]= [];
    let zoomIndex = 3; // 1 to 5
    let isGallery = false;
    let filterText = writable('');

    onMount(async () => {
        const db = getFirestore();

        try {
            const mediaCollection = collection(db, 'media');
            const querySnapshot = await getDocs(mediaCollection);

            images = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            console.log(images)
        } catch (error) {
            console.error('Error fetching images from Firestore', error);
        }
    });

    function zoomOut() {
        if (zoomIndex < 5) 
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
    <!-- <GalleryView images={images} zoomIndex={zoomIndex} filterText={filterText}/> -->
{:else}
    <Table zoomIndex={zoomIndex} filterText={filterText}/>
{/if}