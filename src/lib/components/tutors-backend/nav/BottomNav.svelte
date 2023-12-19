<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { BottomNav, BottomNavItem } from 'flowbite-svelte';
    import { ProfileCardOutline, AtomOutline, UserEditOutline, AdjustmentsVerticalOutline } from 'flowbite-svelte-icons';
  
    const dispatch = createEventDispatcher();
    export let optionIndex = 1;
  
    function selectOption(index: number) {
      optionIndex = index;
      dispatch('change', { optionIndex }); // Dispatch the change event with the current optionIndex
    }
  </script>
  
<BottomNav position="absolute" classInner="grid-cols-4" outerClass="z-30 w-full">
    <BottomNavItem btnName="Leads" on:click={() => selectOption(1)}>
        <ProfileCardOutline class={`w-5 h-5 mb-1 ${optionIndex === 1 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Services" on:click={() => selectOption(2)}>
        <AtomOutline class={`w-5 h-5 mb-1 ${optionIndex === 2 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Profile" on:click={() => selectOption(3)}>
        <UserEditOutline class={`w-5 h-5 mb-1 ${optionIndex === 3 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Settings" on:click={() => selectOption(4)}>
        <AdjustmentsVerticalOutline class={`w-5 h-5 mb-1 ${optionIndex === 4 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>
</BottomNav>