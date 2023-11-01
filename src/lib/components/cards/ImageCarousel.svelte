<script lang="ts">
	import { Carousel } from 'flowbite-svelte';
	export let images = [{ alt: '', srcset: '' }];

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import sketchup_logo from "$lib/assets/logos/SketchUp-logo_720_cropped.webp?w=400";

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
		<Carousel images="{images}"   let:Indicators duration="{7000}" class="rounded-sm relative z-0 " transition={null}>
			<Indicators class="translate-y-12 " let:selected activeClass="bg-emerald-400" inactiveClass="bg-alabaster-300"/>
		</Carousel>
	{/if}

	{#if showLogo}
		<div class="absolute top-0 backdrop-blur-sm w-auto px-4 py-1 bg-white bg-opacity-50">
			<img src="{sketchup_logo}" alt="SketchUp Logo" width="250" height="54" class="" />
		</div>
	{/if}
</div>
