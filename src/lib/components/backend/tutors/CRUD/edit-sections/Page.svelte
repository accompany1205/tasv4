<script lang="ts">
    import { derived, get } from 'svelte/store';
    import { tutors, updateTutor, type Tutor} from '../../../stores/tutorStore';
    import { tutorStatusOptions } from '../../../stores/settingsStore';
    import { Button, Modal, Input, Select, Textarea, Toggle, Spinner, DropdownDivider, ButtonGroup } from 'flowbite-svelte';
    import DelTutor from '../DelTutor.svelte';
    import GetMedia from '../../../media/GetMedia.svelte';
    
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

    function saveChanges() {
        if (tutorId) {
            updateTutor(tutorDetails);
        }
    }
</script>


<div class="flex flex-col w-full">
    Title
    <Textarea bind:value={tutorDetails.title} class="mt-2" id="title" name="title" rows="2" />
</div>

<div class="flex flex-col w-full">
    Description
    <Textarea bind:value={tutorDetails.description} class="mt-2" id="description" name="description" rows="4" />
</div>

<Toggle bind:checked={tutorDetails.visible}>Published</Toggle>


<div class="flex justify-evenly gap-10">
    <Button on:click={saveChanges} class="w-1/2">Save</Button>
    <DelTutor tutor={tutorDetails}/>
</div>
