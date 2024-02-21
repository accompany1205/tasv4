<script lang="ts">
    import BottomNav from "$lib/components/backend/nav/BottomNav.svelte";
    import LeadsBase from "$lib/components/backend/leads/LeadsBase.svelte";
    import TutorsBase from "$lib/components/backend/tutors/TutorsBase.svelte";
    import ServicesBase from "$lib/components/backend/services/ServicesBase.svelte";
    import Settings from "$lib/components/backend/settings/Settings.svelte";
    import MediaBase from "$lib/components/backend/media/MediaBase.svelte";
    import { writable } from "svelte/store";
    import { onMount } from 'svelte';
	import { Spinner } from "flowbite-svelte";
    import { requireAuth } from "$lib/auth";
    import { beforeNavigate } from "$app/navigation";

    // check auth status before navigate
    // beforeNavigate(requireAuth);

    let initialized = false;
    const currentNavIndex = writable(1);

    onMount(() => {
        // temperarily use
        requireAuth();
        const storedIndex = localStorage.getItem('currentNavIndex');
        if (storedIndex) {
            currentNavIndex.set(parseInt(storedIndex, 10)); // Update the store's value
        }
        initialized = true;
    });

    function handleNavChange(event: { detail: { optionIndex: number; }; }) {
        currentNavIndex.set(event.detail.optionIndex); // Update the store value
        localStorage.setItem('currentNavIndex', event.detail.optionIndex.toString()); // Update the local storage
    }
</script>

<div class="bg-gray-50 h-screen w-screen fixed top-0 left-0 z-[-999] dark:bg-gray-700">
</div>

{#if initialized}
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
{:else}
    <div class="w-screen h-screen flex justify-center items-center">
        <Spinner class="m-auto"/>
    </div>
{/if}

<BottomNav on:change={handleNavChange} optionIndex={$currentNavIndex}/>