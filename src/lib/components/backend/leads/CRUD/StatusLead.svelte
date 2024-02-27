<script lang="ts">
	import { onMount } from 'svelte';
	import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { Select } from 'flowbite-svelte';

	export let status = '';
	export let leadID = '';
	let statusOptions: { value: string; name: string }[] = [];
	let activeStatus = '';

	onMount(async () => {
		statusOptions = [
			{ value: 'New', name: 'New' },
			{ value: 'Contacted', name: 'Contacted' },
			{ value: 'Qualified', name: 'Qualified' },
		];

		// Find the status tutor's name based on the status ID
		const activeStatusObj = statusOptions.find((tutor) => tutor.value === status);
		if (activeStatusObj) {
			activeStatus = activeStatusObj.value;
		}
	});

	async function handleSelectChange(event: any) {
		activeStatus = event.target.value;

		if (leadID) {
			const leadRef = doc(db, 'leads', leadID);
			await updateDoc(leadRef, { status: activeStatus });
		}
	}
</script>

<Select
	class="mt-2"
	bind:value="{activeStatus}"
	name="statusTutor"
	items="{statusOptions}"
	on:change="{handleSelectChange}"
	placeholder=""
/>
