<script lang="ts">
	import { Button } from 'flowbite-svelte';

	let _class = '';
	export { _class as class };
	export let title: string;
	export let href: string = '';
</script>

<Button
	class="max-w items-center p-3 text-center text-3xl font-bold {_class}"
	href="{href}"
	on:click
>
	{title}
</Button>
