<script lang="ts">
    import { currentPageServiceId, services, type Service, updateService } from '../../../stores/servicesStore';
    import { derived } from 'svelte/store';

    import EditLogo from "./edit-images/EditLogo.svelte";
	import GetMedia from '$lib/components/backend/media/GetMedia.svelte';
	import GetMedias from '$lib/components/backend/media/GetMedias.svelte';
	import { Button } from 'flowbite-svelte';

    let service = derived([services, currentPageServiceId], ([$services, $currentPageServiceId]) =>
        $services.find(s => s.id === $currentPageServiceId)
    );


    let serviceDetails:Service;

    service.subscribe($service => {
        if ($service) {
            serviceDetails = {...$service};
        }
    });

    async function saveChanges() {
        updateService(serviceDetails);
    }

    function handleLogoSelect(event: { detail: { url: any; }; }) {
        serviceDetails.logo = event.detail.url;
    }

    function handleImagesSelect(event: { detail: { urls: []; }; }) {
        serviceDetails.images = event.detail.urls;
    }

</script>


<div class="flex gap-10 text-gray-800 font-semibold">
    Logo
    <div class="w-1/3">
        <div class="relative inline-block m-auto"> 
            {#if serviceDetails.logo}
                <img src={serviceDetails.logo} alt="Tutor headshot" class="rounded-xl w-40 border-2 border-dashed p-2"/>
            {:else}
                <img src='/default_service.png' alt="Tutor headshot" class="rounded-xl w-40 border-2 border-dashed p-2"/>
            {/if}
            <GetMedia modalTitle="Select A Logo" on:select={handleLogoSelect} btnClass="bg-gray-100 bg-opacity-80 backdrop-blur-m text-gray-700 absolute top-0 right-0 p-2 m-2 hover:bg-gray-200"/>
        </div>
    </div>

    Images
    <div class="w-2/3 grid grid-cols-4 p-5 bg-gray-100 rounded-xl border-2 border-dashed justify-items-center gap-5">

        {#each serviceDetails.images as image}
            <img src={image} alt={image} class="rounded-xl w-40 aspect-square object-cover"/>
        {/each}


        <GetMedias on:select={handleImagesSelect} btnClass="text-gray-700 rounded-xl w-40 h-40 bg-transparent border-4 border-dotted bg-white" btnTitle="Add Images" showIcon={false}/>

    </div>
</div>

<div class="flex mt-5">
    <Button on:click={saveChanges} class="w-52">
        Save Changes
    </Button>
</div>