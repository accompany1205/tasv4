<style>
	swiper-container {
		--swiper-theme-color: #61ce70;
	}
</style>

<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import type { Tutor } from '$lib/tutors.ts';
	export let tutor: Tutor;

	let vCard = false;
</script>

<div>
	<Card img="/" reverse="{vCard}" class="mb-4">
		<swiper-container pagination="true" pagination-dynamic-bullets="true">
			<swiper-slide><img src="/tutors/{tutor.id}/hs.webp" alt="" /></swiper-slide>
			<swiper-slide><img src="src/lib/assets/sketchup/sketchup_1.webp" alt="" /></swiper-slide
			>
			<swiper-slide><img src="/tutors/{tutor.id}/hs.webp" alt="" /></swiper-slide>
		</swiper-container>

		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			>{tutor.name} • ${tutor.hourlyRate}/hr</h5
		>
		<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{tutor.title}</p>
		<Button
			class="duration-250 transform border-2 border-solid border-emerald-400 text-black transition-transform ease-in-out hover:bg-alabaster-50 active:bg-alabaster-50"
			href="https://www.tutorsandservices.com/{tutor.first}-{tutor.id}/"
		>
			Learn More <ArrowRightOutline class="ml-2 h-3.5 w-3.5 text-black" />
		</Button>
	</Card>
</div>
