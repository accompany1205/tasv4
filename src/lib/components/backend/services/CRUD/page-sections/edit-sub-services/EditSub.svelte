<script lang="ts">
    import { currentPageServiceId, services, updateService, type Service } from '../../../../stores/servicesStore';
    import GetMedias from '$lib/components/backend/media/GetMedias.svelte';
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { TrashBinOutline } from 'flowbite-svelte-icons';
    import { derived, get } from 'svelte/store';

    let serviceDetails:Service;
    
    let service = derived([services, currentPageServiceId], ([$services, $currentPageServiceId]) =>
        $services.find(s => s.id === $currentPageServiceId)
    );

    service.subscribe($service => {
        if ($service) {
            serviceDetails = {...$service};
        }
    });

    function addSubService() {
        serviceDetails.subServices.push({
            name: '',
            description: '',
            images: []
        });
        serviceDetails = { ...serviceDetails };
    }

    function handleImagesSelect(index: number, event: { detail: { urls: string[]; }; }) {
        serviceDetails.subServices[index].images = event.detail.urls;
    }

    function deleteImage(index: number, imageUrl: string) {
        serviceDetails.subServices[index].images = serviceDetails.subServices[index].images.filter(url => url !== imageUrl);
    }

    function deleteSubService(index: number) {
        serviceDetails.subServices.splice(index, 1);
        serviceDetails = { ...serviceDetails };
    }

    async function saveChanges() {
        await updateService(serviceDetails);
    }
</script>


{#each serviceDetails.subServices as subService, index}
    <div class="flex gap-10 mb-20">

        <div class="w-2/5">
            <Label>Name</Label>
            <Textarea bind:value={subService.name} class="mt-2" rows="1"/>
            
            <Label>Description</Label>
            <Textarea bind:value={subService.description} class="mt-2" rows="3" />
        </div>

        <div class="w-4/5 grid grid-cols-4 p-5 bg-gray-100 rounded-xl border-2 border-dashed justify-items-center gap-5 dark:bg-gray-700">
            {#each subService.images as image (image)}
                <div class="relative inline-block group">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src={image} alt="Sub-service image" class="rounded-xl w-40 aspect-square object-cover"/>

                    <Button on:click={() => deleteImage(index, image)} color="alternative" class="absolute right-0 top-0 p-2 m-2 bg-gray-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible">
                        <TrashBinOutline/>
                    </Button> 
                </div>
            {/each}
            <GetMedias on:select={(event) => handleImagesSelect(index, event)} currentImages={subService.images} btnClass="text-gray-700 rounded-xl w-40 h-40 bg-transparent border-4 border-dotted hover:bg-gray-50 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500" btnTitle="Add Images" showIcon={false}/>
        </div>

        <Button on:click={() => deleteSubService(index)} color="alternative"><TrashBinOutline/></Button>
    </div>
{/each}
<div class="flex gap-4">
    <Button on:click={saveChanges}>Save Changes</Button>
    <Button on:click={addSubService} color="alternative" disabled={serviceDetails.subServices.length >= 5}>Add SubService</Button>
</div>