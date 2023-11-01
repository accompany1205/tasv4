<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		const parameters = window.location.search;  // Capture everything after the '?'
		goto('https://form.jotform.com/213494772938167' + parameters);
	});

</script>