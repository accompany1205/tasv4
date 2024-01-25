<script lang="ts">
	import { Button, ButtonGroup, Input } from "flowbite-svelte";
    import Table from "./CRUD/Table.svelte";
    import Page from "./CRUD/Page.svelte";
    import AddService from "./CRUD/AddService.svelte";

    let search:string;
    let isTable:boolean = true;

    function toggleView() {
        isTable = !isTable;
    }
</script>

<div class="max-w-7xl bg-white rounded-3xl border-2 border-emerald-200 border-solid shadow-lg h-24 m-auto my-12 flex justify-evenly items-center gap-4">
    <Input placeholder="Search Service" bind:value={search} class="max-w-xs"/>

    <ButtonGroup>
        <Button on:click={toggleView} disabled={isTable}>List</Button>
        <Button on:click={toggleView} disabled={!isTable}>Page</Button>
    </ButtonGroup>

    <AddService/>

</div>

{#if isTable}
    <Table/>
{:else}
    <Page/>
{/if}