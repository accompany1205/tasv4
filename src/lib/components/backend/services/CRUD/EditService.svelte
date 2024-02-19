<script lang="ts">
    import { services, updateService } from '../../stores/servicesStore';
    import type { Service } from '../../stores/servicesStore';
    import { writable, derived } from 'svelte/store';
    import { Button, Modal, Input, Textarea, Select, DropdownDivider, Toast } from 'flowbite-svelte';
    import DelService from './DelService.svelte';
    import GetMedia from '../../media/GetMedia.svelte';
	import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { serviceTypeOptions } from '../../stores/settingsStore';

    let options = derived(serviceTypeOptions, $serviceTypeOptions => {
        return $serviceTypeOptions.map(option => ({
            value: option,
            name: option,
        }));
    });

    export let serviceId: string;
    let modal = false;
    const service = derived(services, $services => $services.find(s => s.id === serviceId));

    let serviceDetails:Service;

    service.subscribe($service => {
        if ($service) {
            serviceDetails = {...$service};
        }
    });

    let showToast = false;

    async function saveChanges() {
        if (!serviceDetails.name || !serviceDetails.title || !serviceDetails.about || !serviceDetails.tos) {
            showToast = true;
            setTimeout(() => showToast = false, 3000);
            return;
        }
        updateService(serviceDetails);
        modal = false;
    }

    function handleImageSelect(event: { detail: { url: any; }; }) {
        serviceDetails.logo = event.detail.url;
    }

</script>


<Button on:click={() => (modal = true)} color="alternative">Edit</Button>

<Modal title="Edit Service" bind:open={modal} class="z-50">

    <div class="flex justify-center">
        <div class="relative inline-block m-auto"> 
            {#if serviceDetails.logo}
                <img src={serviceDetails.logo} alt="Tutor headshot" class="rounded-xl w-40"/>
            {:else}
                <img src='/default_service.png' alt="Tutor headshot" class="rounded-xl w-40 border-2 border-dashed p-2"/>
            {/if}
            <GetMedia modalTitle="Select A Logo" on:select={handleImageSelect} btnClass="bg-gray-100 bg-opacity-80 backdrop-blur-m text-gray-700 absolute top-0 right-0 p-2 m-2 hover:bg-gray-200"/>
        </div>
    </div>


    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            Name
            <Input bind:value={serviceDetails.name} class="mt-2" type="text" name="first" id="first" placeholder="Name" autocomplete="on"/>
        </div>
        
        <div>
            Type of Service
            <Select class="mt-2" name="status" items={$options} bind:value={serviceDetails.tos}/>
        </div>
    </div> 

    <div class="flex flex-col gap-5">
        <div>
            Page Title
            <Input bind:value={serviceDetails.title} class="mt-2" type="text" name="title" id="title" placeholder="Page Title" autocomplete="on"/>
        </div>

        <div>
            <div>
                About
            </div>
            <Textarea bind:value={serviceDetails.about} class="mt-2 w-full" id="about" name="about" placeholder="About the service" rows="4" />
        </div>
    </div>

    <DropdownDivider class="mt-9"/>

    <div class="flex justify-evenly">
        <Button on:click={saveChanges} class="w-52">
            Edit Service
        </Button>

        <DelService serviceId={serviceId}/>
    </div>

    {#if showToast}
        <Toast dismissable={false} position="bottom-right" color="red">
            <svelte:fragment slot="icon">
                <CloseCircleSolid class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            All required fields must be filled
        </Toast>
    {/if}
</Modal>
