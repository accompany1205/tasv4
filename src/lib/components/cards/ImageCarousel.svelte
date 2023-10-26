<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	export let images = [{ alt: '', src: '' }];

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	export let showLogo = false;

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div use:inview="{options}" on:inview_change="{handleChange}" class="max-w-7xl w-full h-full relative mb-14">
	{#if isInView}
		<Carousel images="{images}"   let:Indicators duration="4000" class="rounded-sm relative z-0 ">
			<Indicators class="translate-y-12 " let:selected activeClass="bg-alabaster-600" inactiveClass="bg-alabaster-300"/>
		</Carousel>
	{/if}

	{#if showLogo}
		<div class="absolute top-0 backdrop-blur-sm w-auto px-4 py-1 bg-white bg-opacity-50">
			<img src="/temp/SketchUp-logo_720_cropped.webp" alt="SketchUp Logo" width="250" class=""/>
		</div>
	{/if}
</div>
