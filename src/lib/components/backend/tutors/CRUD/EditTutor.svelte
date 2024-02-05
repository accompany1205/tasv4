<script lang="ts">
	import { db } from '$lib/firebase';
	import { doc, updateDoc} from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';
    import DelTutor from './DelTutor.svelte';
    import { Spinner } from 'flowbite-svelte';
    import { derived } from 'svelte/store';
	import { onDestroy } from 'svelte';
    import { collectionsStore, fetchAllCollections } from '$lib/stores/collections';


    let collectionsData;
    const unsubscribe = collectionsStore.subscribe((value: any) => {
        collectionsData = value;
    });

    onDestroy(() => {
        unsubscribe();
    });


    let defaultModal = false;
    let working = false;

    let statusENUM = [
        { value: 'active', name: 'Active' },
        { value: 'full', name: 'Full' },
        { value: 'hold', name: 'On Hold' },
        { value: 'new', name: 'New' }
    ];

    export let tutor:any;

    let selectedStatus = tutor.status;


    async function editTutor() {
        working = true;

        const tutorRef = doc(db, 'tutors', tutor.id);

        try {
            await updateDoc(tutorRef, {
                first: tutor.first,
                last: tutor.last,
                email: tutor.email,
                phone: tutor.phone,
                rate: tutor.rate,
                status: selectedStatus,
                description: tutor.description
            });

            console.log('Tutor updated successfully');

            window.location.href = "/backend";
        } catch (error) {
            console.error('Error updating tutor:', error);
        }
    }





</script>
    
<Button on:click={() => {defaultModal = true}} color="alternative" size="xs">Edit</Button>

<Modal title="Edit Tutor" bind:open={defaultModal} class="z-50" >  

        <img src={tutor.headshot} alt={tutor.name} class="rounded-xl w-40 m-auto"/>

        <div class="grid gap-4 mb-5 sm:grid-cols-2">
            <div>
                First
                <Input bind:value={tutor.first} class="mt-2" type="text" name="first" id="first" autocomplete="on"/>
            </div>

            <div>
                Last
                <Input bind:value={tutor.last} class="mt-2" type="text" name="last" id="last" autocomplete="on"/>
            </div>

            <div>
                Email
                <Input bind:value={tutor.email} class="mt-2" type="text" name="email" id="email" autocomplete="on"/>
            </div>

            <div>
                Phone
                <Input bind:value={tutor.phone} class="mt-2" type="text" name="phone" id="phone" autocomplete="on"/>
            </div>
        </div>   

        <DropdownDivider/>

        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                Rate
                <Input bind:value={tutor.rate} class="mt-2" type="text" name="rate" id="rate"/>
            </div>

            <div>
                Status
                <Select class="mt-2" name="status" bind:value={selectedStatus} items={statusENUM} />
            </div>
        </div>

        <div class="flex flex-col w-full">
            Title
            <Textarea bind:value={tutor.title} class="mt-2" id="description" name="description" rows="2" />
        </div>

        <div class="flex flex-col">
            Description
            <Textarea bind:value={tutor.description} class="mt-2" id="description" name="description"  rows="4" />
        </div>

        <div class="flex justify-evenly">
            <Button on:click={editTutor} class="w-52">
                {#if working}
                    <div class="text-center">
                        <Spinner size={"6"}/>
                    </div>
                {:else}
                    Edit Tutor
                {/if}
            </Button>

            <DelTutor tutor={tutor}/>
        </div>


</Modal>
