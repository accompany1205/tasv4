<script>
    import { Button, Modal } from 'flowbite-svelte';
    import { CloseOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';

    let popupModal = false;

    function confirmDeletion() {
        console.log("Media deleted");
        popupModal = false;
    }

    function cancelDeletion() {
        popupModal = false;
    }
</script>

<!-- Icon to open the modal -->
<CloseOutline on:click={() => (popupModal = true)} class="hidden m-2 p-2 bg-white w-10 h-10 rounded-full absolute top-0 right-0 group-hover:block hover:bg-red-500"/>

<!-- Modal for deletion confirmation -->
<Modal bind:open={popupModal} size="xs" autoclose title="Delete File">
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this file?</h3>
        <Button color="red" class="me-2" on:click={confirmDeletion}>Yes, I'm sure</Button>
        <Button color="alternative" on:click={cancelDeletion}>No, cancel</Button>
    </div>
</Modal>
