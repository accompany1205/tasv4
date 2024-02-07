<script lang="ts">
    import { derived, get } from 'svelte/store';
    import { tutors, updateTutor } from '../../stores/tutorStore';
    import { Button, Modal, Input, Select, Textarea, Toggle, Spinner, DropdownDivider } from 'flowbite-svelte';

    let statusENUM = [
        { value: 'Active', name: 'Active' },
        { value: 'Full', name: 'Full' },
        { value: 'Hold', name: 'Hold' },
        { value: 'New', name: 'New' }
    ];

    export let tutorId: any;
    let modal = false;
    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));

    // Local state initialized from tutor, but directly editable
    let first = '', last = '', email = '', phone = '', rate = '', status = '', 
        description = '', visible = true, headshot = '', title = '', name = '', services = [];

    // Initialize and update local state when tutor changes
    tutor.subscribe($tutor => {
        if ($tutor) {
            ({ first, last, email, phone, rate, status, description, visible, headshot, title, name, services } = $tutor);
        }
    });

    // Function to handle changes and update Firebase
    function handleUpdate(field: string, value: any) {
        if (tutorId && $tutor) {
            
        const updatedTutor = {
            id: tutorId,
            first,
            last,
            email,
            phone,
            rate,
            status,
            description,
            visible,
            headshot,
            title,
            name
        };



            updateTutor(updatedTutor); // Update Firebase
        }
    }
</script>


<Button on:click={() => {modal = true}} color="alternative" size="xs">Edit</Button>

<Modal title="Edit Tutor" bind:open={modal} class="z-50">  
    <img src={headshot} alt="Tutor headshot" class="rounded-xl w-40 m-auto"/>

    <div class="grid gap-4 mb-5 sm:grid-cols-2">
        <div>
            First
            <Input bind:value={first} on:input={(e) => handleUpdate('first', e.target.value)} class="mt-2" type="text" name="first" id="first"/>
        </div>

        <div>
            Last
            <Input bind:value={last} on:input={(e) => handleUpdate('last', e.target.value)} class="mt-2" type="text" name="last" id="last"/>
        </div>

        <div>
            Email
            <Input bind:value={email} on:input={(e) => handleUpdate('email', e.target.value)} class="mt-2" type="text" name="email" id="email"/>
        </div>

        <div>
            Phone
            <Input bind:value={phone} on:input={(e) => handleUpdate('phone', e.target.value)} class="mt-2" type="text" name="phone" id="phone"/>
        </div>
    </div>   

    <DropdownDivider/>

    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
            Rate
            <Input bind:value={rate} on:input={(e) => handleUpdate('rate', e.target.value)} class="mt-2" type="text" name="rate" id="rate"/>
        </div>

        <div>
            Status
            <Select bind:value={status} on:change={(e) => handleUpdate('status', e.target.value)} class="mt-2" name="status" items={statusENUM} />
        </div>
    </div>

    <div class="flex flex-col w-full">
        Title
        <Textarea bind:value={title} on:input={(e) => handleUpdate('title', e.target.value)} class="mt-2" id="title" name="title" rows="2" />
    </div>

    <div class="flex flex-col w-full">
        Description
        <Textarea bind:value={description} on:input={(e) => handleUpdate('description', e.target.value)} class="mt-2" id="description" name="description" rows="4" />
    </div>

    <Toggle bind:checked={visible} on:change={(e) => handleUpdate('visible', e.target.checked)}>Published</Toggle>

    <div class="flex justify-evenly mt-4">
        <!-- <DelTutor tutorId={tutorId}/> -->
    </div>
</Modal>