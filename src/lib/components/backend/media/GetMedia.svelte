<script lang="ts">
    import { media } from '../stores/mediaStore';
    import { Modal, Button, ButtonGroup, Tooltip } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import { EditOutline } from 'flowbite-svelte-icons';

    const dispatch = createEventDispatcher();
    let showModal = false;
    let images:any[] = [];
    let selectedImageId = '';
    let selectedImageUrl = '';
    let activeAspectRatio = 'square';
    let columnsCount = 8;
    export let modalTitle = 'Select an Image';
    export let btnClass = "";
    export let btnTitle = "";

    $: displayedImages = images.map(image => ({
        ...image,
        selected: image.id === selectedImageId
    }));

    function selectImage(imageId: string, imageUrl: string) {
        selectedImageId = imageId;
        selectedImageUrl = imageUrl;
    }

    function handleChangeImage() {
        dispatch('select', { url: selectedImageUrl });
        showModal = false;
    }

    function handleZoomChange(change: number, event:any) {
        event.preventDefault();
        event.stopPropagation();
        columnsCount = Math.max(1, Math.min(12, columnsCount + change));
    }

    function handleAspectRatioChange(aspectRatio: string, event:any) {
        event.preventDefault();
        event.stopPropagation();
        activeAspectRatio = aspectRatio;
    }

    media.subscribe($media => {
        images = $media;
    });

</script>



<Button on:click={() => (showModal = true)} class='{btnClass}'>{btnTitle}<EditOutline/></Button>

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
            on:click={() => selectImage(id, url)}
            />
        {/each}
    </div>

    <div class="flex justify-center gap-10">
        <Button on:click={handleChangeImage} class="w-40">Change Image</Button> <!-- New Change Image button -->
        <Button color="alternative" on:click={() => (showModal = false)} class="w-40">Close</Button> <!-- Close button -->
    </div>

</Modal>
