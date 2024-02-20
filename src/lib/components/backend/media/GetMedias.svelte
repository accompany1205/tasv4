<script lang="ts">
    import { media } from '../stores/mediaStore';
    import { Modal, Button, ButtonGroup, Tooltip } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import { EditOutline } from 'flowbite-svelte-icons';

    const dispatch = createEventDispatcher();
    let showModal = false;
    let images: any[] = [];
    let selectedImages = new Map(); // Changed to Map for easy access & manipulation
    let activeAspectRatio = 'square';
    let columnsCount = 5;
    export let modalTitle = 'Select Images'; // Changed to plural
    export let btnClass = "";
    export let btnTitle = "Select Images"; // Default button title
    export let showIcon = true;

    // Changed to react on selectedImages changes
    $: displayedImages = images.map(image => ({
        ...image,
        selected: selectedImages.has(image.id)
    }));

    function toggleImageSelection(imageId: string, imageUrl: string) {
        if (selectedImages.has(imageId)) {
            selectedImages.delete(imageId);
        } else {
            selectedImages.set(imageId, imageUrl);
        }
    }

    function handleConfirmSelection() {
        const selectedUrls = Array.from(selectedImages.values());
        dispatch('select', { urls: selectedUrls });
        showModal = false;
    }

    function handleZoomChange(change: number, event: any) {
        event.preventDefault();
        event.stopPropagation();
        columnsCount = Math.max(1, Math.min(12, columnsCount + change));
    }

    function handleAspectRatioChange(aspectRatio: string, event: any) {
        event.preventDefault();
        event.stopPropagation();
        activeAspectRatio = aspectRatio;
    }

    media.subscribe($media => {
        images = $media;
    });

</script>

<Button on:click={() => (showModal = true)} class='{btnClass}'>{btnTitle}
    {#if showIcon}
        <EditOutline/>
    {/if}
</Button>

<Modal title="{modalTitle}" bind:open={showModal} size="xl">
    <div class="w-full">
    <ButtonGroup id="zoomMenu">
        <Button on:click={(event) => handleZoomChange(1, event)} disabled={columnsCount === 12}>Zoom Out</Button>
        <Button on:click={(event) => handleZoomChange(-1, event)} disabled={columnsCount === 1}>Zoom In</Button>
    </ButtonGroup>

    <Tooltip type='light' triggeredBy="[id^='zoomMenu']">{columnsCount} Columns</Tooltip>


    <ButtonGroup>
        <Button on:click={(event) => handleAspectRatioChange('square', event)} disabled={activeAspectRatio === 'square'}>Square</Button>
        <Button on:click={(event) => handleAspectRatioChange('sixteenNine', event)} disabled={activeAspectRatio === 'sixteenNine'}>16/9</Button>
        <Button on:click={(event) => handleAspectRatioChange('masonry', event)} disabled={activeAspectRatio === 'masonry'}>Full</Button>
    </ButtonGroup>
    </div>
    <div class={`grid gap-10 grid-cols-${columnsCount} overflow-y-auto max-h-[600px] p-10 bg-gray-100 rounded-xl border-2 border-dashed dark:bg-gray-700 dark:border-gray-500`}>
        {#each displayedImages as { id, url, alt, selected }}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
            src={url}
            alt={alt}
            class="cursor-pointer rounded-xl shadow-md object-cover {activeAspectRatio === 'square' ? 'aspect-square' : activeAspectRatio === 'sixteenNine' ? 'aspect-video' : 'aspect-auto'} {selected ? 'border-4 border-emerald-500' : ''}"
            on:click={() => toggleImageSelection(id, url)}
            />
        {/each}
    </div>

    <div class="flex justify-center gap-10">
        <Button on:click={handleConfirmSelection} class="w-40">Add Images</Button>
        <Button color="alternative" on:click={() => (showModal = false)} class="w-40">Close</Button> <!-- Close button -->
    </div>

</Modal>