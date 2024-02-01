<script lang="ts">
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import { doc, getDoc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import Images from './Images.svelte';
    import { TrashBinOutline, BarsSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';

    interface Service {
        name: string;
        description: string;
        images: string[];
    }

    export let tutor: any;
    console.log(tutor);
    let services = writable<Service[]>([]);


    onMount(async () => {
        const tutorRef = doc(db, 'tutors', tutor.id);
        try {
            const tutorSnap = await getDoc(tutorRef);
            if (tutorSnap.exists()) {
                services.set(tutorSnap.data().services || []);
            } else {
                console.log('No such tutor!');
            }
        } catch (error) {
            console.error('Error fetching tutor services: ', error);
        }
        
    });


    function addService() {
        if ($services.length < 5) {
            services.update(currentServices => {
                return [...currentServices, { name: '', description: '', images: [] }];
            });
        }

        console.log("Added Service");
        updateServices();
    }

    async function updateServices() {
        const tutorRef = doc(db, 'tutors', tutor.id);

        try {
            await updateDoc(tutorRef, {
                services: $services
            });
        } catch (error) {
            console.error('Error updating services: ', error);
        }
    }


    async function deleteService(index: number) {
        services.update(currentServices => {
            return currentServices.filter((_, i) => i !== index);
        });

        updateServices();
    }

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

        services.update(currentServices => {
            const draggedService = currentServices[draggedItem];
            let newServices = currentServices.filter((_, i) => i !== draggedItem);
            newServices.splice(index, 0, draggedService);
            return newServices;
        });

        draggedItem = null;
        updateServices();
    }

    services.subscribe(() => {
        updateServices();
    });


</script>
{#if services}
<div class="max-w-7xl bg-white m-auto border-2 my-20 rounded-xl min-h-40">
    {#each $services as service, i}
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="flex gap-10 mb-20 text-gray-800 font-semibold p-4" draggable="true" 
            on:dragstart={(event) => handleDragStart(event, i)} 
            on:dragover={(event) => handleDragOver(event, i)} 
            on:drop={(event) => handleDrop(event, i)}>
            <div class="w-2/12">
                <Label>Service Name
                    <Textarea bind:value={service.name} placeholder="Service Name"/>
                </Label>
            </div>

            <div class="w-3/12">
                <Label>Service Description
                    <Textarea bind:value={service.description} placeholder="Service Description" rows="5"/>
                </Label>
            </div>

            <div class="w-6/12">
                <Label>Images
                    <Images service={service} tutorId={tutor.id} serviceIndex={i}/>
                </Label>
            </div>

            <div class="flex flex-col gap-4">
                <Button color="alternative" on:click={() => deleteService(i)}>
                    <TrashBinOutline/>
                </Button>
                <Button color="alternative">
                    <BarsSolid/>
                </Button>
            </div>
        </div>
    {/each}

<Button on:click={addService} color="alternative" disabled={$services.length >= 5} class="m-4 w-fit">
    Add Service
</Button>
</div>
{:else}
Loading...
{/if}