<script lang="ts">
    import BottomNav from "$lib/components/backend/nav/BottomNav.svelte";
    import TutorsBase from "$lib/components/backend/tutors/TutorsBase.svelte";


    // BottomNav Event Dispatcher
    let currentNavIndex = 1;

    function handleNavChange(event: { detail: { optionIndex: number; }; }) {
      currentNavIndex = event.detail.optionIndex;
    }
</script>

{#if currentNavIndex === 1}
    <TutorsBase/>
{:else if currentNavIndex === 2}
    
{:else if currentNavIndex === 3}

{:else if currentNavIndex === 4}

{/if}

<BottomNav on:change={handleNavChange}/>