<script lang="ts">
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    export let initialFaqs: any[] | undefined = [];
    export let serviceId:any;

    let faqs = writable(initialFaqs);

    function addFAQ() {
        if ($faqs.length < 10) { // Adjust limit as needed
            faqs.update(currentFaqs => {
                return [...currentFaqs, { question: '', answer: '' }];
            });
        }
    }

    async function updateFaqs() {
        const serviceRef = doc(db, 'services', serviceId);

        try {
            await updateDoc(serviceRef, {
                faq: $faqs
            });
        } catch (error) {
            console.error('Error updating FAQs: ', error);
        }
    }

    faqs.subscribe(() => {
        updateFaqs();
    });
</script>

{#each $faqs as faq, i}
    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <Label for={`faqQuestion${i}`} class="mb-2 text-sm">FAQ Question
            <Textarea bind:value={faq.question} class="mt-2" name={`faqQuestion${i}`} placeholder="FAQ Question" rows="2" />
        </Label>

        <Label for={`faqAnswer${i}`} class="mb-2 text-sm">FAQ Answer
            <Textarea bind:value={faq.answer} class="mt-2" name={`faqAnswer${i}`} placeholder="FAQ Answer" rows="2" />
        </Label>
    </div>
{/each}
<Button on:click={addFAQ} class="mb-4 w-full" color="alternative" disabled={$faqs.length >= 10}>Add FAQ</Button>
