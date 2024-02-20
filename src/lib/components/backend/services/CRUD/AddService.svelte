<script lang="ts">
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { addService } from '../../stores/servicesStore'; // Adjust the import path as needed

    let defaultModal = false;
    let showToast = false;

    let tosENUM = [
        { value: 'Both', name: 'Both' },
        { value: 'Software', name: 'Software' },
        { value: 'Services', name: 'Services' },
    ];  

    let name = '';
    let title = '';
    let about = '';
    let tos = '';

    async function handleAddService() {
        if (!name || !title || !about || !tos) {
            showToast = true;
            setTimeout(() => { showToast = false; }, 3000);
            return;
        }

        try {
            await addService({
				name,
				title,
				about,
				tos,
				id: '',
				faq: [],
				subServices: [],
				description: '',
				hero: '',
				logo: ''
			});

            defaultModal = false;

        } catch (error) {
            console.error('Error adding service: ', error);
            showToast = true;
            setTimeout(() => { showToast = false; }, 3000);
        }
    }
</script>

<Button on:click={() => (defaultModal = true)}>Add Service</Button>

<Modal title="Add Service" bind:open={defaultModal} class="z-50">

    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            Name
            <Input bind:value={name} class="mt-2" type="text" name="first" id="first" placeholder="Name" autocomplete="on"/>
        </div>
        
        <div>
            Type of Service
            <Select class="mt-2" name="status" items={tosENUM} bind:value={tos}/>
        </div>
    </div>   

    <div class="flex flex-col gap-5">
        <div>
            Page Title
            <Input bind:value={title} class="mt-2" type="text" name="title" id="title" placeholder="Page Title" autocomplete="on"/>
        </div>

        <div>
            <div>
                About
            </div>
            <Textarea bind:value={about} class="mt-2 w-full" id="about" name="about" placeholder="About the service" rows="4" />
        </div>
    </div>
    
    <DropdownDivider class="mt-9"/>

    <div class="w-full">
        <Button on:click={handleAddService} class="w-52 mt-4">
            Add New Service
        </Button>
    </div>

    {#if showToast}
        <Toast dismissable={false} position="bottom-right" color="red">
            <svelte:fragment slot="icon">
                <CloseCircleSolid class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            All fields must be filled
        </Toast>
    {/if}
</Modal>
