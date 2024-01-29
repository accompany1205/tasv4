<script lang="ts">
	import { db } from '$lib/firebase';
	import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
    import { Button, Modal } from 'flowbite-svelte';
    import { ExclamationCircleOutline } from 'flowbite-svelte-icons';

    let popupModal = false;

    export let service:any;


    async function deleteService() {
        await deleteDoc(doc(db, 'services', service.id));
        window.location.href = "/backend";
    }



</script>

<Button class="w-52" on:click={() => (popupModal = true)} color="alternative">Delete Service</Button>

<Modal title="Deleting {service.name}" bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete <span class="text-red-500 font-bold">{service.name}</span> from the system?</h3>

        <Button color="red" class="me-2" on:click={deleteService}>Yes, I'm sure</Button>
        <Button color="alternative">No, cancel</Button>
    </div>
</Modal>