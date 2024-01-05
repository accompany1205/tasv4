<script lang="ts">
    import { db } from '$lib/firebase';
    import { doc, getDoc, updateDoc } from 'firebase/firestore';
    import { Button, Modal, Input, Toast, DropdownDivider } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { onMount } from 'svelte';

    let showToast = false;
    let leadStatus: { [status: string]: string[] } = {};

    onMount(async () => {
        const leadStatusRef = doc(db, 'settings', 'leadStatus');
        const leadStatusSnap = await getDoc(leadStatusRef);

        if (leadStatusSnap.exists()) {
            leadStatus = leadStatusSnap.data();
            console.log(leadStatus);
        } else {
            console.log("No such document!");
        }
    });

    function addReason(status: string) {
        if (!leadStatus[status]) {
            leadStatus[status] = [];
        }
        leadStatus[status] = [...leadStatus[status], ''];
    }

    function addStatus() {
        const newStatus = `New Status ${Object.keys(leadStatus).length + 1}`;
        leadStatus = { ...leadStatus, [newStatus]: [''] };
    }

    async function saveLeadStatus() {
        try {
            const leadStatusRef = doc(db, 'settings', 'leadStatus');
            await updateDoc(leadStatusRef, leadStatus);
            console.log(leadStatus);
        } catch (error) {
            console.error('Error updating lead status: ', error);
            showToast = true;
            setTimeout(() => { showToast = false; }, 3000);
        }
    }
</script>

{#each Object.entries(leadStatus) as [status, reasons], statusIndex}
    <div class="flex gap-4 mb-8">
        <Input bind:value={status} class="text-lg w-1/2 h-10 my-2 text-emerald-500" placeholder="Status Title"/>

        <div class="w-1/2">
            {#each reasons as reason, index}
                <Input bind:value={leadStatus[status][index]} class="my-2 w-full" placeholder="Reason"/>
            {/each}
            <Button on:click={() => addReason(status)} color="alternative" class="m-auto w-full text-lg p-1 block font-bold bg-gray-50 border-gray-300 text-emerald-500">+</Button>
        </div>

    </div>
{/each}

<DropdownDivider class="m-8 bg-gray-300" />

<div class="w-full flex gap-4 justify-center">
    <Button on:click={saveLeadStatus} class="w-52">
        Save
    </Button>

    <Button on:click={addStatus} color="alternative" class="w-52 bg-gray-50 border-gray-300 text-emerald-500">
        Add Status
    </Button>
</div>

{#if showToast}
    <Toast dismissable={false} position="bottom-right" color="red">
        <svelte:fragment slot="icon">
            <CloseCircleSolid class="w-5 h-5" />
            <span class="sr-only">Error icon</span>
        </svelte:fragment>
        An error occurred, please try again.
    </Toast>
{/if}

<!-- Fundementally change everything, because things will break when the name of an option changes... use maps... -->