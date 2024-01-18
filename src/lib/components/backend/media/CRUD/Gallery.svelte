<script lang="ts">
	import DelMedia from "./DelMedia.svelte";

    export let images:any;
    export let zoomIndex:any;
</script>

<div class={`grid gap-4 grid-cols-${zoomIndex} max-w-4xl m-auto mt-12 mb-20`}>
    {#each images as image}
        <div class="relative inline-block group">
            <DelMedia image={image}/>
            <img src={image.url} alt={image.alt} class="h-auto max-w-full rounded-xl" />
        </div>
    {/each}
</div>
