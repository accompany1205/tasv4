<script lang='ts'>
    import { Button, Modal } from 'flowbite-svelte';
    import { CloseOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';
    import { getFirestore, deleteDoc, doc } from 'firebase/firestore';

    export let image: string;

    let popupModal = false;

    async function confirmDeletion() {
        try {
            // Delete from Firestore
            const db = getFirestore();
            await deleteDoc(doc(db, 'media', image.id));
            console.log('Image document deleted from Firestore');

            // You might want to update your application state or UI here
        } catch (error) {
            console.error('Error deleting image document from Firestore', error);
        }

        popupModal = false;
    }

    function cancelDeletion() {
        popupModal = false;
    }
</script>

<CloseOutline on:click={() => (popupModal = true)} class="hidden m-2 p-2 bg-white w-10 h-10 rounded-full absolute top-0 right-0 group-hover:block hover:bg-red-500"/>

<Modal bind:open={popupModal} size="xs" autoclose title="Delete File">
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this file?</h3>
        <Button color="red" class="me-2" on:click={confirmDeletion}>Yes, I'm sure</Button>
        <Button color="alternative" on:click={cancelDeletion}>No, cancel</Button>
    </div>
</Modal>
