<script lang="ts">
    import BottomNav from "$lib/components/backend/nav/BottomNav.svelte";
    import LeadsBase from "$lib/components/backend/leads/LeadsBase.svelte";
    import TutorsBase from "$lib/components/backend/tutors/TutorsBase.svelte";
    import ServicesBase from "$lib/components/backend/services/ServicesBase.svelte";

    // BottomNav Event Dispatcher
    let currentNavIndex = 1;

    function handleNavChange(event: { detail: { optionIndex: number; }; }) {
      currentNavIndex = event.detail.optionIndex;
    }
</script>

{#if currentNavIndex === 1}
    <LeadsBase/>
{:else if currentNavIndex === 2}
    <ServicesBase/>
{:else if currentNavIndex === 3}
    <TutorsBase/>
{:else if currentNavIndex === 4}

{/if}

<BottomNav on:change={handleNavChange}/>