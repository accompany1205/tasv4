<script lang="ts">
	import DelService from './DelService.svelte';
    import { db } from '$lib/firebase';
    import { doc, updateDoc } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';
    import { get, writable } from 'svelte/store';


    export let service:any;

    let defaultModal = false;
    let showToast = false;

    let tosENUM = [
        { value: 'both', name: 'Both' },
        { value: 'software', name: 'Software' },
        { value: 'services', name: 'Services' },
    ];  

    let name = service.name;
    let title = service.title;
    let about = service.about;
    let tos = service.tos;
    let faqs = writable(service.faq || []);
    let subServices = writable(service.subServices || []);

    function addFAQ() {
        if ($faqs.length < 2) {
            faqs.update(currentFaqs => {
                return [...currentFaqs, { question: '', answer: '' }];
            });
        }
    }

    function addSubService() {
        if ($subServices.length < 5) {
            subServices.update(currentSubServices => {
                return [...currentSubServices, { name: '', description: '' }];
            });
        }
    }

    async function editService() {
        try {
            if (!name || !title || !about || !tos) {
                showToast = true;
                setTimeout(() => { showToast = false; }, 3000);
                return;
            }

            const serviceRef = doc(db, 'services', service.id);

            await updateDoc(serviceRef, {
                name,
                title,
                about,
                tos,
                faq: get(faqs),
                subServices: get(subServices)
            });

            defaultModal = false;
            window.location.href = "/backend";
        } catch (error) {
            console.error('Error editing service: ', error);
        }
    }
</script>

<Button on:click={() => (defaultModal = true)} color="alternative">Edit</Button>

<Modal title="Edit Service" bind:open={defaultModal} class="z-50">

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



    <!-- SubServices -->

    <!-- {#each $subServices as subService, i}
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <Label for={`subServiceName${i}`} class="mb-2 text-sm">Sub-service Name
                <Textarea bind:value={subService.name} class="mt-2" name={`subServiceName${i}`} placeholder="SubService Name" rows="1" />
            </Label>

            <Label for={`subServiceDesc${i}`} class="mb-2 text-sm">SubService Description
                <Textarea bind:value={subService.description} class="mt-2" name={`subServiceDesc${i}`} placeholder="SubService Description" rows="2" />
            </Label>
        </div>
    {/each}
    <Button on:click={addSubService} class="mb-4 w-full" color="alternative" disabled={$subServices.length >= 5}>Add SubService</Button>

    <DropdownDivider class="mt-9"/> -->

    <!-- FAQs -->

    <!-- {#each $faqs as faq, i}
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <Label for={`faqQuestion${i}`} class="mb-2 text-sm">FAQ Question
                <Textarea bind:value={faq.question} class="mt-2" name={`faqQuestion${i}`} placeholder="FAQ Question" rows="2" />
            </Label>

            <Label for={`faqAnswer${i}`} class="mb-2 text-sm">FAQ Answer
                <Textarea bind:value={faq.answer} class="mt-2" name={`faqAnswer${i}`} placeholder="FAQ Answer" rows="2" />
            </Label>
        </div>
    {/each}
    <Button on:click={addFAQ} class="mb-4 w-full" color="alternative" disabled={$faqs.length >= 2}>Add FAQ</Button> -->



    <!-- <DropdownDivider class="mt-9"/> -->


    <div class="flex justify-evenly">
        <Button on:click={editService} class="w-52">
            Edit Service
        </Button>

        <DelService service={service}/>
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
