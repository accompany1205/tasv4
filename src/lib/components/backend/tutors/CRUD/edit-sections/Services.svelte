<script lang="ts">
    import { writable, derived } from 'svelte/store';
    import { tutors, updateTutor, type Tutor } from '../../../stores/tutorStore';
    import { services } from '../../../stores/servicesStore';
    import { Button, Dropdown, DropdownDivider, DropdownItem, Input, Popover } from 'flowbite-svelte';
    import { TrashBinOutline } from 'flowbite-svelte-icons'; // Ensure this is imported
	import DelTutor from '../DelTutor.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tutorId: any;
    let tutorDetails: Tutor;
    let newService = writable('');

    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    const filteredServices = derived(newService, $newService =>
        $services.filter(service => service.name.toLowerCase().includes($newService.toLowerCase()))
    );

    function addService(serviceName: string) {
        if (serviceName && !tutorDetails.services.includes(serviceName)) {
            tutorDetails.services = [...tutorDetails.services, serviceName];
            newService.set('');
            handleFieldChange();
        }
    }

    function removeService(serviceName: string) {
        tutorDetails.services = tutorDetails.services.filter(service => service !== serviceName);
        handleFieldChange();
    }

    function getServiceType(serviceName: string) {
        const service = $services.find(s => s.name === serviceName);
        return service ? service.tos : 'other';
    }

    function handleKeyup(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            addService($newService);
        }
    }

    function handleFieldChange() {
        const detailsToUpdate = {...tutorDetails};
        dispatch('updateTutorDetails', detailsToUpdate);
    }

</script>

<div class="flex gap-6 h-96">
    <!-- Add Service Input -->
    <div class="block w-1/3">
        <Input bind:value={$newService} placeholder="Add service" class="w-full h-10" on:keyup={handleKeyup} />


        <div class="mt-5 border-2 rounded-md bg-gray-50 max-h-80 overflow-auto">
            {#if newService}
                    {#each $filteredServices as { name }, index}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <!-- svelte-ignore a11y-no-static-element-interactions -->
                        <div class="flex items-center text-base font-semibold gap-2 p-2 hover:bg-gray-200" on:click={() => addService(name)}>
                            {name}
                        </div>

                        {#if $filteredServices.length != index + 1}
                            <div class="border-[1px]"/>
                        {/if}
                    {/each}
                    
                    {#if $filteredServices.length === 0}
                        <div class="flex items-center text-base font-semibold gap-2 p-2">
                            No Matches
                        </div>
                    {/if}
            {/if}
        </div>
    </div>

   <!-- Service Pills -->
    <div class="flex flex-wrap gap-2 w-2/3 p-2 bg-gray-100 rounded-md border-2 border-dashed content-start">
        {#each tutorDetails.services as service, index}
            <div 
                id="pill-{index.toString()}"
                class="p-2 rounded-lg border-2 bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-200 h-10
                {getServiceType(service) === 'Software' ? 'border-red-300' : getServiceType(service) === 'Service' ? 'border-blue-300' : 'border-gray-300'}
            ">
                {service}
            </div>


            <Popover triggeredBy="#pill-{index.toString()}" class="text-sm font-light z-50" placement="top">
                <TrashBinOutline class="h-5 w-5 text-red-500 cursor-pointer" on:click={() => removeService(service)} />
            </Popover>
        {/each}
    </div>
</div>