<script lang="ts">
   import Table from "./CRUD/Table.svelte";
   import { loading , filterText} from '../stores/tutorStore';
   import { Spinner, Input } from "flowbite-svelte";
   import AddTutor from "./CRUD/AddTutor.svelte";
   
   let searchText = '';
   $: filterText.set(searchText);
</script>

<div class="xl:max-w-7xl xl:m-auto xl:my-10
            m-10 h-24 px-8
            flex justify-between items-center
            bg-white rounded-xl border-2 border-emerald-200 dark:border-gray-600 border-solid shadow-lg dark:bg-gray-800">
   <Input bind:value={searchText} class="w-1/2" placeholder="Search Tutor"/>
   <AddTutor/>
</div>

{#if $loading}
    <Spinner class="m-auto w-full h-12 my-20"/>
{:else}
    <Table />
{/if}