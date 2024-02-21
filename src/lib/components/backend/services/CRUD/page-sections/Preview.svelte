<script>
    import { currentPageServiceId, services } from '../../../stores/servicesStore';
    import { derived } from 'svelte/store';
    import { Button, Spinner } from "flowbite-svelte";
    import { DesktopPcSolid, MobilePhoneSolid } from 'flowbite-svelte-icons';

    let selectedDevice = 'desktop';
    let loading = true;

    let currentServiceName = derived([services, currentPageServiceId], ([$services, $currentPageServiceId]) => {
        const currentService = $services.find(service => service.id === $currentPageServiceId);
        return currentService ? currentService.name : '';
    });

    console.log(currentServiceName);

    function handleIframeLoad() {
        loading = false;
    }
</script>

<div class="w-full mt-10">
    <div class="w-full flex gap-4 justify-center mb-10">
        <Button on:click={() => { selectedDevice = 'desktop'; loading = true; }} color="alternative" class={selectedDevice === 'desktop' ? 'border-emerald-300 border-2' : ''}>
            {#if loading && selectedDevice == 'desktop'}
                <Spinner size="5"/>
            {:else}
                <DesktopPcSolid/>
            {/if}
        </Button>

        <Button on:click={() => { selectedDevice = 'phone'; loading = true; }} color="alternative" class={selectedDevice === 'phone' ? 'border-emerald-300 border-2' : ''}>
            {#if loading && selectedDevice == 'phone'}
                <Spinner size="5"/>
            {:else}
                <MobilePhoneSolid/>
            {/if}
        </Button>
    </div>
    
    {#if selectedDevice == 'desktop'}
        <iframe src="/services/{$currentServiceName}" class="w-[1200px] h-[675px] m-auto rounded-xl shadow-xl" title="Website Preview" on:load={handleIframeLoad}></iframe>
    {:else}
        <iframe src="/services/{$currentServiceName}" class="w-[400px] h-[800px] m-auto rounded-xl shadow-xl" title="Website Preview" on:load={handleIframeLoad}></iframe>
    {/if}
</div>
