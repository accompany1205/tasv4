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

<div class="swiper block bg-bay-of-many-700 overflow-hidden pt-8 pb-24 px-0 ">
    <h2 class="text-white sm:fluid-h1 text-2xl sm:text-5xl text-center m-auto mb-8 font-bold">
        Our SketchUp Tutors & Freelancers
    </h2>
	<div class="h-[800px] max-w-[1920px] mx-auto" style="container-type: size;">
        <swiper-container bind:this="{swiper}" init="false" navigation="true">
            {#each tutors as tutor}
                <swiper-slide>
                    <div class="mx-4 w-auto flex-shrink-0 h-[100cqh]" >
                        <TutorCardV3 tutor="{tutor}" class="min-h-[600px] h-full max-w-sm mx-auto self-stretch" />
                    </div>
                </swiper-slide>
            {/each}
        </swiper-container>
    </div>
</div>
