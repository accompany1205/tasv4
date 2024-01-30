<script lang="ts">
    import { Button, Label, Textarea, Popover, ButtonGroup  } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import Images from './Images.svelte';
    import { TrashBinOutline, BarsSolid } from 'flowbite-svelte-icons';

    // Receive the initial sub-services and the service ID as props
    export let initialSubServices: any[] | undefined = [];
    export let serviceId:any;

    let subServices = writable(initialSubServices);

    function addSubService() {
        if ($subServices.length < 5) {
            subServices.update(currentSubServices => {
                return [...currentSubServices, { name: '', description: '', images:[] }];
            });
        }
    }

    async function updateSubServices() {
        const serviceRef = doc(db, 'services', serviceId);

        try {
            await updateDoc(serviceRef, {
                subServices: $subServices
            });
        } catch (error) {
            console.error('Error updating sub-services: ', error);
        }
    }

    async function deleteSubService(index: number) {
        subServices.update(currentSubServices => {
            return currentSubServices.filter((_, i) => i !== index);
        });

        updateSubServices();
    }

    subServices.subscribe(() => {
        updateSubServices();
    });

    let draggedItem: number | null = null;


function handleDragStart(event: DragEvent & { currentTarget: EventTarget & HTMLDivElement; }, index: number | null) {
    draggedItem = index;
    event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event: DragEvent & { currentTarget: EventTarget & HTMLDivElement; }, index: number) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event: DragEvent & { currentTarget: EventTarget & HTMLDivElement; }, index: number) {
    event.preventDefault();

    if (draggedItem === null || draggedItem === index) {
        return;
    }

    subServices.update(currentSubServices => {
        const draggedSubService = currentSubServices[draggedItem];
        let newSubServices = currentSubServices.filter((_, i) => i !== draggedItem);
        newSubServices.splice(index, 0, draggedSubService);
        return newSubServices;
    });

    draggedItem = null;
    updateSubServices();
}



</script>

{#each $subServices as subService, i}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="flex gap-10 mb-20 text-gray-800 font-semibold"
        draggable="true"
        on:dragstart={(event) => handleDragStart(event, i)}
        on:dragover={(event) => handleDragOver(event, i)}
        on:drop={(event) => handleDrop(event, i)}
    >
        <div class="mb-2 text-sm w-2/12">Sub-service Name
            <Textarea bind:value={subService.name} class="mt-2 h-auto" placeholder="SubService Name"/>
        </div>

        <div class="mb-2 text-sm w-3/12">SubService Description
            <Textarea bind:value={subService.description} class="mt-2 " placeholder="SubService Description" rows="5" />
        </div>

        <div class="mb-2 text-sm w-6/12">Images
            <Images subService={subService} serviceId={serviceId} subServiceIndex={i} divClass="mt-2"/>
        </div>

        <div class="flex flex-col">
            <div class="mb-2 text-sm">Actions</div>

            <Button color="alternative" class="mb-2">
                <BarsSolid/>
            </Button>

            <Button color="alternative" on:click={() => deleteSubService(i)}>
                <TrashBinOutline/>
            </Button>      
        </div>
        
    </div>
{/each}

<Button on:click={addSubService} class="max-w-sm" color="alternative" disabled={$subServices.length >= 5}>Add SubService</Button>