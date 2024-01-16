<script lang="ts">
    import BottomNav from "$lib/components/backend/nav/BottomNav.svelte";
    import LeadsBase from "$lib/components/backend/leads/LeadsBase.svelte";
    import TutorsBase from "$lib/components/backend/tutors/TutorsBase.svelte";
    import ServicesBase from "$lib/components/backend/services/ServicesBase.svelte";
    import Settings from "$lib/components/backend/settings/Settings.svelte";
    import MediaBase from "$lib/components/backend/media/MediaBase.svelte";
    import { writable } from "svelte/store";
    import { onMount } from 'svelte';


    // Create a writable store for the current navigation index
    const currentNavIndex = writable(1);

    // Load the stored index from localStorage when the component mounts
    onMount(() => {
        const storedIndex = localStorage.getItem('currentNavIndex');
        if (storedIndex) {
            currentNavIndex.set(parseInt(storedIndex, 10)); // Update the store's value
        }
    });

    function handleNavChange(event: { detail: { optionIndex: number; }; }) {
        currentNavIndex.set(event.detail.optionIndex); // Update the store value
        localStorage.setItem('currentNavIndex', event.detail.optionIndex.toString()); // Update the local storage
    }
</script>

<div class="bg-gray-50 h-screen w-screen fixed top-0 left-0 z-[-999]">
</div>

{#if $currentNavIndex === 1}
    <LeadsBase/>
{:else if $currentNavIndex === 2}
    <ServicesBase/>
{:else if $currentNavIndex === 3}
    <TutorsBase/>
{:else if $currentNavIndex === 4}
    <MediaBase/>
{:else if $currentNavIndex === 5}
    <Settings/>
{/if}

<BottomNav on:change={handleNavChange} optionIndex={$currentNavIndex}/>
