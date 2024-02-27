<script lang="ts">
	import { onMount } from 'svelte';
	import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { Select } from 'flowbite-svelte';

	export let _response = '';
	export let leadID = '';
	let responseOptions: { value: string; name: string }[] = [];
	let response = '';

	onMount(async () => {
		responseOptions = [
			{ value: 'No Response', name: 'No Response' },
			{ value: 'Interested', name: 'Interested' },
			{ value: 'Pass it on', name: 'Pass it on' },
			{ value: 'Bad Lead', name: 'Bad Lead' },
		];

		// Find the _response tutor's name based on the _response ID
		const responseObj = responseOptions.find((response) => response.value === _response);
		if (responseObj) {
			response = responseObj.value;
		}
	});

	async function handleSelectChange(event: any) {
		response = event.target.value;

		if (leadID) {
			const leadRef = doc(db, 'leads', leadID);
			await updateDoc(leadRef, { response: response });
		}
	}
</script>

<Select
	class="mt-2"
	bind:value="{response}"
	name="response"
	items="{responseOptions}"
	on:change="{handleSelectChange}"
	placeholder=""
/>
