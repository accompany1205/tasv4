<script lang="ts">
    import { currentPageServiceId, services, updateService, type Service } from '../../../stores/servicesStore';
    import { Button, Label, Textarea } from 'flowbite-svelte';
    import { TrashBinOutline, BarsSolid } from 'flowbite-svelte-icons';
    import { derived } from 'svelte/store';

    let serviceDetails: Service;
    let service = derived([services, currentPageServiceId], ([$services, $currentPageServiceId]) =>
        $services.find(s => s.id === $currentPageServiceId)
    );

    service.subscribe($service => {
        if ($service) {
            serviceDetails = { ...$service };
        }
    });

    const maxFAQs = 4;

    function addFAQ() {
        if (serviceDetails.faq.length < maxFAQs) {
            serviceDetails.faq.push({ question: '', answer: '' });
            serviceDetails = { ...serviceDetails };
        }
    }

    function deleteFAQ(index: number) {
        serviceDetails.faq.splice(index, 1);
        serviceDetails = { ...serviceDetails };
    }

    async function saveChanges() {
        await updateService(serviceDetails);
    }
</script>

{#each serviceDetails.faq as faq, index}
    <div class="flex gap-10 mb-10 text-gray-800 font-semibold">
        <div class="mb-2 text-sm w-5/12">
            <Label>Question</Label>
            <Textarea bind:value={faq.question} class="mt-2" rows="2" />
        </div>

        <div class="mb-2 text-sm w-6/12">
            <Label>Answer</Label>
            <Textarea bind:value={faq.answer} class="mt-2" rows="4" />
        </div>

        <div class="flex flex-col">
            <div class="mb-2 text-sm">Actions</div>
            <!-- <Button color="alternative" class="mb-2">
                <BarsSolid />
            </Button> -->
            <Button color="alternative" on:click={() => deleteFAQ(index)}>
                <TrashBinOutline />
            </Button>      
        </div>
    </div>
{/each}

<div class="flex gap-4">
    <Button on:click={saveChanges}>Save Changes</Button>
    <Button on:click={addFAQ} color="alternative" disabled={serviceDetails.faq.length >= maxFAQs}>Add FAQ</Button>
</div>
