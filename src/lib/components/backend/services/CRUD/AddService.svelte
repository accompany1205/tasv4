<script lang="ts">
    import { db } from '$lib/firebase';
    import { addDoc, collection } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { get, writable } from 'svelte/store';

    let defaultModal = false;
    let showToast = false;

    let tosENUM = [
        { value: 'both', name: 'Both' },
        { value: 'software', name: 'Software' },
        { value: 'services', name: 'Services' },
    ];  

    let name = '';
    let title = '';
    let about = '';
    let tos = '';
    let faqs = writable([{ question: '', answer: '' }]);
    let subServices = writable([{ name: '', description: '' }]);

    function addFAQ() {
        faqs.update(currentFaqs => [...currentFaqs, { question: '', answer: '' }]);
    }

    function addSubService() {
        subServices.update(currentSubServices => [...currentSubServices, { name: '', description: '' }]);
    }

    async function addService() {
        const currentFAQs = get(faqs);
        const currentSubServices = get(subServices);

        try {
            if (!name || !title || !about || !tos) {
                showToast = true;
                setTimeout(() => { showToast = false; }, 3000);
                return;
            }

            await addDoc(collection(db, 'services'), {
                name,
                title,
                about,
                tos,
                faq: currentFAQs,
                subServices: currentSubServices
            });

            defaultModal = false;
            window.location.href = "/backend";
        } catch (error) {
            console.error('Error adding service: ', error);
        }
    }
</script>

<Button on:click={() => (defaultModal = true)}>Add Service</Button>

<Modal title="Add Service" bind:open={defaultModal} class="z-50">

    <div class="grid gap-4 mb-4 sm:grid-cols-2">
        <Label for="first" class="mb-2 text-sm">Name
            <Input bind:value={name} class="mt-2" type="text" name="first" id="first" placeholder="Name" autocomplete="on"/>
        </Label>

        <Label class="mb-2 text-sm">Type of Service*
            <Select class="mt-2" name="status" items={tosENUM} bind:value={tos}/>
        </Label>
    </div>   

    <Label for="title" class="mb-2 text-sm">Page Title
        <Input bind:value={title} class="mt-2" type="text" name="title" id="title" placeholder="Page Title" autocomplete="on"/>
    </Label>

    <Label for="about" class="mb-2 text-sm">About
        <Textarea bind:value={about} class="mt-2" id="about" name="about" placeholder="About the service" rows="4" />
    </Label>

    <DropdownDivider class="mt-9"/>


    
    <!-- FAQs -->
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
    <Button on:click={addFAQ} class="mb-4 w-full" color="alternative">Add FAQ</Button>
    
    <!-- SubServices -->
    {#each $subServices as subService, i}
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <Label for={`subServiceName${i}`} class="mb-2 text-sm">SubService Name
                <Textarea bind:value={subService.name} class="mt-2" name={`subServiceName${i}`} placeholder="SubService Name" rows="1" />
            </Label>

            <Label for={`subServiceDesc${i}`} class="mb-2 text-sm">SubService Description
                <Textarea bind:value={subService.description} class="mt-2" name={`subServiceDesc${i}`} placeholder="SubService Description" rows="2" />
            </Label>
        </div>
    {/each}
    <Button on:click={addSubService} class="mb-4 w-full" color="alternative">Add SubService</Button>
    

    <div class="w-full">
        <Button on:click={addService} class="w-52 mt-4">
            Add New Service
        </Button>
    </div>

    {#if showToast}
        <Toast dismissable={false} position="bottom-right" color="red">
            <svelte:fragment slot="icon">
                <CloseCircleSolid class="w-5 h-5" />
                <span class="sr-only">Error icon</span>
            </svelte:fragment>
            All required fields must be filled
        </Toast>
    {/if}
</Modal>
