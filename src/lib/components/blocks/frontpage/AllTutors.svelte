<script lang="ts">
	import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
	import TutorsHeadImage from '../common/TutorsHeadImage.svelte';
	import { Button } from 'flowbite-svelte';

	export let images = [{ alt: '', srcset: '' }];
	export let featuredTutors = [''];

	function handleButtonClick() {
		gtag('event', 'sketchup_form_clicked');
	}

	let featuredTutorsHero = [
		'1619',
		'2515',
		'2972',
		'12112',
		'12113',
		'18035',
		'18836',
		'20684',
		'22530',
		'24291',
		'12081',
		'12115',
		'2652',
	];
</script>

<section class="overflow-x-hidden bg-[#e8e8e8] dark:bg-gray-900">
	<div class="bg-nile-blue-900 py-3 sm:py-6">
		<!-- fluid-h1 -->
		<h1
			class="
      m-auto
      max-w-screen-xl
			px-4
			text-left
			font-bold
      leading-none
      tracking-tight
      text-white
			text-fc-[1.3rem_3.5cqw_2.75rem]"
		>
			Professional Drafting Services, 3D Modeling Services and Private Online Zoom Tutors
		</h1>
	</div>

	<div
		class="
			mx-auto
			grid
			max-w-screen-xl
			grid-rows-[auto_1fr]
			items-top
			gap-x-4
			px-3
			py-2
			sm:grid-cols-[minmax(100px,_1fr)_1fr]
			lg:gap-x-8
			m-6"
	>
		<div class="left-col mt-3">
			<ImageCarousel images="{images}" showLogo="{false}" />
		</div>

		<div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg micro:max-sm:text-lg">
			<div class="w-full max-w-md pb-6 @container">
				<div class="flex">
					<!-- <h2 class="mb-4 max-w-lg font-bold text-fc-[1.5rem_5cqw_8rem]">
						Don't Struggle Alone,&nbsp;Get Sketchup Help from a Pro.
					</h2> -->

					<div class="hidden lg:flex">
						<TutorsHeadImage
							featuredTutors="{featuredTutorsHero}"
							class="flex items-baseline flex-wrap"
						/>
					</div>
				</div>

				<p
					class="text-left font-normal text-gray-950 micro:max-unfolded:text-lg unfolded:text-xl"
				>
					We specialize in 3D modeling services, drafting services and 1-on-1 software
					training for architecture, gaming, industrial, mechanical and interior design.
				</p>
			</div>

			<GoogleRatings />

			<Button
				class="max-w-sm items-center bg-emerald-400 p-3 text-center text-3xl font-bold text-white hover:bg-emerald-300"
				href="/form?softwarePref=SketchUp"
				on:click="{handleButtonClick}"
			>
				Get Started Today
			</Button>
		</div>
	</div>
</section>
