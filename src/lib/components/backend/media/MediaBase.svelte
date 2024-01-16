<script lang="ts">
    import { onMount } from 'svelte';
    import AddMedia from "./CRUD/AddMedia.svelte";
    import DelMedia from "./CRUD/DelMedia.svelte";
    import { Gallery} from 'flowbite-svelte';
    import { CloseOutline } from 'flowbite-svelte-icons';

    let images: any[]= [];

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
</script>

<AddMedia/>



<div class="grid gap-4 grid-cols-3 max-w-4xl m-auto my-12">
    {#each images as image}
        <div class="relative inline-block group">
            <DelMedia/>
            <img src={image.src} alt={image.alt} class="h-auto max-w-full rounded-xl" />
        </div>
    {/each}
</div>


