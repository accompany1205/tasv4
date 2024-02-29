<script lang="ts">
    import { currentPageServiceId, services, type Service, updateService } from '../../../stores/servicesStore';
    import { tutors } from '../../../stores/tutorStore';
    import { serviceTypeOptions } from '../../../stores/settingsStore';
    import { derived } from 'svelte/store';
    import { Input, Select, Textarea, Label, Button } from 'flowbite-svelte';

    let service = derived([services, currentPageServiceId], ([$services, $currentPageServiceId]) =>
        $services.find(s => s.id === $currentPageServiceId)
    );

    let options = derived(serviceTypeOptions, $serviceTypeOptions => {
        return $serviceTypeOptions.map(option => ({
            value: option,
            name: option,
        }));
    });

    let serviceDetails:Service;

    service.subscribe($service => {
        if ($service) {
            serviceDetails = {...$service};
        }
    });


    let qualifiedTutors = derived([tutors, service], ([$tutors, $service]) => {
        if($service)
        {
            return $tutors.filter(tutor => tutor.services.includes($service.name));
        }
        return [''];
    });

    async function saveChanges() {
        updateService(serviceDetails);
    }
</script>

<div class="w-full flex gap-10">
    <div class="w-1/2 flex flex-col gap-4">
        <div class="mb-4">
            <Label for="name" class="block text-sm font-medium text-gray-700">Name</Label>
            <Input id="name" class="mt-1 block w-full" type="text" bind:value={serviceDetails.name} />
        </div>
        <div class="mb-4">
            <Label for="title" class="block text-sm font-medium text-gray-700">Title</Label>
            <Input id="title" class="mt-1 block w-full" type="text" bind:value={serviceDetails.title} maxlength={60}/>
            <div class="text-xs relative mt-1 text-gray-400">{serviceDetails.title.length}/60</div>
        </div>

        <div class="mb-4">
            <Label for="about" class="block text-sm font-medium text-gray-700">Description</Label>
            <Textarea id="about" rows=4 class="mt-1 block w-full" bind:value={serviceDetails.description} maxlength={160}/>
            <div class="text-xs relative mt-1 text-gray-400">{serviceDetails.description.length}/160</div>
        </div>

        <div class="mb-4">
            <Label for="about" class="block text-sm font-medium text-gray-700">About</Label>
            <Textarea id="about" rows=4 class="mt-1 block w-full" bind:value={serviceDetails.about} maxlength={160}/>
            <div class="text-xs relative mt-1 text-gray-400">{serviceDetails.about.length}/160</div>
        </div>


        <div class="mb-4">
            <Label for="tos" class="block text-sm font-medium text-gray-700">Type of Service</Label>
            <Select id="tos" class="mt-1 block w-full" items={$options} bind:value={serviceDetails.tos} />
        </div>
    </div>

    <div class="w-1/2">
        <Label class="block text-sm font-medium text-gray-700">Qualified Tutors</Label>
        <div class="flex gap-2 mt-2">
            {#each $qualifiedTutors as tutor (tutor.id)}
                <img src={tutor.headshot} alt={tutor.name} class="rounded-full max-w-16" />
            {/each}
        </div>
    </div>
</div>

<div class="flex mt-5">
    <Button on:click={saveChanges} class="w-52">
        Save Changes
    </Button>
</div>