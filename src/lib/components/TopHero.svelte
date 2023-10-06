<script lang="ts">
	import SketchupLightboxGrid from '$lib/blocks/frontpage/SketchupLightboxGrid.svelte';
	import TutorSwipeBlock from './swiper/TutorSwipeBlock.svelte';
	import { tutors } from '$lib/tutors';
</script>

<section class="bg-[#e8e8e8] pb-8 dark:bg-gray-900 overflow-x-hidden">
	<div class="bg-nile-blue-900 py-4 md:py-8">
		<h1
			class="
            m-auto

            text-center

			font-extrabold
            leading-none
            tracking-tight
            text-white


			fluid
           "
		>
			Online Sketchup Classes, Zoom Tutors<br> & Professional Services
		</h1>
	</div>
	<div class="mx-auto mb-4 max-w-screen-xl px-0 py-2 text-center">
		<div class="grid grid-cols-1 lg:grid-cols-1">
			<div class=" sm:justify-center">
				<h2 class="mx-auto my-4 max-w-sm text-xl font-black">
					Don't Struggle Alone, Get Sketchup Help from a Pro.
				</h2>
				<TutorSwipeBlock tutors="{tutors.slice(0, 6)}" />
				<p
					class="mx-auto my-4 block max-w-md px-4 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-xl"
				>
					Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom.
					Call for a free consultation and demo.
				</p>
				<a
					href="https://www.jotform.com/221775033335048"
					class="mb-4 inline-flex transform items-center justify-center rounded-lg bg-[#61ce70] px-5 py-3 text-center text-base font-medium text-white transition-transform duration-500 ease-in-out hover:scale-105 hover:bg-[#69e07a]"
				>
					Get started
					<svg
						class="ml-2 h-3.5 w-3.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						></path>
					</svg>
				</a>
			</div>
			<SketchupLightboxGrid />
		</div>
	</div>
</section>

<style>
	.fluid {
		font-size: clamp(1rem, 4vw, 90rem);
		/* white-space: nowrap; */
	}
</style>
