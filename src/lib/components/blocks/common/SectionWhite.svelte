<script lang="ts">
	import H3 from '$lib/components/elements/H3.svelte';
	export let title: string;
</script>

<section class="p-4 text-black">
	<div class="m-auto max-w-screen-xl">
		<H3 class="break-words">{title}</H3>

		<div class="m-4 flex flex-col gap-4 text-black">
			<slot />
		</div>
	</div>
</section>
