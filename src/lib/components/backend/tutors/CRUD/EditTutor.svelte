<script lang="ts">
    import { derived } from 'svelte/store';
    import { tutors, updateTutor } from '../../stores/tutorStore';
    import type { Tutor } from '../../stores/tutorStore';
    import { Button, Modal, ButtonGroup } from 'flowbite-svelte';
    import DelTutor from './DelTutor.svelte';
    import General from './edit-sections/General.svelte';
    import Services from './edit-sections/Services.svelte';
    import Images from './edit-sections/Images.svelte';
    import Page from './edit-sections/Page.svelte';

    export let tutorId: any;
    let modal = false;
    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));
    let tutorDetails: Tutor;
    let selected = 'border-emerald-300 border-2 dark:border-emerald-100';

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    let activeSection = 'General';

    function saveChanges() {
        if (tutorId) {
            updateTutor(tutorDetails);
            modal = false;
        }
    }

    function setActiveSection(section: string) {
        activeSection = section;
    }

    function handleTutorDetailsUpdate(event: { detail: Tutor; }) {
        tutorDetails = event.detail;
    }
</script>

<Button on:click={() => {modal = true}} color="alternative">Edit</Button>

<Modal title="Edit Tutor - {tutorDetails.name}" bind:open={modal} class="z-50 h-[800px]">

    <ButtonGroup class="mb-5">
        <Button on:click={() => setActiveSection('General')} class="{activeSection === 'General' ? selected : ''}">General</Button>
        <Button on:click={() => setActiveSection('Services')} class="{activeSection === 'Services' ? selected : ''}">Services</Button>
        <Button on:click={() => setActiveSection('Page')} class="{activeSection === 'Page' ? selected : ''}">Page</Button>
        <Button on:click={() => setActiveSection('Images')} class="{activeSection === 'Images' ? selected : ''}">Images</Button>
    </ButtonGroup>

    {#if activeSection === 'General'}
        <General tutorId={tutorId} on:updateTutorDetails={handleTutorDetailsUpdate}/>
    {/if}

    {#if activeSection === 'Services'}
        <Services tutorId={tutorId} on:updateTutorDetails={handleTutorDetailsUpdate}/>
    {/if}

    {#if activeSection === 'Images'}
        <Images tutorId={tutorId} on:updateTutorDetails={handleTutorDetailsUpdate}/>
    {/if}
    
    {#if activeSection === 'Page'}
        <Page tutorId={tutorId} on:updateTutorDetails={handleTutorDetailsUpdate}/>
    {/if}

    <div class="flex justify-evenly gap-10">
        <Button on:click={saveChanges} class="w-1/2">Save</Button>
        <DelTutor tutor={tutorDetails}/>
    </div>
</Modal>