<script lang="ts">
	import { onMount } from 'svelte';

	const params = {
		slidesPerView: "auto",
		spaceBetween: "12",
		centeredSlides: true,
		initialSlide: 2,
		// effect: 'slides',
		loop: false,
		touchStartPreventDefault: false,
		pagination: {
			enabled:true,
			clickable:true
		},

		effect: 'coverflow',
		coverflowEffect: {
			rotate: 20,
			slideShadows: true,
			depth: 150,
			stretch: 5,
			modifier: 0.5
			// scale: 0.95,
		},

		// breakpoints: {
		// 	0: {
		// 		slidesPerView: 1,
		// 		spaceBetween: 8,
		// 	},
		// 	400: {
		// 		slidesPerView: "auto",
		// 		spaceBetween: "12",
		// 	},
		// 	1200: {
		// 		slidesPerView: 3.25,
		// 		spaceBetween: 12,
		// 	},
		// 	1700: {
		// 		slidesPerView: 3.25,
		// 		spaceBetween: 12,
		// 	},
		// },
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
	}
	/* .bshadow {
		border-right: solid;
		border-top: 0;
		border-bottom: 0;
  		border-image-slice: 1;
  		border-width: 50px;
		border-image-source: linear-gradient(to right,  black -20px,  transparent 2px);
		box-sizing: content-box;
	} */
</style>


<div class="swiper block overflow-hidden bg-nile-blue-900 px-0 pb-16 pt-8 ">
	<h2 class="
		m-auto
		mb-0
		max-w-screen-xl
		border-b-4
		border-emerald-400
		px-4
		pb-4
		text-2xl
		font-bold
		text-white
		sm:text-5xl
		sm:fluid-h1"
	>
		Our SketchUp Tutors & Freelancers
	</h2>

	<div
		class="py-12 mx-auto h-[700px] max-w-full xl:max-w-screen-xl"
		style="container-type: size; "
	>
		<swiper-container bind:this="{swiper}" init="false"  >
            <slot/>

		</swiper-container>
	</div>
</div>

<!-- <swiper-slide class="">
    <div class="m-auto h-[100cqh] w-96 max-w-2xl flex-shrink-0 p-2">
    </div>
</swiper-slide> -->

