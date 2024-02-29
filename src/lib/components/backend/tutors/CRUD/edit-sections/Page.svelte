<script lang="ts">
    import { derived, get } from 'svelte/store';
    import { tutors, updateTutor, type Tutor} from '../../../stores/tutorStore';
    import { tutorStatusOptions } from '../../../stores/settingsStore';
    import { Button, Modal, Input, Select, Textarea, Toggle, Spinner, DropdownDivider, ButtonGroup } from 'flowbite-svelte';
    import DelTutor from '../DelTutor.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let tutorId: any;
    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));

    let tutorDetails:Tutor;

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    function handleFieldChange() {
        const detailsToUpdate = {...tutorDetails};
        dispatch('updateTutorDetails', detailsToUpdate);
    }    
</script>


<div class="flex flex-col w-full">
    Title
    <Textarea bind:value={tutorDetails.title} class="mt-2" id="title" name="title" rows="2" on:input={handleFieldChange} />
</div>

<div class="flex flex-col w-full">
    Description
    <Textarea bind:value={tutorDetails.description} class="mt-2" id="description" name="description" rows="4" on:input={handleFieldChange} />
</div>

<Toggle bind:checked={tutorDetails.visible} on:input={handleFieldChange} >Published</Toggle>