<script lang="ts">
    import { Button } from "flowbite-svelte";
    import { DesktopPcSolid, MobilePhoneSolid } from 'flowbite-svelte-icons';
    let selectedDevice = 'desktop'
    let setSelectedDevice:any;
</script>

<div class="w-full mt-10">
    <div class="w-full flex gap-4 justify-center mb-10">
        <Button on:click={() => selectedDevice = 'desktop'} color="alternative" class={selectedDevice === 'desktop' ? 'border-emerald-300 border-2' : ''}><DesktopPcSolid/></Button>
        <Button on:click={() => selectedDevice = 'phone'} color="alternative" class={selectedDevice === 'phone' ? 'border-emerald-300 border-2' : ''}><MobilePhoneSolid/></Button>
    </div>
    
    {#if selectedDevice == 'desktop'}
        <iframe src="/" class="w-[1200px] h-[675px] m-auto rounded-xl shadow-xl" title="Website Preview"></iframe>
    {:else}
        <iframe src="/" class="w-[400px] h-[800px] m-auto rounded-xl shadow-xl" title="Website Preview"></iframe>
    {/if}
</div>
