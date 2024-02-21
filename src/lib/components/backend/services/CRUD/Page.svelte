<script lang="ts">
	import { Button} from "flowbite-svelte";
    import EditSub from "./page-sections/edit-sub-services/EditSub.svelte";
    import EditFAQ from "./page-sections/EditFAQ.svelte";
    import General from "./page-sections/General.svelte";
    import Preview from "./page-sections/Preview.svelte";
    import Images from "./page-sections/Images.svelte";
    import { filteredServices, currentPageServiceId, services} from '../../stores/servicesStore';
	import { derived } from "svelte/store";

    let activeSection = 'general';
    let selected = 'border-emerald-300 border-2 dark:border-emerald-100';
</script>

<div class="m-auto max-w-7xl rounded-xl flex gap-4 p-4 overflow-x-auto justify-center mt-6">
    <!-- Nav -->
    {#each $filteredServices as service (service.id)}
        <Button color="alternative" class="w-fit shadow-md {service.id === $currentPageServiceId ? selected : ''}" on:click={() => $currentPageServiceId = service.id}>
            {service.name}
        </Button>
    {/each}
</div>

<div class="m-auto max-w-7xl bg-white rounded-xl border-2 border-gray-200 p-4 overflow-x-auto mt-4 block gap-10 mb-20 dark:bg-gray-800 dark:border-gray-600">
    <!-- Page View -->
        <div class="flex justify-left gap-4 mb-4">
            <Button color="alternative" on:click={() => activeSection = 'general'} class="{activeSection === 'general' ? selected : ''}">General</Button>
            <Button color="alternative" on:click={() => activeSection = 'images'} class="{activeSection === 'images' ? selected : ''}">Images</Button>
            <Button color="alternative" on:click={() => activeSection = 'subservices'} class="{activeSection === 'subservices' ? selected : ''}">Sub-Services</Button>
            <Button color="alternative" on:click={() => activeSection = 'faq'} class="{activeSection === 'faq' ? selected : ''}">FAQ</Button>
            <Button color="alternative" on:click={() => activeSection = 'preview'} class="{activeSection === 'preview' ? selected : ''}">Preview</Button>
        </div>

        <div class="my-4 font-bold text-gray-800 dark:text-gray-50">
            {$currentPageServiceId}
        </div>

        {#if $currentPageServiceId}

            {#if activeSection === 'general'}
                <General/>
            {/if}

            {#if activeSection === 'images'}
                <Images/>
            {/if}

            {#if activeSection === 'subservices'}
                <EditSub/>
            {/if}

            {#if activeSection === 'faq'}
                <EditFAQ/>
            {/if}

            {#if activeSection === 'preview'}
                <Preview/>
            {/if}
        {/if}
</div>