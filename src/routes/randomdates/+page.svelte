<script lang="ts">
    import { onMount } from 'svelte';
    import { db } from '$lib/firebase';
    import { collection, getDocs, query, updateDoc } from 'firebase/firestore';

    // Function to generate a random timestamp between 1/1/2023 and 12/31/2023
    function randomTimestamp() {
        const start = new Date(2023, 0, 1).getTime(); // Jan 1, 2023
        const end = new Date(2023, 11, 31).getTime(); // Dec 31, 2023
        return new Date(start + Math.random() * (end - start));
    }

    async function updateLeadsDateCreated() {
        const leadsCol = collection(db, 'leads');
        const leadsSnapshot = await getDocs(leadsCol);

        leadsSnapshot.docs.forEach(async doc => {
            const randomDate = randomTimestamp();
            await updateDoc(doc.ref, { dateCreated: randomDate });
        });

        console.log('All leads have been updated with a random dateCreated.');
    }

    // Run the update function when the component mounts
    onMount(() => {
        updateLeadsDateCreated();
    });
</script>

<!-- Your page content goes here -->
