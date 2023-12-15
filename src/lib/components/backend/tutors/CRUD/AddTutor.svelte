<script lang="ts">
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { CheckCircleSolid, ExclamationCircleSolid, FireOutline, CloseCircleSolid } from 'flowbite-svelte-icons';

    let defaultModal = false;
    let showToast = false;


    let statusENUM = [
        { value: 'active', name: 'Active' },
        { value: 'full', name: 'Full' },
        { value: 'hold', name: 'On Hold' }
    ];

    let first = '';
    let last = '';
    let email = '';
    let phone = '';
    let rate = '';
    let status = '';
    let description = '';

    async function addTutor() {
        try {


            if (!first || !email || !rate || !status) {
                showToast = true;
                setTimeout(() => { showToast = false; }, 3000);
                return;
            }



            const docRef = await addDoc(collection(db, 'tutors'), {
                first,
                last,
                email,
                phone,
                rate,
                status,
                description
            });

            console.log('New tutor added with ID: ', docRef.id);
            defaultModal = false; // Close the modal

            window.location.href = "/backend";

        } catch (error) {
            console.error('Error adding tutor: ', error);
        }
    }


</script>
    
<Button on:click={() => (defaultModal = true)}>Add Tutor</Button>

<Modal title="Add Tutor" bind:open={defaultModal} class="z-50">  
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <Label for="first" class="mb-2 text-sm">First*
                <Input bind:value={first} class="mt-2" type="text" name="first" id="first" placeholder="First Name" autocomplete="on"/>
            </Label>
        </div>

        <div>
            <Label for="last" class="mb-2 text-sm">Last
                <Input bind:value={last} class="mt-2" type="text" name="last" id="last" placeholder="Last Name" autocomplete="on"/>
            </Label>
        </div>

        <div>
            <Label for="email" class="mb-2 text-sm">Email*
                <Input bind:value={email} class="mt-2" type="text" name="email" id="email" placeholder="tutor.tas@gmail.com" autocomplete="on"/>
            </Label>
        </div>

        <div>
            <Label for="phone" class="mb-2 text-sm">Phone
                <Input bind:value={phone} class="mt-2" type="text" name="phone" id="phone" placeholder="123-345-6789" autocomplete="on"/>
            </Label>
        </div>
    </div>   

    <DropdownDivider class="mt-9"/>


    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            <Label for="rate" class="mb-2 text-sm">Rate*
                <Input bind:value={rate} class="mt-2" type="text" name="rate" id="rate" placeholder="15 ~ 100" />
            </Label>
        </div>

        <div>
            <Label class="mb-2 text-sm">Status*
                <Select class="mt-2" name="status" items={statusENUM} bind:value={status} id="select" />
            </Label>
        </div>

        <div class="sm:col-span-2">
            <Label for="description" class="mb-2 text-sm">Notes on Tutor
                <Textarea bind:value={description} class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" />
            </Label>
        </div>



        <Button on:click={addTutor} class="w-52 mt-4">
            Add New Tutor
        </Button>


        {#if showToast}
            <Toast dismissable={false} position="bottom-right" color="red">
                <svelte:fragment slot="icon">
                    <CloseCircleSolid class="w-5 h-5" />
                    <span class="sr-only">Error icon</span>
                </svelte:fragment>
                All required fields must be filled
            </Toast>
        {/if}



    </div>
</Modal>
