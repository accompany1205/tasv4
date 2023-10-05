<style>
	:global(swiper-container) {
		--swiper-theme-color: #61ce70;
		--swiper-pagination-bottom: 8px;
		--swiper-pagination-padding: 32px;
		--swiper-pagination-bullet-width: 16px;
		--swiper-pagination-bullet-height: 16px;
	}
</style>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	import Slide from '$lib/components/swiper/Slide.svelte';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => (isInView = detail.inView);

	import type { Tutor } from '$lib/tutors.ts';
	import { flip } from 'svelte/animate';

	let _class = '';
	export { _class as class };
	export let tutor: Tutor;

	let vCard = false;
	let swiper: HTMLElement;
	const params = {
		pagination: true,

		effect: "slide",
		nested: true,
		loop: true,
		touchStartPreventDefault: false,
		touchMoveStopPropagation: false,
		preventClicks: false,
		// preventClicksPropagation: false,
		
	}
	onMount(()=>{
		Object.assign(swiper, params);
		setTimeout(() => {
			swiper.initialize();
			
		},
		500);

	})
</script>

<Card img="/" reverse="{vCard}" class="mx-auto mb-4 {_class}" padding="none">
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div use:inview="{options}" on:inview_change="{handleChange}" class="aspect-square ">
		<swiper-container bind:this={swiper} init="true">
			<Slide bind:isInView="{isInView}">
				<img
					slot="content"
					class="rounded-md"
					src="/tutors/{tutor.id}/hs.webp"
					alt=""
					width="512"
					height="512"
				/>
			</Slide>
			<Slide bind:isInView="{isInView}">
				<img
					slot="content"
					class="rounded-md"
					src="src/lib/assets/sketchup/sketchup_1.webp"
					alt=""
					width="512"
					height="512"
					loading="lazy"
				/>
			</Slide>
			<Slide bind:isInView="{isInView}">
				<img
					slot="content"
					class="rounded-md"
					src="/tutors/{tutor.id}/hs.webp"
					alt=""
					width="512"
					height="512"
					loading="lazy"
				/>
			</Slide>
		</swiper-container>
	</div>

	<div class="p-4 pt-2">
		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
			{tutor.name} • ${tutor.hourlyRate}/hr
		</h5>
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{tutor.title}</p>
		<Button
			class="duration-250 transform border-2 border-solid border-emerald-400 text-black transition-transform ease-in-out hover:bg-alabaster-50 active:bg-alabaster-50"
			href="https://www.tutorsandservices.com/{tutor.first}-{tutor.id}/"
		>
			Learn More <ArrowRightOutline class="ml-2 h-3.5 w-3.5 text-black" />
		</Button>
	</div>
</Card>
