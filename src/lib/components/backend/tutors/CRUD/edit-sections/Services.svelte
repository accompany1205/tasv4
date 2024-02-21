<script lang="ts">
    import { writable, derived } from 'svelte/store';
    import { tutors, updateTutor, type Tutor } from '../../../stores/tutorStore';
    import { services } from '../../../stores/servicesStore';
    import { Dropdown, DropdownItem, Input, Popover } from 'flowbite-svelte';

    export let tutorId: any;
    let tutorDetails: Tutor;
    let newService = writable(''); // Change this to a writable store

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
            updateTutor(tutorDetails);
            newService.set('');
        }
    }

    // Adjusted to use the writable store's method
    function handleKeyup(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            addService($newService);
        }
    }
</script>

<div class="flex flex-wrap gap-2">
    {#each tutorDetails.services as service}
        <span class="p-2 rounded-xl bg-gray-100 text-gray-600 dark:bg-gray-600 dark:text-gray-200">
            {service}
        </span>
    {/each}
</div>

<div class="flex items-center mt-2">
    <Input bind:value={$newService} placeholder="Add service" class="w-full" on:keyup={handleKeyup} />

    <Dropdown>
        {#if newService}
                {#each $filteredServices as { name }}
                    <DropdownItem class="flex items-center text-base font-semibold gap-2" on:click={() => addService(name)}>
                        {name}
                    </DropdownItem>
                {/each}
                
                {#if $filteredServices.length === 0}
                    <DropdownItem class="flex items-center text-base font-semibold gap-2" on:click={() => addService($newService)}>
                        Adding New Service "{$newService}"
                    </DropdownItem>
                {/if}
        {/if}
    </Dropdown>
</div>