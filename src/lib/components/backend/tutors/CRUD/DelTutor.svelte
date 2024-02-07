<script lang="ts">
    import { Button, Modal, Input  } from 'flowbite-svelte';
    import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
    import { deleteTutor } from '../../stores/tutorStore'; // Adjust the path as necessary

    let popupModal = false;

    export let tutor:any;

    async function confirmDeletion() {
        await deleteTutor(tutor.id);
        popupModal = false;
    }
</script>

<Button on:click={() => (popupModal = true)} color="alternative" class="w-1/2">Delete Tutor</Button>

<Modal title="Confirm Deletion" bind:open={popupModal} size="xs">
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 w-14 h-14 text-red-500" />
        <div class="text-lg font-normal text-gray-500">Are you sure you want to delete</div>
        <div class="font-bold text-lg text-red-500 mb-5">{tutor.name}</div>

        <Button color="red" on:click={confirmDeletion}>Yes, delete</Button>
        <Button color="alternative" on:click={() => (popupModal = false)}>Cancel</Button>
    </div>
</Modal>