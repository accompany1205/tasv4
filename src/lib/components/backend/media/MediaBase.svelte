<script lang="ts">
    import { onMount } from 'svelte';
    import AddMedia from "./CRUD/AddMedia.svelte";
    import { Gallery } from 'flowbite-svelte';

    let images: never[] = [];

    const accessKey = 'YOUR_BUNNY_STORAGE_API_KEY';
    const region = 'YOUR_REGION'; // e.g., 'ny' for New York
    const storageZoneName = 'YOUR_STORAGE_ZONE_NAME';
    const hostname = region ? `${region}.storage.bunnycdn.com` : 'storage.bunnycdn.com';

    onMount(async () => {
        const apiEndpoint = `https://${hostname}/${storageZoneName}/`;
        try {
            const response = await fetch(apiEndpoint, {
                method: 'GET',
                headers: {
                    'AccessKey': accessKey,
                }
            });

            if (response.ok) {
                const fileList = await response.json();
                images = fileList.map(file => ({
                    alt: file.ObjectName, 
                    src: `${apiEndpoint}${encodeURIComponent(file.ObjectName)}`
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