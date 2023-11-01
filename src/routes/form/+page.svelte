<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		const parameters = window.location.search;  // Capture everything after the '?'
		goto('https://form.jotform.com/232983962310055?' + parameters +'&whichWebsite=newsite');
	});

</script>