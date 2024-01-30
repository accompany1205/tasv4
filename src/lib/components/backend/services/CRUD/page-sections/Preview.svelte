<script>
    import { Button, Spinner } from "flowbite-svelte";
    import { DesktopPcSolid, MobilePhoneSolid } from 'flowbite-svelte-icons';
    export let source = '';
    
    let selectedDevice = 'desktop';
    let loading = true;
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
    
    <div class="text-center font-bold m-10 text-emerald-400">~ Now, to style ~</div>

    {#if selectedDevice == 'desktop'}
        <iframe src="/services/{source}" class="w-[1200px] h-[675px] m-auto rounded-xl shadow-xl" title="Website Preview" on:load={handleIframeLoad}></iframe>
    {:else}
        <iframe src="/services/{source}" class="w-[400px] h-[800px] m-auto rounded-xl shadow-xl" title="Website Preview" on:load={handleIframeLoad}></iframe>
    {/if}
</div>
