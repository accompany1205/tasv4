<script lang="ts">
	import { Button, ButtonGroup, Input, Spinner } from "flowbite-svelte";
    import Table from "./CRUD/Table.svelte";
    import Page from "./CRUD/Page.svelte";
    import AddService from "./CRUD/AddService.svelte";
    import { loading, filterText } from '../stores/servicesStore';

    let searchText = '';
    $: filterText.set(searchText);
    let isTable:boolean = true;

    function toggleView() {
        isTable = !isTable;
    }
</script>

<div class="max-w-7xl bg-white rounded-xl border-2 border-emerald-200 dark:border-gray-600 border-solid shadow-lg h-24 m-auto my-10 flex justify-between px-8 items-center gap-10 dark:bg-gray-800">
    <Input placeholder="Search Service" bind:value={searchText} class="max-w-xs"/>

    <ButtonGroup>
        <Button on:click={toggleView} disabled={isTable}>List</Button>
        <Button on:click={toggleView} disabled={!isTable}>Page</Button>
    </ButtonGroup>

    <AddService/>
</div>


{#if $loading}
    <Spinner class="m-auto w-full h-12 my-20"/>
{:else if isTable}
    <Table />
{:else}
    <!-- <Page filterText={$filterText}/> -->
{/if}