<script lang="ts">
    import { media } from '../stores/mediaStore';
    import { Modal, Button, ButtonGroup, Tooltip } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import { EditOutline } from 'flowbite-svelte-icons';

    const dispatch = createEventDispatcher();
    let showModal = false;
    let hasSorted = false;
    let images: any[] = [];
    let selectedUrls = new Set<string>();
    export let currentImages: string[] = [];


    $: selectedUrls = new Set(currentImages);

    $: if (showModal && !hasSorted) {
        sortImagesOnce();
        hasSorted = true;
    }

    $: if (!showModal) {
        hasSorted = false;
    }

    function sortImagesOnce() {
        let tempImages = [...images];
            tempImages.sort((a, b) => {
                if(selectedUrls.has(b.url) && !selectedUrls.has(a.url)) return 1;
                if(selectedUrls.has(a.url) && !selectedUrls.has(b.url)) return -1;
                return 0;
            });
            images = tempImages;   
     }

    function toggleImageSelection(imageUrl: string) {
        if (selectedUrls.has(imageUrl)) {
            selectedUrls.delete(imageUrl);
        } else {
            selectedUrls.add(imageUrl);
        }
        selectedUrls = new Set(selectedUrls);
    }

    function handleConfirmSelection() {
        dispatch('select', { urls: Array.from(selectedUrls) });
        showModal = false;
    }

    media.subscribe($media => {
        images = $media;
    });

    // Viewing
    let activeAspectRatio = 'square';
    let columnsCount = 5;
    export let modalTitle = 'Select Images';
    export let btnClass = "";
    export let btnTitle = "Select Images";
    export let showIcon = true;

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
        {#each images as { id, url, alt }}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <img
                src={url}
                alt={alt}
                class="cursor-pointer rounded-xl shadow-md object-cover {activeAspectRatio === 'square' ? 'aspect-square' : activeAspectRatio === 'sixteenNine' ? 'aspect-video' : 'aspect-auto'} {selectedUrls.has(url) ? 'border-4 border-emerald-500 p-2' : ''}"
                on:click={() => toggleImageSelection(url)}
            />
        {/each}
    </div>

    <div class="flex justify-center gap-10">
        <Button on:click={handleConfirmSelection} class="w-40">Add Images</Button>
        <Button color="alternative" on:click={() => (showModal = false)} class="w-40">Close</Button> <!-- Close button -->
    </div>

</Modal>