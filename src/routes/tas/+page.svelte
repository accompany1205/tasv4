<script lang="ts">
    import BottomNav from "$lib/components/tutors-backend/nav/BottomNav.svelte";    
    import LeadTable from "$lib/components/tutors-backend/leads/LeadTable.svelte";

    // BottomNav Event Dispatcher
    let currentNavIndex = 1;

    function handleNavChange(event: { detail: { optionIndex: number; }; }) {
      currentNavIndex = event.detail.optionIndex;
    }
</script>

{#if currentNavIndex === 1}
    <LeadTable/>
{:else if currentNavIndex === 2}
    
{:else if currentNavIndex === 3}

{:else if currentNavIndex === 4}

{/if}

<BottomNav on:change={handleNavChange}/>