<script lang="ts">
	import { onMount } from 'svelte';
	import type { Tutor } from '$lib/tutors.ts';
	import TutorCard from '$lib/components/TutorCard.svelte';
	export let tutors: Tutor[];
	const params = {
		slidesPerView:2,
		effect: "slide",
		loop: true,
		touchStartPreventDefault:false,
		breakpoints: {
			1: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 40,

			},
			600: {
				slidesPerView: 2,
				spaceBetween: 60,

			},
			1440: {
				slidesPerVew: 3,
				spaceBetween: 200,

			},
			2000: {
				slidesPerVew: 4,
				spaceBetween: 200,
			}
		}
	}
	const autoplay = '{delay:3000}';
	const coverflow = '{depth:32, rotate:0, slideShows:false, scale:0.5}';
	let swiper: HTMLElement;
	onMount(() => {
		Object.assign(swiper, params);
		swiper.initialize();
	});
</script>

<div class="swiper mb-8 h-[650px] overflow-hidden block">
	<swiper-container bind:this={swiper} init="false">
		{#each tutors as tutor}
			<swiper-slide>
				<div class="mx-0 w-auto flex-shrink-0">
					<TutorCard tutor="{tutor}" class="m-auto flex-shrink-0" />
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
