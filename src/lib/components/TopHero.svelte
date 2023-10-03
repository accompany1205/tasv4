<script lang="ts">
	import SketchupLightboxGrid from '$lib/blocks/frontpage/SketchupLightboxGrid.svelte';
	import TutorSwipeBlock from './swiper/TutorSwipeBlock.svelte';
	import { tutors } from '$lib/tutors';
</script>

<section class="bg-[#e8e8e8] pb-8 dark:bg-gray-900">
	<div class="bg-nile-blue-900 py-8">
		<h1
			class="
            m-auto
			max-w-xs
            text-center
			text-2xl
			font-extrabold
            leading-none
            tracking-tight
            text-white
            sm:max-w-lg
            md:max-w-4xl
            md:text-5xl
            lg:max-w-6xl
            lg:text-6xl
           "
		>
			Online Sketchup Classes, Zoom Tutors & Professional Services
		</h1>
	</div>
	<div class="mx-auto mb-4 max-w-screen-xl px-0 py-2 text-center">
		<div class="grid grid-cols-1 lg:grid-cols-2">
			<div class=" sm:justify-center">
				<h2 class="mx-auto mb-0 max-w-sm text-xl font-black">
					Don't Struggle Alone, Get Sketchup Help from a Pro.
				</h2>
				<p
					class="mx-auto my-2 block max-w-md px-4 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-xl"
				>
					Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom.
					Tutors & services are available now. Call for a free consultation and demo.
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
				<TutorSwipeBlock tutors="{tutors.slice(0, 6)}" />
			</div>
			<SketchupLightboxGrid />
		</div>
	</div>
</section>
