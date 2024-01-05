<script lang="ts">
	import { onMount } from 'svelte';
	import type { SwiperContainer } from 'swiper/element';
	import { AngleRightSolid, AngleLeftSolid } from 'flowbite-svelte-icons';

	let swiper: SwiperContainer;
	let swiperNextElem: HTMLElement;
	let swiperPrevElem: HTMLElement;
	let carouselPagination: HTMLElement;

	function renderCarouselPaginationBullets(swiper, current, total) {
		// console.log(
		// 	'swiper: ',
		// 	swiper,
		// 	' activeIndex: ',
		// 	swiper.activeIndex,
		// 	' realIndex: ',
		// 	swiper.realIndex,
		// 	' current: ',
		// 	current,
		// 	' total: ',
		// 	total,
		// );
		let bullets = '';

		for (let index = 0; index < total; index++) {
			bullets += `<span class='relative flex h-4 w-4 cursor-pointer'>
				<span
					class="${
						index === swiper.realIndex ? 'animate-ping bg-nile-blue-500' : ''
					} absolute inline-flex h-full w-full rounded-full bg-nile-blue-500 opacity-75"
				></span>
				<span
          data-slide="${index}"
					class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ${
						index === swiper.realIndex ? 'bg-nile-blue-500' : ''
					}"
				></span>
			</span>`;
		}

		return `<div class='max-w-max bg-white/80 p-2 rounded-full flex items-center justify-center gap-3'>
				${bullets}
			</div>`;
	}

	const params = {
		slidesPerView: 1,
		// loopAddBlankSlides: 3,
		// slidesPerGroup: 1,
		spaceBetween: 30,
		effect: 'slide',
		// effect: 'coverflow',
		// coverflowEffect: {
		// 	rotate: 50,
		// 	slideShadows: true,
		// },
		loop: true,
		centeredSlides: true,

		autoplay: {
			enabled: true,
			delay: 3000,
			pauseOnMouseEnter: true,
			disableOnInteraction: true,
		},

		breakpoints: {
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 45,
			},
			1700: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
		},
	};

	onMount(() => {
		Object.assign(swiper, params);
		Object.assign(swiper, {
			pagination: {
				enabled: true,
				clickable: true,
				type: 'custom',
				el: carouselPagination,
				renderCustom: renderCarouselPaginationBullets,
			},
		});
		// @ts-ignore
		swiper.initialize();

		swiperNextElem.addEventListener('click', () => {
			swiper.swiper.slideNext();
		});
		swiperPrevElem.addEventListener('click', () => {
			swiper.swiper.slidePrev();
		});

		carouselPagination.addEventListener('click', function (e) {
			const { slide } = e.target.dataset;
			console.log('slide: ', slide);

			if (slide) {
				swiper.swiper.slideToLoop(slide);
			}
		});
	});
</script>

<!-- <div class=""> -->
<swiper-container bind:this="{swiper}" init="false">
	<slot />
</swiper-container>

<div class="hidden lg:flex lg:items-center lg:justify-center" bind:this="{carouselPagination}"
></div>
<!-- </div> -->

<div class="hidden xl:block">
	<div
		bind:this="{swiperPrevElem}"
		class="absolute inset-y-0 -left-3 z-50 flex items-center justify-center"
	>
		<span
			class="p-2 font-bold bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer rounded"
			><AngleLeftSolid class="outline-none" /></span
		>
	</div>
	<div
		bind:this="{swiperNextElem}"
		class="absolute inset-y-0 z-50 -right-3 flex items-center justify-center"
	>
		<span
			class="p-2 font-bold bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer rounded"
			><AngleRightSolid class="outline-none" /></span
		>
	</div>
</div>
