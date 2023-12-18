<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { db } from '$lib/firebase';
    import { doc, getDoc, type DocumentData } from 'firebase/firestore';

    let tutorId: string;
    let tutor: DocumentData | null = null;
    let loading = true;

    $: tutorId = $page.params.id;

    onMount(async () => {
        const tutorRef = doc(db, 'tutors', tutorId);
        try {
            const docSnap = await getDoc(tutorRef);

            if (docSnap.exists()) {
                tutor = docSnap.data();
            } else {
                console.log("No such tutor!");
            }
        } catch (error) {
            console.error("Error fetching tutor:", error);
        } finally {
            loading = false;
        }
    });
</script>

{#if loading}
    <p>Loading...</p>
{:else if tutor}
    <h1>{tutor.first} {tutor.last}</h1>
    <p>Email: {tutor.email}</p>
    <p>Phone: {tutor.phone}</p>
    <p>Rate: ${tutor.rate}/Hour</p>
    <p>Description: {tutor.description}</p>
{:else}
    <p>Tutor not found.</p>
{/if}
