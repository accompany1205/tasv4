<script lang="ts">
    import { onMount } from 'svelte';
    import { _addDoc, _updateDoc } from '$lib/api';
    import { collection, addDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    const DUMMY_LEADS_COUNT = 10;

    function generateDummyLead() {
        const randomId = Math.floor(Math.random() * 10000); // Random number for uniqueness
        return {
            assigned: "BS3qKVU8HJm7Ci8FAEsY",
            description: "I want to learn something new " + randomId,
            email: `dummy${randomId}@example.com`,
            first: "Dummy" + randomId,
            last: "User" + randomId,
            phone: "123-456-7890",
            response: "No Response",
            status: "New",
            subject: "Subject" + randomId,
            tos: "Both"
        };
    }

    onMount(async () => {
        for (let i = 0; i < DUMMY_LEADS_COUNT; i++) {
            const dummyLead = generateDummyLead();
            try {
                // await addDoc(collection(db, 'leads'), dummyLead);
                await _addDoc('leads', dummyLead);
                console.log(`Lead ${i + 1} added.`);
            } catch (error) {
                console.error('Error adding dummy lead: ', error);
            }
        }
    });
</script>


