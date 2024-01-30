<script lang="ts">
    import { Modal, Button, ButtonGroup } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { getFirestore, doc, updateDoc, collection, getDocs, getDoc } from 'firebase/firestore';

    export let subService: any;
    export let serviceId: any;
    export let subServiceIndex: number;
    export let divClass = '';

    let showModal = false;
    let images: any = [];

    // Fetch media collection from Firebase
    onMount(async () => {
        const db = getFirestore();

        try {
            const mediaCollection = collection(db, 'media');
            const querySnapshot = await getDocs(mediaCollection);

            images = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error('Error fetching images from Firestore', error);
        }
    });

    // Function to update sub-service in Firebase
    async function updateSubService() {
        const db = getFirestore();
        const serviceRef = doc(db, 'services', serviceId);

        try {
            // Correctly fetch the current state of the service
            const serviceSnap = await getDoc(serviceRef);
            if (serviceSnap.exists()) {
                let serviceData = serviceSnap.data();

                // Update the specific sub-service's images
                serviceData.subServices[subServiceIndex].images = subService.images;

                await updateDoc(serviceRef, { subServices: serviceData.subServices });
            } else {
                console.error('No such document!');
            }
        } catch (error) {
            console.error('Error updating sub-service: ', error);
        }
    }

    function handleImageSelect(imageUrl: any) {
        const imageIndex = subService.images.indexOf(imageUrl);
        if (imageIndex === -1) {
            // Image not in array, add it
            subService.images = [...subService.images, imageUrl];
        } else {
            // Image already in array, remove it
            subService.images = subService.images.filter((img: any) => img !== imageUrl);
        }
        updateSubService();
    }

    function prepareImagesForModal() {
        // Sort images - selected ones first
        images.sort((a: { url: any; }, b: { url: any; }) => {
            const aSelected = subService.images.includes(a.url);
            const bSelected = subService.images.includes(b.url);
            return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
        });
    }
    
    let activeAspectRatio = 'square';
    let columnsCount = 5;

    function handleZoomChange(change) {
        event.preventDefault();
        event.stopPropagation();
        columnsCount = Math.max(1, Math.min(5, columnsCount + change));
    }

    function handleAspectRatioChange(event, aspectRatio) {
        event.preventDefault();
        event.stopPropagation();
        activeAspectRatio = aspectRatio;
    }



</script>



<!-- Display selected images -->
<div class="grid gap-4 mb-4 sm:grid-cols-4 {divClass} bg-gray-100 p-4 rounded-xl border-2 border-gray-200 border-dashed">
    {#if subService.images}
        {#each subService.images as image, i}
            <img src={image} alt={`Sub-service image ${i}`} class="rounded-xl shadow-md aspect-square object-cover">
        {/each}
    {/if}

    <Button on:click={() => { showModal = true; prepareImagesForModal(); }} class="aspect-square rounded-xl bg-transparent text-gray-700 border-2 border-gray-200 border-dotted hover:bg-gray-50">Edit Images</Button>
</div>

<Modal title="Select Images" bind:open={showModal} autoclose size="lg">
    <div class="w-full">
        <ButtonGroup>
            <Button on:click={() => handleZoomChange(1)} disabled={columnsCount === 5}>Zoom Out</Button>
            <Button on:click={() => handleZoomChange(-1)} disabled={columnsCount === 1}>Zoom In</Button>
        </ButtonGroup>

        <ButtonGroup>
            <Button on:click={(event) => handleAspectRatioChange(event, 'square')} disabled={activeAspectRatio === 'square'}>Square</Button>
            <Button on:click={(event) => handleAspectRatioChange(event, 'masonry')} disabled={activeAspectRatio === 'masonry'}>Full</Button>
            <Button on:click={(event) => handleAspectRatioChange(event, 'sixteenNine')} disabled={activeAspectRatio === 'sixteenNine'}>16/9</Button>
        </ButtonGroup>
    </div>

    <!-- Image display grid -->
    <div class="grid gap-5" class:grid-cols-1={columnsCount === 1} class:grid-cols-2={columnsCount === 2} class:grid-cols-3={columnsCount === 3} class:grid-cols-4={columnsCount === 4} class:grid-cols-5={columnsCount === 5}>
        {#each images as image}
            <img
                src={image.url}
                alt={image.alt}
                class="cursor-pointer rounded-xl shadow-md {activeAspectRatio === 'square' ? 'aspect-square' : activeAspectRatio === 'sixteenNine' ? 'aspect-video' : 'aspect-auto'} object-cover {subService.images.includes(image.url) ? 'border-4 border-yellow-200' : ''}"
                on:click={() => handleImageSelect(image.url)}
            />
        {/each}
    </div>
</Modal>

