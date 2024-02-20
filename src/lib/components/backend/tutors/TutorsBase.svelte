<script lang="ts">
   import Table from "./CRUD/Table.svelte";
   import { loading , filterText} from '../stores/tutorStore';
   import { Spinner, Input } from "flowbite-svelte";
   import AddTutor from "./CRUD/AddTutor.svelte";
   
   let searchText = '';
   $: filterText.set(searchText);
</script>

<div class="max-w-7xl bg-white rounded-xl border-2 border-emerald-200 dark:border-gray-600 border-solid shadow-lg h-24 m-auto my-10 flex justify-between px-8 items-center gap-10 dark:bg-gray-800">
   <Input bind:value={searchText} class="w-1/2" placeholder="Search Tutor"/>
   <AddTutor/>
</div>

{#if $loading}
    <Spinner class="m-auto w-full h-12 my-20"/>
{:else}
    <Table />
{/if}