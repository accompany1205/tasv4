<script lang="ts">
    import { Modal, Button, ButtonGroup } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    import { getFirestore, doc, updateDoc, collection, getDocs, getDoc } from 'firebase/firestore';

    export let service: any;
    export let tutorId: any;
    export let serviceIndex: number;
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

    // Function to update service in Firebase
    async function updateService() {
        const db = getFirestore();
        const tutorRef = doc(db, 'tutors', tutorId);

        try {
            // Correctly fetch the current state of the tutor
            const tutorSnap = await getDoc(tutorRef);
            if (tutorSnap.exists()) {
                let tutorData = tutorSnap.data();

                // Update the specific service's images
                tutorData.services[serviceIndex].images = service.images;

                await updateDoc(tutorRef, { services: tutorData.services });
            } else {
                console.error('No such document!');
            }
        } catch (error) {
            console.error('Error updating service: ', error);
        }
    }

    function handleImageSelect(imageUrl: any) {
        const imageIndex = service.images.indexOf(imageUrl);
        if (imageIndex === -1) {
            // Image not in array, add it
            service.images = [...service.images, imageUrl];
        } else {
            // Image already in array, remove it
            service.images = service.images.filter((img: any) => img !== imageUrl);
        }
        updateService();
    }

    function prepareImagesForModal() {
        // Sort images - selected ones first
        images.sort((a: { url: any; }, b: { url: any; }) => {
            const aSelected = service.images.includes(a.url);
            const bSelected = service.images.includes(b.url);
            return aSelected === bSelected ? 0 : aSelected ? -1 : 1;
        });
    }
    
    let activeAspectRatio = 'square';
    let columnsCount = 5;

    function handleZoomChange(change: number) {
        event.preventDefault();
        event.stopPropagation();
        columnsCount = Math.max(1, Math.min(5, columnsCount + change));
    }

    function handleAspectRatioChange(event: MouseEvent, aspectRatio: string) {
        event.preventDefault();
        event.stopPropagation();
        activeAspectRatio = aspectRatio;
    }

</script>



<!-- Display selected images -->
<div class="grid gap-4 mb-4 sm:grid-cols-4 {divClass} bg-gray-100 p-4 rounded-xl border-2 border-gray-200 border-dashed">
    {#if service.images}
        {#each service.images as image, i}
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
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img
                src={image.url}
                alt={image.alt}
                class="cursor-pointer rounded-xl shadow-md {activeAspectRatio === 'square' ? 'aspect-square' : activeAspectRatio === 'sixteenNine' ? 'aspect-video' : 'aspect-auto'} object-cover {service.images.includes(image.url) ? 'border-4 border-emerald-400' : ''}"
                on:click={() => handleImageSelect(image.url)}
            />
        {/each}
    </div>
</Modal>

