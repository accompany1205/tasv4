<script lang='ts'>
    import { Button, Modal } from 'flowbite-svelte';
    import { TrashBinOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';
    import { deleteMedia } from '../../stores/mediaStore';

    export let imageId: string;

    let popupModal = false;

    async function confirmDeletion() {
        await deleteMedia(imageId);
        popupModal = false;
    }

    function toggleDeletionModal() {
        event?.stopPropagation();
        popupModal = !popupModal;
    }
</script>

<Button on:click={toggleDeletionModal} class="mt-4 sticky hover:border-red-400 hover:text-red-400" color="alternative">
    <TrashBinOutline />
</Button>

<Modal bind:open={popupModal} size="xs" autoclose title="Delete Media" class="z-50">
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this file?</h3>
        <Button color="red" class="me-2" on:click={confirmDeletion}>Yes, I'm sure</Button>
        <Button color="alternative" on:click={toggleDeletionModal}>No, cancel</Button>
    </div>
</Modal>
