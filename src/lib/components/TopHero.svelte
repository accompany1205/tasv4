<script lang="ts">
	import SketchupLightboxGrid from '$lib/blocks/frontpage/SketchupLightboxGrid.svelte';
	import TutorSwipeBlock from './swiper/TutorSwipeBlock.svelte';
	import TutorV3Swipeblock from './swiper/TutorV3Swipeblock.svelte';
	import GoogleRatings from './GoogleRatings.svelte';
	import TutorCard from './TutorCard.svelte';
	import TutorCardV3 from './TutorCardV3.svelte';
	import ImageCarousel from './ImageCarousel.svelte';

	import { tutors } from '$lib/tutors';

	export let featuredTutors = ['1619', '2515', '2972'];
	let z = 3;

</script>

<section class="overflow-x-hidden bg-[#e8e8e8] dark:bg-gray-900">
	<div class="bg-nile-blue-900 py-3 sm:py-6">
		<!-- fluid-h1 -->
		<h1
			class="
            m-auto
            px-4

			text-left
			font-bold
            leading-none
            tracking-tight
            text-white

			text-fc-[1.3rem_3.5cqw_2.75rem]
           "
		>
			Online&nbsp;Sketchup&nbsp;Classes, Zoom&nbsp;Tutors<wbr /> &&nbsp;Professional&nbsp;Services
		</h1>
	</div>

	<div
		class="
			mx-auto
			items-center
			grid
			max-w-screen-xl
			grid-rows-[auto_1fr]
			gap-4
			px-3
			py-2
			sm:grid-cols-[minmax(100px,_1fr)_1fr]
			lg:gap-8"
	>
		<div class="left-col mt-3">
			<ImageCarousel/>
		</div>


		<div class="right-col grid grid-rows-[1fr_auto] shrink-0 border-2 border-emerald-400 rounded-lg micro:max-sm:text-lg">
			<div class="@container w-full max-w-md pb-6">


				<div class="flex">
					<h2 class="max-w-lg text-fc-[1.5rem_5cqw_8rem] font-bold mb-4">
						Don't Struggle Alone,&nbsp;Get Sketchup Help from a Pro.
					</h2>

					<div class="flex">
						{#each featuredTutors as tutorID, index}
							<div class="flex-shrink-0 -mx-4">
								<img
									src="/tutors/{tutorID}/hs.webp"
									alt="Featured Tutor"
									class="h-20 w-20 flex-shrink-0 rounded-full border-2 border-emerald-400 p-1"
								/>
							</div>
						{/each}
					</div>

				</div>

				<p class="text-left micro:max-unfolded:text-lg font-normal text-gray-950 unfolded:text-xl">
					Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom.
					Call for a free consultation and demo.
				</p>
				<p class="text-left micro:max-unfolded:text-lg font-normal text-gray-950 unfolded:text-xl">
					We are a team of tutors and freelancers that are hireable on an as-needed basis
					for professional help with your projects.
				</p>
			</div>

			<GoogleRatings />

			<button class="max-w-sm bg-emerald-400 p-3 text-3xl font-bold text-center items-center text-white hover:bg-emerald-300">
				Get Started Today
			</button>
		</div>

	</div>
</section>
