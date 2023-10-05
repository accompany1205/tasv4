<style>
	swiper-container {
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
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
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

	let _class = '';
	export { _class as class };
	export let tutor: Tutor;

	let vCard = false;

	const autoplay = '{delay:1500}';
	let slider: HTMLElement;
	function dohickey(e: CustomEvent) {
		if (typeof e.detail == 'number') {
			return;
		} else {
			// WARN: Incredibly Brittle
			const box = Array.from(e.detail[0]?.slides[e.detail[0].activeIndex].children).filter(
				(e) => {
					// @ts-ignore
					return e.classList.contains('svelte-lightbox-thumbnail');
				},
			);
			// @ts-ignore
			box[0]?.click();
		}
	}
</script>

<Card img="/" reverse="{vCard}" class="mx-auto mb-4 {_class}" padding="none">
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
	<div use:inview={options} on:inview_change={handleChange}>
			<swiper-container
				pagination="true"
				effect="flip"
				pagination-clickable="true"
				class=" mb-0"
				nested="true"
				touch-start-prevent-default="false"
				touch-move-stop-propagation="false"
				prevent-clicks="false"
				prevent-clicks-propagation="false"
				edge-swipe-detection="true"
				on:click="{dohickey}"
			>
				<Slide bind:isInView>
					<img slot="content" class="rounded-md" src="/tutors/{tutor.id}/hs.webp" alt="" />
				</Slide>
				<Slide bind:isInView>
					<img slot="content" class="rounded-md" src="src/lib/assets/sketchup/sketchup_1.webp" alt="" />
				</Slide>
				<Slide bind:isInView>
					<img slot="content" class="rounded-md" src="/tutors/{tutor.id}/hs.webp" alt="" />
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
