<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	export let images = [{ alt: '', src: '' }];

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

</script>
  
<div use:inview="{options}" on:inview_change="{handleChange}" class="max-w-7xl w-full h-full">
	{#if isInView}
		<Carousel {images} let:Indicators duration="4000" class="rounded-sm">
			<Indicators />
		</Carousel>
	{/if}
</div>