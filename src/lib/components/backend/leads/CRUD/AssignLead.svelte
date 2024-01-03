<script lang="ts">
    import { onMount } from 'svelte';
    import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { Select } from 'flowbite-svelte';

    export let assigned = '';
    export let leadID = '';
    let tutorOptions: { value: string; name: string; }[] = [];
    let assignedTutor = '';

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, 'tutors'));
        tutorOptions = querySnapshot.docs.map(doc => ({ value: doc.id, name: `${doc.data().first} ${doc.data().last}` }));

        tutorOptions = [{ value: '', name: 'Unassigned' }, ...tutorOptions];


        // Find the assigned tutor's name based on the assigned ID
        const assignedTutorObj = tutorOptions.find(tutor => tutor.value === assigned);
        if (assignedTutorObj) {
            assignedTutor = assignedTutorObj.value;
        }
    });

    async function handleSelectChange(event:any) {
        assignedTutor = event.target.value;

        if (leadID) {
            const leadRef = doc(db, 'leads', leadID);
            await updateDoc(leadRef, { assigned: assignedTutor });
        }
    }
</script>

<Select class="mt-2" bind:value={assignedTutor} name="assignedTutor" items={tutorOptions} on:change={handleSelectChange} placeholder=""/>