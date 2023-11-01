<script lang="ts">
	import { onMount } from 'svelte';
	import { getTutors, type Tutor } from '$lib/tutors';
	import TutorCard from '$lib/components/cards/TutorCard.svelte';
	import TutorCardV3 from '$lib/components/cards/TutorCardV3.svelte';

	export let tutors: string[];
	let featuredTutors = getTutors(tutors);

	const params = {
		slidesPerView: 1,
		spaceBetween: 300,
		effect: 'slides',
		loop: false,
		autoplay: {
			enabled:true,
			delay:3000,
			pauseOnMouseEnter:true
		},
		
		touchStartPreventDefault: false,
		pagination: {enabled:true,
					clickable:true
					},

		

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
				slidesPerView: 3,
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

<style>
	:global(swiper-container) {
		--swiper-pagination-padding: 48px;
		--swiper-pagination-bullet-inactive-color: #ffffff;
		--swiper-pagination-bullet-inactive-opacity: 0.5;
		--swiper-scrollbar-drag-bg-color: #61ce70;

	}
</style>


<div class="swiper block overflow-hidden bg-nile-blue-900 px-0 pb-16 pt-8 ">
	<h2
		class="m-auto mb-8 max-w-screen-xl border-b-4 border-emerald-400 px-4 pb-4 text-2xl font-bold text-white sm:text-5xl sm:fluid-h1"
	>
		Our SketchUp Tutors & Freelancers
	</h2>

	<div
		class="m-auto mx-auto h-[625px] max-w-full xl:max-w-screen-xl"
		style="container-type: size;"
	>
		<swiper-container bind:this="{swiper}" init="false">
			{#each featuredTutors as tutor}
				<swiper-slide class="">
					<div class="m-auto h-[100cqh] w-96 max-w-2xl flex-shrink-0 p-2">
						<TutorCardV3 tutor="{tutor}" class="mx-auto h-full self-stretch" />
					</div>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>
