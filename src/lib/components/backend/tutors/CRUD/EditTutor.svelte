<script lang="ts">
	import { db } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';

    let defaultModal = false;

    let statusENUM = [
        { value: 'active', name: 'Active' },
        { value: 'full', name: 'Full' },
        { value: 'hold', name: 'On Hold' }
    ];

    export let tutor = {
        id: '',
        first: '',
        last: '',
        email: '',
        phone: '',
        rate: '',
        status: '',
        description: ''
    };

    $: selectedStatus = tutor.status;


    async function editTutor() {
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
            defaultModal = false;

            window.location.href = "/backend";
        } catch (error) {
            console.error('Error updating tutor:', error);
        }
    }





</script>
    
<Button on:click={() => (defaultModal = true) } color="alternative" size="xs">Edit</Button>

<Modal title="Edit Tutor" bind:open={defaultModal} class="z-50" >  
        <input type="hidden" name="id" value={tutor.id} />

        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="first" class="mt-8 mb-2 text-sm">First
                    <Input bind:value={tutor.first} class="mt-2" type="text" name="first" id="first" placeholder="First Name" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="last" class="mt-8 mb-2 text-sm">Last
                    <Input bind:value={tutor.last} class="mt-2" type="text" name="last" id="last" placeholder="Last Name" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="email" class="mt-8 mb-2 text-sm">Email
                    <Input bind:value={tutor.email} class="mt-2" type="text" name="email" id="email" placeholder="tutor.tas@gmail.com" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="phone" class="mt-8 mb-2 text-sm">Phone
                    <Input bind:value={tutor.phone} class="mt-2" type="text" name="phone" id="phone" placeholder="123-345-6789" autocomplete="on"/>
                </Label>
            </div>
        </div>   

        <DropdownDivider class="mt-9"/>


        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="rate" class="mt-8 mb-2 text-sm">Rate
                    <Input bind:value={tutor.rate} class="mt-2" type="text" name="rate" id="rate" placeholder="15 ~ 100" />
                </Label>
            </div>

            <div>
                <Label class="mt-8 mb-2 text-sm">Status
                    <Select class="mt-2" name="status" bind:value={selectedStatus} items={statusENUM} />
                </Label>
            </div>

            <div class="sm:col-span-2">
                <Label for="description" class="mt-8 mb-2 text-sm">Notes on Tutor
                    <Textarea bind:value={tutor.description} class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" />
                </Label>
            </div>

            <Button on:click={editTutor} class="w-52 mt-4">
                Edit Tutor
            </Button>
        </div>
</Modal>
