<script lang="ts">
    import { derived, writable } from 'svelte/store';
    import { media, updateMedia } from '../../stores/mediaStore';
    import { Button, Modal, Label, Input, Toggle } from 'flowbite-svelte';
    import TagManager from './tags/TagManager.svelte';
    import DelMedia from './DelMedia.svelte';
    import { EditOutline,  ArrowLeftSolid, ArrowRightSolid} from 'flowbite-svelte-icons';

    export let imageId: string;
    export let btnClass: string;
    let defaultModal = writable(false);

    let currentIndex = writable(0);

    let mediaDetails = derived([media, currentIndex], ([$media, $currentIndex]) => {
        if ($media.length > 0 && $currentIndex >= 0 && $currentIndex < $media.length) {
            return $media[$currentIndex];
        } else {
            return {
                id: '',
                owner: '',
                tags: [],
                uploadDate: { seconds: 0, nanoseconds: 0 },
                alt: '',
                show: true,
                url: '',
                title: '',
                name: '',
            };
        }
    });

    // Initialize current index based on the imageId
    media.subscribe($media => {
        const index = $media.findIndex(m => m.id === imageId);
        currentIndex.set(index);
    });

    let title = '';
    let alt = '';
    let show = true;

    mediaDetails.subscribe(value => {
        imageId = value.id; // Update imageId to ensure it's always in sync
        title = value.title;
        alt = value.alt;
        show = value.show;
    });

    async function saveChanges() {
        event?.stopPropagation();
        await updateMedia({
            id: imageId,
            title,
            alt,
            show,
        });
    }

    function navigateTo(direction: number) {
        event?.stopPropagation();
        currentIndex.update(n => {
            const newIndex = n + direction;
            return newIndex >= 0 && newIndex < $media.length ? newIndex : n;
        });
    }

    function formatDate(timestamp: { seconds?: number; nanoseconds?: number; toDate?: any; }) {
        return timestamp && timestamp.toDate ? new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
        }).format(timestamp.toDate()) : '';
    }
</script>

<style>
    .scrollbar::-webkit-scrollbar {
        height: 4px !important;
        border-radius: 20px;
    }

    .scrollbar::-webkit-scrollbar-track {
        background: #f9fafb;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background: #b1b1b1;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #dcdcdc ;
    }
</style>



<Button color="alternative" class="{btnClass}" on:click={() => defaultModal.set(true)}><EditOutline/></Button>

<Modal title="Edit Media" bind:open={$defaultModal} size="xl" autoclose class="max-h-[80vh] overflow-y-auto">
    {#if $mediaDetails}
        <div class="flex">
            <div class="w-1/2">
                <img src={$mediaDetails.url} alt={$mediaDetails.alt} class="object-cover sticky top-0 rounded-xl shadow-lg"/>
                <DelMedia imageId={$mediaDetails.id}/>
            </div>
            <div class="grid gap-4 sm:grid-cols-1 px-10 w-1/2 overflow-y-auto">
                <div class="mb-6">
                    <Label for="title">Title</Label>
                    <Input id="title" type="text" bind:value={title} />
                </div>
                <div class="mb-6">
                    <Label for="alt">Alt Text</Label>
                    <Input id="alt" type="text" bind:value={alt} />
                </div>
                <div class="mb-6">
                    <Label for="show">Published</Label>
                    <Toggle bind:checked={show} />
                </div>
                <div class="mb-6">
                    <Label for="tags">Tags</Label>
                    <!-- <TagManager tags={$mediaDetails.tags}/> -->
                </div>

                
                <!-- Static -->
                <div class="flex">
                    <div class="text-gray-900 font-semibold">
                        Name:&nbsp;
                    </div>

                    <div class="font-medium text-gray-500">
                        {$mediaDetails.name}
                    </div>            
                </div>

                <div class="flex">
                    <div class="text-gray-900 font-semibold">
                        Owner:&nbsp;
                    </div>

                    <div class="font-medium text-gray-500">
                        {$mediaDetails.owner}
                    </div>            
                </div>

                <div class="flex">
                    <div class="text-gray-900 font-semibold">
                        Uploaded:&nbsp;
                    </div>

                    <div class="font-medium text-gray-500">
                        {formatDate($mediaDetails.uploadDate)}
                    </div>            
                </div>

                <div class="flex">
                    <div class="text-gray-900 font-semibold">
                        Url:&nbsp;
                    </div>

                    <div class="font-medium text-gray-500 overflow-x-auto scrollbar">
                        {$mediaDetails.url}
                    </div>            
                </div>

            </div>
        </div>
        <div class="flex gap-4 sticky bottom-0 mt-0 justify-between">
            <div class="flex gap-5">
                <Button on:click={saveChanges}>Save</Button>
                <Button color="alternative" on:click={() => defaultModal.set(false)}>Close</Button>
            </div>

            <div class="flex gap-5">
                <Button color="alternative" on:click={() => navigateTo(-1)} disabled={$currentIndex === 0}><ArrowLeftSolid/></Button>
                <Button color="alternative" on:click={() => navigateTo(1)} disabled={$currentIndex === $media.length - 1}><ArrowRightSolid/></Button>
            </div>
        </div>
    {/if}
</Modal>
