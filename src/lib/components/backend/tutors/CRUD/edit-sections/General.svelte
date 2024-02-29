<script lang="ts">
    import { derived, get } from 'svelte/store';
    import { tutors, updateTutor, type Tutor} from '../../../stores/tutorStore';
    import { tutorStatusOptions } from '../../../stores/settingsStore';
    import { Button, Modal, Input, Select, Textarea, Toggle, Spinner, DropdownDivider, ButtonGroup } from 'flowbite-svelte';
    import DelTutor from '../DelTutor.svelte';
    import GetMedia from '../../../media/GetMedia.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let options = derived(tutorStatusOptions, $tutorStatusOptions => {
        return $tutorStatusOptions.map(option => ({
            value: option,
            name: option,
        }));
    });

    export let tutorId: any;
    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));

    let tutorDetails:Tutor;

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    function handleImageSelect(event: { detail: { url: string; }; }) {
        tutorDetails.headshot = event.detail.url;
        console.log('Selected image URL:', event.detail.url);
    }

    function handleFieldChange() {
        const detailsToUpdate = {...tutorDetails};
        dispatch('updateTutorDetails', detailsToUpdate);
    }
</script>

<div class="flex justify-center">
    <div class="relative inline-block m-auto"> 
        {#if tutorDetails.headshot}
            <img src={tutorDetails.headshot} alt="Tutor headshot" class="rounded-xl w-40 border-2 border-dashed p-2"/>
        {:else}
            <img src='/default_user.jpg' alt="Tutor headshot" class="rounded-xl w-40 border-2 border-dashed p-2"/>
        {/if}
        <GetMedia modalTitle="Select A Headshot" on:select={handleImageSelect} btnClass="bg-gray-100 bg-opacity-80 backdrop-blur-m text-gray-700 absolute top-0 right-0 p-2 m-2 hover:bg-gray-200"/>
    </div>
</div>


<div class="grid gap-4 mb-5 sm:grid-cols-2">
    <div>
        First
        <Input bind:value={tutorDetails.first} on:input={handleFieldChange} class="mt-2" type="text" name="first" id="first"/>
    </div>

    <div>
        Last
        <Input bind:value={tutorDetails.last} on:input={handleFieldChange} class="mt-2" type="text" name="last" id="last"/>
    </div>

    <div>
        Email
        <Input bind:value={tutorDetails.email} on:input={handleFieldChange} class="mt-2" type="text" name="email" id="email"/>
    </div>

    <div>
        Phone
        <Input bind:value={tutorDetails.phone} on:input={handleFieldChange} class="mt-2" type="text" name="phone" id="phone"/>
    </div>
</div>   

<DropdownDivider/>

<div class="grid gap-4 sm:grid-cols-3">
    <div>
        Name
        <Input bind:value={tutorDetails.name} on:input={handleFieldChange} class="mt-2 mb-4" name="name" />
    </div>

    <div>
        Rate
        <Input bind:value={tutorDetails.rate} on:input={handleFieldChange} class="mt-2" type="text" name="rate" id="rate"/>
    </div>

    <div>
        Status
        <Select bind:value={tutorDetails.status} on:input={handleFieldChange} class="mt-2 mb-4" name="status" items={$options} />
    </div>
</div>