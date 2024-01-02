<script lang="ts">
    import { onMount } from 'svelte';
    import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { Select } from 'flowbite-svelte';

    let defaultClass = 'text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500';
    let waitingClass = 'bg-nile-blue-100'
    let badClass = 'bg-red-100';
    let passClass = 'bg-ecstasy-100';
    let interestedClass = 'bg-emerald-100';

    let currentResponseClass = '';

    export let leadID = '';
    export let response = '';

    let options: { value: string; name: string; }[] = [
        { value: "No Response", name: "No Response" },
        { value: "Interested", name: "Interested" },
        { value: "Pass it on", name: "Pass it on" },
        { value: "Bad Lead", name: "Bad Lead" }
    ];


    async function handleSelectChange(event:any) {
        response = event.target.value;

        if (leadID) {
            const leadRef = doc(db, 'leads', leadID);
            await updateDoc(leadRef, { response: response });
        }
    }

    $: {
        switch (response) {
            case "Interested":
                currentResponseClass = interestedClass;
                break;
            case "Pass it on":
                currentResponseClass = passClass;
                break;
            case "Bad Lead":
                currentResponseClass = badClass;
                break;
            default:
                currentResponseClass = waitingClass;
        }
    }


</script>

<Select class="mt-2" bind:value={response} name="assignedTutor" items={options} on:change={handleSelectChange} defaultClass="{defaultClass} {currentResponseClass}" placeholder=""/>