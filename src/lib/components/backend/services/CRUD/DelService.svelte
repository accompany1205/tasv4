<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
    import { deleteService } from '../../stores/servicesStore'; // Adjust the path as needed

    let popupModal = false;
    export let serviceId: string;

    async function handleDeleteService() {
        try {
            await deleteService(serviceId);

        } catch (error) {
            console.error('Error deleting service:', error);

        }
        popupModal = false;
    }
</script>

<Button class="w-52" on:click={() => (popupModal = true)} color="alternative">Delete Service</Button>

<Modal title="Deleting Service" bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
        <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this service from the system?</h3>
        <Button color="red" class="me-2" on:click={handleDeleteService}>Yes, I'm sure</Button>
        <Button color="alternative" on:click={() => (popupModal = false)}>No, cancel</Button>
    </div>
</Modal>
