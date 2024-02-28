<script lang="ts">
	import { onMount } from 'svelte';

    import TutorCard from '$lib/components/services-template/TutorCard.svelte';
	import type { Tutor } from '$lib/components/backend/stores/tutorStore';


	import { AngleRightSolid, AngleLeftSolid } from 'flowbite-svelte-icons';
	import type { SwiperContainer } from 'swiper/element';
	import FormModal from '../blocks/FormModal.svelte';

	export let tutors:Tutor[] = [];
	console.log("Tutors", tutors);
	let openForm = false;

	const params = {
		slidesPerView: 1,
		spaceBetween: 300,
		effect: 'slides',
		loop: true,

		autoplay: {
			enabled: true,
			delay: 3000,
			pauseOnMouseEnter: true,
			disableOnInteraction: true,
		},

		touchStartPreventDefault: false,
		pagination: { enabled: true, clickable: true, dynamicBullets: true },

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
	let swiper: SwiperContainer;
	let swiperNextElem: HTMLElement;
	let swiperPrevElem: HTMLElement;
	onMount(() => {
		Object.assign(swiper, params);
		// @ts-ignore
		swiper.initialize();

		swiperNextElem.addEventListener('click', () => {
			swiper.swiper.slideNext();
		});
		swiperPrevElem.addEventListener('click', () => {
			swiper.swiper.slidePrev();
		});
	});

    function onConsultationClick(event: { detail: { tutorId: any; }; }) {
		console.log("hello");
        const tutorId = event.detail.tutorId;
		openForm = true;
    }

</script>

<style>
	:global(swiper-container) {
		--swiper-pagination-padding: 48px;
		--swiper-pagination-bullet-inactive-color: #ffffff;
		--swiper-pagination-bullet-inactive-opacity: 0.5;
		--swiper-scrollbar-drag-bg-color: #61ce70;
	}
</style>

<div class="swiper block overflow-hidden bg-nile-blue-900 px-0 pb-16 pt-8">
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
			{#each tutors as tutor}
				<swiper-slide class="">
					<div class="m-auto h-[100cqh] w-96 max-w-2xl flex-shrink-0 p-2">
						<TutorCard tutor={tutor} class="mx-auto h-full self-stretch" on:consultationClick={onConsultationClick}/>
					</div>
				</swiper-slide>
			{/each}
		</swiper-container> 

		<div class="block">
			<div
				bind:this="{swiperPrevElem}"
				class="absolute left-2 -bottom-11 xl:inset-y-0 xl:-left-3 lg:left-16 z-50 flex items-center justify-center"
			>
				<span
					class="p-1 xl:p-2 font-base xl:font-bold bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer rounded"
				>
					<AngleLeftSolid class="outline-none hidden xl:block" />
					<div class="block xl:hidden">Prev Tutor</div>
				</span>
			</div>
			<div
				bind:this="{swiperNextElem}"
				class="absolute right-2 -bottom-11 xl:inset-y-0 z-50 xl:-right-3 lg:right-16 flex items-center justify-center"
			>
				<span
					class="p-1 xl:p-2 font-base xl:font-bold bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer rounded"
				>
					<AngleRightSolid class="outline-none hidden xl:block" />
					<div class="block xl:hidden">Next Tutor</div>
				</span>
			</div>
		</div>
	</div>
</div>

<FormModal showBtn={false} clickOutsideModal={openForm}/>