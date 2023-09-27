<script lang="ts">
    import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
    import { DotsHorizontalOutline } from 'flowbite-svelte-icons';

    import type {Tutor}  from '$lib/tutors.ts'; 
    import { tutors } from '$lib/tutors'; 

</script>


<div class="m-auto flex justify-center gap-6 w-full flex-wrap">
  <!-- Tutors -->
  {#each tutors as { name, subjects, hourlyRate }}
  <Card padding="sm" class="mb-4">
      <div class="flex justify-end">
          <DotsHorizontalOutline />
          <Dropdown class="w-36">
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Export data</DropdownItem>
              <DropdownItem>Delete</DropdownItem>
          </Dropdown>
      </div>
      <div class="flex flex-col items-center pb-4">
          <Avatar size="lg" src="src\lib\assets\tutors\aims.webp" />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name} • ${hourlyRate}/hr</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400 text-center">{subjects}</span>
          <div class="flex mt-4 space-x-3 lg:mt-6">
              <Button class="border-solid border-2 border-emerald-400 text-black transform transition-transform duration-500 ease-in-out hover:scale-105">Learn More</Button>
          </div>
      </div>
  </Card>
  {/each}
</div>