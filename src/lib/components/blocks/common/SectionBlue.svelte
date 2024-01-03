<script lang="ts">
	import H3 from '$lib/components/elements/H3.svelte';

	export let title: string;
</script>

<section class="bg-nile-blue-900 p-4 text-white">
	<div class="m-auto max-w-screen-xl">
		<H3 class="break-words">{title}</H3>

		<div class="m-2 flex flex-wrap gap-4 text-white">
			<slot />
		</div>
	</div>
</section>
