<script lang="ts">
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { writable } from 'svelte/store';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
	import { BarsSolid, TrashBinOutline } from 'flowbite-svelte-icons';

    export let initialFaqs: any[] | undefined = [];
    export let serviceId:any;
    let maxFAQs = 4;

    let faqs = writable(initialFaqs);

    function addFAQ() {
        if ($faqs.length < maxFAQs) {
            faqs.update(currentFaqs => [...currentFaqs, { question: '', answer: '' }]);
        }
    }

    async function updateFaqs() {
        const serviceRef = doc(db, 'services', serviceId);
        try {
            await updateDoc(serviceRef, { faq: $faqs });
        } catch (error) {
            console.error('Error updating FAQs: ', error);
        }
    }

    function deleteFAQ(index: number) {
        faqs.update(currentFaqs => currentFaqs.filter((_, i) => i !== index));
    }

    let draggedItem: number | null = null;

    function handleDragStart(event: DragEvent, index: number) {
        draggedItem = index;
        event.dataTransfer.effectAllowed = 'move';
    }

    function handleDragOver(event: DragEvent, index: number) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    function handleDrop(event: DragEvent, index: number) {
        event.preventDefault();
        if (draggedItem === null || draggedItem === index) return;
        faqs.update(currentFaqs => {
            const draggedFaq = currentFaqs[draggedItem];
            let newFaqs = [...currentFaqs];
            newFaqs.splice(draggedItem, 1);
            newFaqs.splice(index, 0, draggedFaq);
            return newFaqs;
        });
        draggedItem = null;
    }

    faqs.subscribe(() => {
        updateFaqs();
    });
</script>

{#each $faqs as faq, i}
    <!-- svelte-ignore missing-declaration -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div 
        class="flex gap-10 mb-10 text-gray-800 font-semibold" 
        draggable="true"
        on:dragstart={(event) => handleDragStart(event, i)}
        on:dragover={(event) => handleDragOver(event, i)}
        on:drop={(event) => handleDrop(event, i)}
    >
        <div class="mb-2 text-sm w-5/12">Question
            <Textarea bind:value={faq.question} class="mt-2" name={`faqQuestion${i}`} rows="2" />
        </div>

        <div class="mb-2 text-sm w-6/12">Answer
            <Textarea bind:value={faq.answer} class="mt-2" name={`faqAnswer${i}`} rows="4" />
        </div>

        <div class="flex flex-col">
            <div class="mb-2 text-sm">Actions</div>

            <Button color="alternative" class="mb-2">
                <BarsSolid/>
            </Button>

            
            <Button color="alternative" on:click={() => deleteFAQ(i)}>
                <TrashBinOutline/>
            </Button>      
        </div>  
    </div>
{/each}
<Button on:click={addFAQ} class="max-w-sm" color="alternative" disabled={$faqs.length >= maxFAQs}>Add FAQ</Button>
