<script lang="ts">
    import { onMount } from 'svelte';
    import AddMedia from "./CRUD/AddMedia.svelte";
    import DelMedia from "./CRUD/DelMedia.svelte";
    import { ButtonGroup, Gallery} from 'flowbite-svelte';
    import { CloseOutline } from 'flowbite-svelte-icons';
    import {Button} from 'flowbite-svelte';
    import { Toggle } from 'flowbite-svelte';


    let images: any[]= [];
    let gridCols = 3;
    let isGallery = true;

    const accessKey = import.meta.env.VITE_BUNNY_API;
    const region = 'ny';
    const storageZoneName = 'tasv4/frontend';
    const apiHostname = region ? `${region}.storage.bunnycdn.com` : 'storage.bunnycdn.com';
    const pullZoneHostname = 'tas4.b-cdn.net/frontend'; // Pull zone base URL
    const apiEndpoint = `https://${apiHostname}/${storageZoneName}/`;

    onMount(async () => {
        try {
            const response = await fetch(apiEndpoint, {
                method: 'GET',
                headers: {
                    'AccessKey': accessKey,
                }
            });

            if (response.ok) {
                const fileList = await response.json();
                images = fileList.map((file: { ObjectName: string; }) => ({
                    alt: file.ObjectName, 
                    src: `https://${pullZoneHostname}/${encodeURIComponent(file.ObjectName)}`
                }));
            } else {
                console.error('Failed to load images', response.status);
            }
        } catch (error) {
            console.error('Error fetching images', error);
        }
    });


    function zoomOut() {
        if (gridCols < 5) 
            gridCols++;
    }

    function zoomIn() {
        if (gridCols > 1) 
            gridCols--;
    }

    function toggleView() {
        isGallery = !isGallery;
    }

</script>

<div class="max-w-4xl bg-white rounded-3xl h-24 m-auto mt-12 flex justify-evenly items-center gap-4">
    <ButtonGroup>
        <Button on:click={zoomIn}>Zoom In</Button>
        <Button on:click={zoomOut}>Zoom Out</Button>
    </ButtonGroup>

    <ButtonGroup>
        <Button on:click={toggleView} disabled={!isGallery}>List</Button>
        <Button on:click={toggleView} disabled={isGallery}>Gallery</Button>
    </ButtonGroup>

    <AddMedia/>
</div>


{#if isGallery}
    <div class={`grid gap-4 grid-cols-${gridCols} max-w-4xl m-auto mt-12 mb-20`}>
        {#each images as image}
            <div class="relative inline-block group">
                <DelMedia imagePath={image.alt}/>
                <img src={image.src} alt={image.alt} class="h-auto max-w-full rounded-xl" />
            </div>
        {/each}
    </div>
{:else}
    List here
{/if}