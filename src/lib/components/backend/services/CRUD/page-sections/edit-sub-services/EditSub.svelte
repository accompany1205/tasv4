<script lang="ts">
    import { Button, Label, Textarea, Popover  } from 'flowbite-svelte';
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

    subServices.subscribe(() => {
        updateSubServices();
    });
</script>

{#each $subServices as subService, i}
    <div class="flex gap-10 mb-20">
        <Label class="mb-2 text-sm w-2/12">Sub-service Name
            <Textarea bind:value={subService.name} class="mt-2 h-auto" placeholder="SubService Name"/>
        </Label>

        <Label class="mb-2 text-sm w-3/12">SubService Description
            <Textarea bind:value={subService.description} class="mt-2 " placeholder="SubService Description" rows="5" />
        </Label>

        <Label class="mb-2 text-sm w-6/12">Images
            <Images subService={subService} serviceId={serviceId} subServiceIndex={i} divClass="mt-2"/>
        </Label>


        <Label class="mb-2 text-sm">Actions
            <div class="mt-2 flex flex-col gap-4">
                <Button class="h-fit w-4" color="alternative">
                    <BarsSolid/>
                </Button>

                <Button class="h-fit w-4" color="alternative">
                    <TrashBinOutline/>
                </Button>      
            </div>
        </Label>


    </div>
{/each}

<Button on:click={addSubService} class="max-w-sm" color="alternative" disabled={$subServices.length >= 5}>Add SubService</Button>