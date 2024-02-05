<script lang="ts">
    import { Modal, Button } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { getFirestore, collection, getDocs } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    export let service: any;

    let showModal = false;
    let images: any[] = [];
    let selectedLogo = service.logoUrl || '';

    // Fetch all images from the media collection
    onMount(async () => {
        const dbRef = getFirestore();
        const mediaCollection = collection(dbRef, 'media');
        const snapshot = await getDocs(mediaCollection);
        images = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    function selectLogo(imageUrl: string) {
        selectedLogo = imageUrl;
        showModal = false; // Close modal after selection
    }
</script>

<div class=" w-full flex flex-col items-center gap-10 p-4 bg-gray-100 rounded-lg my-2 border-dashed border-2">
    {#if selectedLogo}
        <img src={selectedLogo} alt="Service Logo" class="rounded-lg w-40 object-cover" />
    {/if}
    <Button on:click={() => showModal = true} color="alternative" class="bg-transparent border-2 border-dotted">
        {#if selectedLogo}
            Edit Logo
        {:else}
            Add Logo
        {/if}
    </Button>
</div>

<Modal title="Select a Logo" bind:open={showModal} size="lg">
    <div class="grid grid-cols-3 gap-4 p-4">
        {#each images as image}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="cursor-pointer" on:click={() => selectLogo(image.url)}>
                <img src={image.url} alt={image.alt || 'Image'} class="rounded-lg max-h-40 w-full object-cover" />
            </div>
        {/each}
    </div>
    <Button on:click={() => showModal = false} class="mt-4">Cancel</Button>
</Modal>
