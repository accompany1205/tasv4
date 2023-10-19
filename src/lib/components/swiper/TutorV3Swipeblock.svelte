<script lang="ts">
	import { onMount } from 'svelte';
	import type { Tutor } from '$lib/tutors.ts';
	import TutorCard from '$lib/components/TutorCard.svelte';
	import TutorCardV3 from '../TutorCardV3.svelte';
	export let tutors: Tutor[];
	const params = {
		slidesPerView: 1,
		spaceBetween: 300,
		effect: 'slide',
		loop: false,
		touchStartPreventDefault: false,
		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
			1700: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
		},
	};
	const autoplay = '{delay:3000}';
	const coverflow = '{depth:32, rotate:0, slideShows:false, scale:0.5}';
	let swiper: HTMLElement;
	onMount(() => {
		Object.assign(swiper, params);
		// @ts-ignore
		swiper.initialize();
	});
</script>

<div class="swiper block overflow-hidden bg-nile-blue-900 px-0 pb-24 pt-8">
	<h2 class="border-b-4 border-emerald-400 pb-4 px-4 mb-8 text-2xl font-bold text-white sm:text-5xl sm:fluid-h1">
		Our SketchUp Tutors & Freelancers
	</h2>
	<div class="mx-auto h-[800px] max-w-[1920px]" style="container-type: size;">
		<swiper-container bind:this="{swiper}" init="false" navigation="true">
			{#each tutors as tutor}
				<swiper-slide>
					<div class="mx-4 h-[100cqh] w-auto flex-shrink-0">
						<TutorCardV3
							tutor="{tutor}"
							class="mx-auto h-full min-h-[600px] max-w-sm self-stretch"
						/>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>
