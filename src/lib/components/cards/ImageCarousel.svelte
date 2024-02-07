<script lang="ts">
	import { Carousel, Indicator, Button } from 'flowbite-svelte';
	import { AngleRightSolid, AngleLeftSolid } from 'flowbite-svelte-icons';
	import type { HTMLImgAttributes } from 'svelte/elements';
	interface imageAttributes {
		alt?: string;
		srcset?: string;
		src?: string;
	}
	export let images: HTMLImgAttributes[];

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import sketchup_logo from '$lib/assets/logos/SketchUp-logo_720_cropped.webp';

	export let showLogo = false;
	export let indicatorInside: boolean = false;

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div
	use:inview="{options}"
	on:inview_change="{handleChange}"
	class="max-w-7xl w-full aspect-video relative"
>
	{#if isInView}
		<Carousel
			images="{images}"
			let:Indicators
			let:Controls
			duration="{7000}"
			class="rounded-sm relative z-0 h-auto sm:h-auto md:h-auto xl:h-auto 2xl:h-auto aspect-video"
			transition="{null}"
		>
			<Indicators
				class="translate-y-12 bg-white/30 px-4 rounded-full {indicatorInside
					? 'absolute bottom-14'
					: ''}"
				let:selected
				let:index
				activeClass="bg-emerald-400"
				inactiveClass="bg-alabaster-300"
			>
				<Indicator>
					<span class="relative flex h-3 w-3">
						<span
							class="{selected
								? 'animate-ping bg-nile-blue-500'
								: ''} absolute inline-flex h-full w-full rounded-full bg-nile-blue-500 opacity-75"
						></span>
						<span
							class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 {selected
								? 'bg-nile-blue-500'
								: ''}"
						></span>
					</span>
				</Indicator>
			</Indicators>
			<Controls class="text-emerald-500" let:changeSlide>
				<Button
					pill
					class="p-2 absolute top-1/2 -translate-y-1/2 start-4 font-bold bg-emerald-400 hover:bg-emerald-500"
					on:click="{() => changeSlide(false)}"><AngleLeftSolid /></Button
				>
				<Button
					pill
					class="p-2 absolute top-1/2 -translate-y-1/2 end-4 font-bold bg-emerald-400 hover:bg-emerald-500"
					on:click="{() => changeSlide(true)}"><AngleRightSolid /></Button
				>
			</Controls>
		</Carousel>
	{/if}

	{#if showLogo}
		<div class="absolute top-0 backdrop-blur-sm w-auto px-4 py-1 bg-white bg-opacity-50">
			<img src="{sketchup_logo}" alt="SketchUp Logo" width="250" height="54" class="" />
		</div>
	{/if}
</div>
