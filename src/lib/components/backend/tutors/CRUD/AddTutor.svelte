<script lang="ts">
    import { Button, Modal, Input, Select, Textarea, Toggle, DropdownDivider, Toast } from 'flowbite-svelte';
    import { addTutor, type Tutor } from '../../stores/tutorStore';
    import { tutorStatusOptions } from '../../stores/settingsStore';
    import { derived } from 'svelte/store';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';

    let modal = false;
    let showToast = false;
    let options = derived(tutorStatusOptions, $tutorStatusOptions => $tutorStatusOptions.map(option => ({ value: option, name: option })));

    let tutorDetails: Tutor = {
		description: '',
		email: '',
		first: '',
		headshot: '',
		id: '',
		last: '',
		name: '',
		phone: '',
		rate: '',
		status: '',
		title: '',
		visible: true,
		images: [],
		services: []
	};

    async function saveChanges() {
        await addTutor(tutorDetails);
        modal = false;
    }
</script>

<Button on:click={() => (modal = true)}>Add Tutor</Button>

<Modal title="Add Tutor" bind:open={modal} class="z-50">  
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            First*
            <Input bind:value={tutorDetails.first} class="mt-2" type="text" name="first" id="first" placeholder="First Name" autocomplete="on"/>
        </div>

        <div>
            Last*
            <Input bind:value={tutorDetails.last} class="mt-2" type="text" name="last" id="last" placeholder="Last Name" autocomplete="on"/>
        </div>

        <div>
            Email*
            <Input bind:value={tutorDetails.email} class="mt-2" type="text" name="email" id="email" placeholder="tutor.tas@gmail.com" autocomplete="on"/>
           
        </div>

        <div>
            Phone
            <Input bind:value={tutorDetails.phone} class="mt-2" type="text" name="phone" id="phone" placeholder="123-345-6789" autocomplete="on"/>
      
        </div>
    </div>   

    <DropdownDivider class="mt-9"/>


    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            Rate*
            <Input bind:value={tutorDetails.rate} class="mt-2" type="text" name="rate" id="rate" placeholder="15 ~ 100" />
        </div>

        <div>
            Status*
            <Select class="mt-2" name="status" items={$options} bind:value={tutorDetails.status} id="select" />
        </div>

        <div class="sm:col-span-2">
            Tutor Title
            <Textarea bind:value={tutorDetails.title} class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" />
        </div>

        <Button on:click={saveChanges} class="w-52 mt-4">
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
