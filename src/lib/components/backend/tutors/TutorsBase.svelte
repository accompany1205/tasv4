<script lang="ts">
   import Table from "./CRUD/Table.svelte";
   import { tutors } from '../stores/tutorStore';
   import { Spinner, Input } from "flowbite-svelte";
   import AddTutor from "./CRUD/AddTutor.svelte";
   import { writable, derived } from 'svelte/store';

   let searchTerm = writable('');
   let showNoTutorsMessage = writable(false);

   const noTutorsAfterDelay = derived(tutors, $tutors => {
      if ($tutors.length === 0) {
         setTimeout(() => {
            showNoTutorsMessage.set(true);
         }, 5000);
         return false;
      } else {
         showNoTutorsMessage.set(false);
         return true;
      }
   });

   function handleInput(event) {
      searchTerm.set(event.target.value);
   }
</script>

<div class="max-w-7xl bg-white rounded-xl border-2 border-emerald-200 dark:border-gray-600 border-solid shadow-lg h-24 m-auto my-10 flex justify-between px-8 items-center gap-10 dark:bg-gray-800">
   <Input on:input={handleInput} class="w-1/2" placeholder="Search Tutor"/>
   <AddTutor/>
</div>

{#if $noTutorsAfterDelay}
   <Table searchTerm={searchTerm}/>
{:else if $showNoTutorsMessage}
   <div class="text-center py-10">
      No tutors found, refresh page or contact admin.
   </div>
{:else}
   <Spinner class="m-auto w-full h-12 my-20"/>
{/if}