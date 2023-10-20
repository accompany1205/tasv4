<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	export let images = [
		{ alt: '', src: '/sketchup/main/sketchup_1.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_3.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_4.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_5.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_6.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_7.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_8.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_9.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_10.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_11.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_12.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_13.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_14.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_15.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_16.webp' },
	];
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
  
<div use:inview="{options}" on:inview_change="{handleChange}" class="max-w-4xl w-full">
	{#if isInView}
		<Carousel {images} let:Indicators duration="4000" class="rounded-sm">
			<Indicators />
		</Carousel>
	{/if}
</div>