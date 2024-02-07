<script lang="ts">
    import { derived, get } from 'svelte/store';
    import { tutors, updateTutor } from '../../stores/tutorStore';
    import { tutorStatusOptions } from '../../stores/settingsStore';
    import { Button, Modal, Input, Select, Textarea, Toggle, Spinner, DropdownDivider } from 'flowbite-svelte';



    let options = derived(tutorStatusOptions, $tutorStatusOptions => {
        return $tutorStatusOptions.map(option => ({
            value: option,
            name: option,
        }));
    });

    export let tutorId: any;
    let modal = false;
    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));

    let tutorDetails = {
        id: tutorId,
        first: '', 
        last: '', 
        email: '', 
        phone: '', 
        rate: '', 
        status: '', 
        description: '', 
        visible: true, 
        headshot: '', 
        title: '', 
        name: '', 
    };

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    function saveChanges() {
        if (tutorId) {
            updateTutor(tutorDetails);
            modal = false;
        }
    }
</script>


<Button on:click={() => {modal = true}} color="alternative" size="xs">Edit</Button>

<Modal title="Edit Tutor" bind:open={modal} class="z-50">  
    <img src={tutorDetails.headshot} alt="Tutor headshot" class="rounded-xl w-40 m-auto"/>

    <div class="grid gap-4 mb-5 sm:grid-cols-2">
        <div>
            First
            <Input bind:value={tutorDetails.first} class="mt-2" type="text" name="first" id="first"/>
        </div>

        <div>
            Last
            <Input bind:value={tutorDetails.last} class="mt-2" type="text" name="last" id="last"/>
        </div>

        <div>
            Email
            <Input bind:value={tutorDetails.email} class="mt-2" type="text" name="email" id="email"/>
        </div>

        <div>
            Phone
            <Input bind:value={tutorDetails.phone} class="mt-2" type="text" name="phone" id="phone"/>
        </div>
    </div>   

    <DropdownDivider/>

    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            Rate
            <Input bind:value={tutorDetails.rate} class="mt-2" type="text" name="rate" id="rate"/>
        </div>

        <div>
            Status
            <Select bind:value={tutorDetails.status} class="mt-2" name="status" items={$options} />
        </div>
    </div>

    <div class="flex flex-col w-full">
        Title
        <Textarea bind:value={tutorDetails.title} class="mt-2" id="title" name="title" rows="2" />
    </div>

    <div class="flex flex-col w-full">
        Description
        <Textarea bind:value={tutorDetails.description} class="mt-2" id="description" name="description" rows="4" />
    </div>

    <Toggle bind:checked={tutorDetails.visible}>Published</Toggle>

    <div class="flex justify-evenly mt-4">
        <Button on:click={saveChanges}>Save</Button>
        <!-- <DelTutor tutorId={tutorId}/> -->
    </div>
</Modal>