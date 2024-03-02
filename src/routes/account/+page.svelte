<script lang="ts">
	import BottomNav from '$lib/components/tutors-backend/nav/BottomNav.svelte';
	import LeadTable from '$lib/components/tutors-backend/leads/LeadTable.svelte';
	import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { db } from '$lib/firebase';
	import EditServices from '$lib/components/tutors-backend/services/CRUD/EditServices.svelte';
	import { Spinner } from 'flowbite-svelte';
	import { currentUser } from '$lib/stores/sessions';
	import { get } from 'svelte/store';
	import { getTutorWithUserID } from '$lib/api/tutor'

	let tutorId = 'dNF9UrjtmoT7fD5hsyU8';
	let tutor: { id: string };
	let userId = get(currentUser)?.uid;

	console.log({ userId });
	onMount(async () => {
		try {
			if (userId) {
				const res = await getTutorWithUserID(userId);
				tutor = { ...res };
			}
		} catch (error) {
			console.error('Error fetching tutor data: ', error);
		}
	});

	// BottomNav Event Dispatcher
	let currentNavIndex = 1;

	function handleNavChange(event: { detail: { optionIndex: number } }) {
		currentNavIndex = event.detail.optionIndex;
	}
</script>

<div class="bg-gray-50 h-screen w-screen fixed top-0 left-0 z-[-999]">
	<!-- Page content -->
</div>

{#if tutor}
	{#if currentNavIndex === 1}
		<LeadTable tutor="{tutor}" />
	{:else if currentNavIndex === 2}
		<EditServices tutor="{tutor}" />
	{:else if currentNavIndex === 3}
		<!-- Other content -->
	{:else if currentNavIndex === 4}
		<!-- Other content -->
	{/if}
{:else}
	<Spinner />
{/if}

<BottomNav on:change="{handleNavChange}" />
