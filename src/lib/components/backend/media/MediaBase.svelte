<script lang="ts">
    import { onMount } from 'svelte';
    import AddMedia from "./CRUD/AddMedia.svelte";
    import { Gallery } from 'flowbite-svelte';

    let images: never[] = [];

    const accessKey = import.meta.env.VITE_BUNNY_API;
    const region = 'ny'; // e.g., 'ny' for New York
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
<Gallery items={images} class="max-w-4xl m-auto my-20 gap-4 grid-cols-2 md:grid-cols-3" />
