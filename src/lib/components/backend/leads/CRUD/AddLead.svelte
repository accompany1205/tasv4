<script lang="ts">
    import { onMount } from 'svelte';
    import { collection, getDocs } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { addDoc, doc, updateDoc } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider, Radio, Dropdown } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { ChevronDownSolid, CloseCircleSolid } from 'flowbite-svelte-icons';

    let defaultModal = false;
    let showToast = false;

    let statusENUM = [
        { value: 'new', name: 'New' },
        { value: 'contacted', name: 'Contacted' },
        { value: 'qualified', name: 'Qualified' },
    ];

    let tosENUM = [
        { value: 'both', name: 'Both' },
        { value: 'tutoring', name: 'Tutoring' },
        { value: 'services', name: 'Services' },
    ];   

    let tutorOptions: { value: string; name: string; }[] = [];
    let assignedTutor = '';

    let first = '';
    let last = '';
    let email = '';
    let phone = '';
    let status = '';
    let description = '';
    let tos = '';

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, 'tutors'));
        tutorOptions = querySnapshot.docs.map(doc => ({ value: doc.id, name: `${doc.data().first} ${doc.data().last}` }));
    });

    async function addLead() {
        try {
            if (!first || !email) {
                showToast = true;
                setTimeout(() => { showToast = false; }, 3000);
                return;
            }

            await addDoc(collection(db, 'leads'), {
                first,
                last,
                email,
                phone,
                status,
                description,
                assignedTutor,
                tos
            });

            defaultModal = false; // Close the modal

            window.location.href = "/backend"; // Redirect to a different page if necessary

        } catch (error) {
            console.error('Error adding lead: ', error);
        }
    }
</script>

<Button on:click={() => (defaultModal = true)}>Add Lead</Button>

<Modal title="Add Lead" bind:open={defaultModal} class="z-50">  
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
            <Label class="mb-2 text-sm">Status*
                <Select class="mt-2" name="status" items={statusENUM} bind:value={status} id="select" />
            </Label>
        </div>

        <div>
            <Label class="mb-2 text-sm">Assigned Tutor
                <Select class="mt-2" bind:value={assignedTutor} name="assignedTutor" items={tutorOptions}/>
            </Label>
        </div>

        <div>
            <Label class="mb-2 text-sm">Type of Services
                <Select class="mt-2" bind:value={tos} name="tos" items={tosENUM}/>
            </Label>
        </div>


        <div class="sm:col-span-2">
            <Label for="description" class="mb-2 text-sm">Notes on Tutor
                <Textarea bind:value={description} class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" />
            </Label>
        </div>

        <Button on:click={addLead} class="w-52 mt-4">
            Add Lead
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
