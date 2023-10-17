<style>
	.fluid {
		font-size: clamp(1rem, 3.5vw, 3rem);
		white-space: nowrap;
	}
</style>

<script lang="ts">
	import SketchupLightboxGrid from '$lib/blocks/frontpage/SketchupLightboxGrid.svelte';
	import TutorSwipeBlock from './swiper/TutorSwipeBlock.svelte';
	import TutorCard from './TutorCard.svelte';
	import TutorCardV3 from './TutorCardV3.svelte';

	import { tutors } from '$lib/tutors';
</script>

<section class="overflow-x-hidden bg-[#e8e8e8]  dark:bg-gray-900">
	<div class="bg-bay-of-many-700 py-6">
		<h1
			class="
            fluid
            m-auto

			text-left
			px-4
            font-bold
            leading-none
            tracking-tight

			text-white
           "
		>
			Online Sketchup Classes, Zoom Tutors<br /> & Professional Services
		</h1>
	</div>
	<div class="mx-auto mb-4 max-w-screen-xl px-3 py-2 grid grid-rows-[auto_1fr] gap-4 lg:grid-cols-[3fr_2fr] lg:gap-8">
		<div class="left-col m-4">
			<div class="bg-pink-600 aspect-video max-h-96 mx-auto">
				PLACEHOLDER
			</div>
		</div>
		<div class="right-col grid grid-rows-[1fr_auto]">
			<div class="max-w-sm pb-6 mx-auto">
				<h2 class="my-4 max-w-sm text-xl font-bold">
					Don't Struggle Alone, Get Sketchup Help from a Pro.
				</h2>
				<p class="text-left text-lg font-normal text-gray-950 lg:text-xl"
				>
					Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom.
					Call for a free consultation and demo.
				</p>
				<p class="text-left text-lg font-normal text-gray-950 lg:text-xl"
				>
					We are a team of tutors and freelancers that are hireable on an as-needed basis
					for professional help with your projects.
				</p>
			</div>
			<button class="bg-emerald-400 p-3 text-white font-bold text-3xl mx-auto max-w-sm">
				Get Started Today
			</button>
		</div>
	</div>
	<div class="Tutors bg-bay-of-many-700 p-2 md:p-8">
		<h2 class="text-white text-3xl text-center m-auto mb-8 font-bold">
			Meet the Team
		</h2>
		<div class="m-auto flex w-full max-w-screen-2xl flex-wrap justify-center gap-6 overflow-x-hidden">
			{#each tutors.slice(0, 4) as tutor}
				<TutorCardV3 tutor="{tutor}" class=" md:max-w-sm flex-shrink mx-0" />
			{/each}
		</div>
	</div>
</section>
