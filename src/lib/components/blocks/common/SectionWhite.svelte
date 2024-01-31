<script lang="ts">
	import H3 from '$lib/components/elements/H3.svelte';
	export let title: string;
</script>

<section class="m-auto max-w-screen-xl p-4 text-black">
	<H3 class="break-words">{title}</H3>

	<div class="m-2 flex flex-col gap-4 text-black">
		<slot />
	</div>
</section>
