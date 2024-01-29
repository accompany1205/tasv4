<script lang="ts">
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    // Receive the initial sub-services and the service ID as props
    export let initialSubServices: any[] | undefined = [];
    export let serviceId:any;

    let subServices = writable(initialSubServices);

    // Function to add a new sub-service
    function addSubService() {
        if ($subServices.length < 5) {
            subServices.update(currentSubServices => {
                return [...currentSubServices, { name: '', description: '' }];
            });
        }
    }

    // Function to update sub-services in Firebase
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
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <Label class="mb-2 text-sm">Sub-service Name
            <Textarea bind:value={subService.name} class="mt-2" placeholder="SubService Name" rows="1" />
        </Label>

        <Label class="mb-2 text-sm">SubService Description
            <Textarea bind:value={subService.description} class="mt-2" placeholder="SubService Description" rows="2" />
        </Label>
    </div>
{/each}
<Button on:click={addSubService} class="mb-4 w-full" color="alternative" disabled={$subServices.length >= 5}>Add SubService</Button>
