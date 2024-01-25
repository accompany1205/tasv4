<script lang='ts'>
    import { Button, Modal } from 'flowbite-svelte';
    import { TrashBinOutline, ExclamationCircleOutline } from 'flowbite-svelte-icons';
    import { getFirestore, deleteDoc, doc } from 'firebase/firestore';

    export let image: string;

    let popupModal = false;

    async function confirmDeletion() {
        try {
            const db = getFirestore();
            await deleteDoc(doc(db, 'media', image.id));
            console.log('Image document deleted from Firestore');
        } catch (error) {
            console.error('Error deleting image document from Firestore', error);
        }

        popupModal = false;
    }

    function cancelDeletion(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        popupModal = true;
    }
</script>

<Button on:click={(event) => cancelDeletion(event)} class="mt-4 sticky hover:border-red-400 hover:text-red-400" color="alternative">
    <TrashBinOutline/>
</Button>

<Modal bind:open={popupModal} size="xs" autoclose title="Delete File" class="z-50">
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this file?</h3>
        <Button color="red" class="me-2" on:click={confirmDeletion}>Yes, I'm sure</Button>
        <Button color="alternative" on:click={cancelDeletion}>No, cancel</Button>
    </div>
</Modal>
