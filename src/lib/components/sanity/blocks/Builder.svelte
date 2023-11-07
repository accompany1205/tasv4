<script lang="ts">
    import type BuilderBlock from "$lib/schemas/BuilderBlock";
    export let data: BuilderBlock

    import RichBlock from "./RichBlock.svelte";
    import FaqBlock from "./FAQBlock.svelte";

</script>

{#if data.blockHeading}
    <h2 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black">
        {data.blockHeading}
    </h2>
{/if}

{#each data.blocks as block}
    {#if block._type === "richBlock"}
        <RichBlock data={block}/>
    {:else if block._type === "faqBlock"}
        <FaqBlock sectionClass={"text-white"} data={block}/>
    {:else if block._type === "tutorBlock"}
        <div>TODO</div>
    {/if}
{/each}