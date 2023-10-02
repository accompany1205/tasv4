<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import type { Tutor } from '$lib/tutors.ts';
	export let tutor: Tutor;

	let vCard = false;
</script>
  
<div>
	<Card img='/tutors/{tutor.id}/hs.webp' reverse={vCard} class="mb-4">

		<swiper-container>
			<swiper-slide><img src='/tutors/{tutor.id}/hs.webp' alt=""></swiper-slide>
			<swiper-slide><img src='/tutors/{tutor.id}/hs.webp' alt=""></swiper-slide>
			<swiper-slide><img src='/tutors/{tutor.id}/hs.webp' alt=""></swiper-slide>
		</swiper-container>

		<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{tutor.name} • ${tutor.hourlyRate}/hr</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{tutor.title}</p>
		<Button 
			class="transform border-2 border-solid border-emerald-400 text-black transition-transform duration-250 ease-in-out active:bg-alabaster-50 hover:bg-alabaster-50"
			href="https://www.tutorsandservices.com/{tutor.first}-{tutor.id}/"
			>
			
			Learn More <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-black" />
		</Button>
	</Card>
</div>