<script lang="ts">
	import { Button, Input, Select, Textarea, DropdownDivider  } from "flowbite-svelte";
	import { onMount } from "svelte";
    import { Tooltip } from 'flowbite-svelte';
    import { Radio, Label } from 'flowbite-svelte';
    import EditSub from "./page-sections/edit-sub-services/EditSub.svelte";
    import EditFAQ from "./page-sections/EditFAQ.svelte";
    import General from "./page-sections/General.svelte";
    import Preview from "./page-sections/Preview.svelte";
    import { DeviceMockup } from 'flowbite-svelte';
    import { DesktopPcSolid, WindowSolid, MobilePhoneSolid } from 'flowbite-svelte-icons';
 

    let tos = [
        { value: 'T', name: 'Tutoring' },
        { value: 'S', name: 'Services' },
        { value: 'B', name: 'Both' }
    ];
    export let services: any[] = [];
    export let tutors: any[] = [];
    let selectedDevice = 'desktop';

    let activeSection = 'general';


    let current:string;

    onMount(() => {
        if (services.length > 0) {
            current = services[0].id;
        }
    });
</script>

<div class="m-auto max-w-7xl rounded-xl flex gap-4 p-4 overflow-x-auto justify-center">
    <!-- Nav -->
    {#each services as service (service.id)}
        <Button color="alternative" class="w-fit shadow-md {service.id === current ? 'border-emerald-300 border-2' : ''}" on:click={() => current = service.id}>
            {service.name}
        </Button>
    {/each}
</div>

<div class="m-auto max-w-7xl bg-white rounded-xl border-2 border-gray-200 p-4 overflow-x-auto mt-4 block gap-10 mb-20">
    <!-- Page View -->
    {#if current}
        {#each services as service (service.id)}
            {#if service.id === current}

                <div class="flex justify-left gap-4 mb-4">
                    <Button color="alternative" on:click={() => activeSection = 'general'} class="{activeSection === 'general' ? 'border-emerald-300 border-2' : ''}">General</Button>
                    <Button color="alternative" on:click={() => activeSection = 'subservices'} class="{activeSection === 'subservices' ? 'border-emerald-300 border-2' : ''}">Sub-Services</Button>
                    <Button color="alternative" on:click={() => activeSection = 'faq'} class="{activeSection === 'faq' ? 'border-emerald-300 border-2' : ''}">FAQ</Button>
                    <Button color="alternative" on:click={() => activeSection = 'preview'} class="{activeSection === 'preview' ? 'border-emerald-300 border-2' : ''}">Preview</Button>
                </div>


                {#if activeSection === 'general'}
                    <General service={service} tutors={tutors} tos={tos} />
                {/if}

                {#if activeSection === 'subservices'}
                    <EditSub initialSubServices={service.subServices} serviceId={service.id} />
                {/if}

                {#if activeSection === 'faq'}
                    <EditFAQ initialFaqs={service.faq} serviceId={service.id} />
                {/if}

                {#if activeSection === 'preview'}
                    <Preview source={service.name}/>
                {/if}




            {/if}
        {/each}
    {/if}
</div>