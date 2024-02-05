<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { BottomNav, BottomNavItem, DarkMode  } from 'flowbite-svelte';
    import { ProfileCardOutline, AtomOutline, DrawSquareOutline, AdjustmentsVerticalOutline, UserEditOutline, ImageOutline } from 'flowbite-svelte-icons';
  
    const dispatch = createEventDispatcher();
    export let optionIndex = 1;
  
    function selectOption(index: number) {
      optionIndex = index;
      dispatch('change', { optionIndex }); // Dispatch the change event with the current optionIndex
    }
</script>

<div class="fixed bottom-3 right-4 z-50">
    <DarkMode/>
</div>


<BottomNav position="fixed" classInner="grid-cols-5" outerClass="z-30 w-full dark:bg-gray-800 dark:border-0">
    <BottomNavItem btnName="Leads" on:click={() => selectOption(1)}>
        <ProfileCardOutline class={`w-5 h-5 mb-1 ${optionIndex === 1 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Services" on:click={() => selectOption(2)}>
        <AtomOutline class={`w-5 h-5 mb-1 ${optionIndex === 2 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Tutors" on:click={() => selectOption(3)}>
        <UserEditOutline class={`w-5 h-5 mb-1 ${optionIndex === 3 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Media" on:click={() => selectOption(4)}>
        <ImageOutline class={`w-5 h-5 mb-1 ${optionIndex === 4 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>

    <BottomNavItem btnName="Settings" on:click={() => selectOption(5)}>
        <AdjustmentsVerticalOutline class={`w-5 h-5 mb-1 ${optionIndex === 5 ? 'text-primary-600 dark:text-primary-500' : 'text-gray-500 dark:text-gray-400'} group-hover:text-primary-600`} />
    </BottomNavItem>
</BottomNav>