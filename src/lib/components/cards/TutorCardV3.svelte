<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import '@fontsource-variable/akshar';
	import ServiceTags from '../elements/ServiceTags.svelte';
	import type { Tutor } from '$lib/tutors.ts';
	import { featured_images, headshots } from '$lib/tutors';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import { Button } from 'flowbite-svelte';
	import PortfolioThumbnail from '../blocks/common/PortfolioThumbnail.svelte';

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

	let _class = '';
	export { _class as class };
	export let tutor: Tutor;

	let openWorkGallery: boolean = false;

	const dispatch = createEventDispatcher();

	function handleConsultationClick() {
		dispatch('consultationClick', { tutorId: tutor.id });
	}
</script>

<div
	use:inview="{options}"
	on:inview_change="{handleChange}"
	class="grid max-h-full flex-shrink grid-rows-[1fr_auto] overflow-clip rounded bg-white font-akshar shadow-lg {_class}"
>
	<div>
		<!-- Image -->
		{#if isInView}
			<PortfolioThumbnail
				thumbnail="{featured_images[tutor.id]}"
				featuredImages="{featured_images}"
				bind:openWorkGallery="{openWorkGallery}"
			/>
		{/if}

		<!-- Tutor Info -->
		<div class="flex overflow-x-clip">
			<!-- Headshot -->
			<div class="-ml-4 -mt-10 micro:max-[480px]:-mt-20 flex-shrink-0 z-10">
				<img
					srcset="{headshots[tutor.id]}"
					alt="Matthew W"
					class="h-28 w-28 flex-shrink-0 rounded-full border-2 border-emerald-400 p-1"
				/>
			</div>
			<!-- Name -->
			<div
				class="flex flex-1 items-center justify-center gap-2 mx-3 ml-0 sm:ml-2 micro:max-[480px]:mt-1"
			>
				<!-- <div class="text-4xl font-bold shrink break-words">Shanthihanssd S</div> -->
				<div class="text-4xl flex-1 micro:max-[480px]:text-2xl font-bold inline-block"
					>{tutor.name}</div
				>
				<!-- {#if tutor?.ratingCount ?? 0 >= 5}
					<span class="font-medium text-yellow-300"
						>{tutor?.ratingScore?.toFixed(1)}⭐ {tutor.ratingCount} Reviews</span
					>
				{:else}
					<span class="font-medium text-yellow-300">New</span>
				{/if} -->
				<span class="font-medium text-gray-500 w-11">${tutor.hourlyRate}/hr</span>
			</div>
		</div>

		<div class="h-auto max-h-[330px] overflow-y-auto">
			<!-- Title -->
			<div class="mx-3 my-2 text-left text-xl font-medium">{tutor?.title}</div>

			<!-- Software Tags -->
			<div class="mx-3 py-1">
				<span class="font-semibold">Tutoring:</span>
				<ServiceTags keywords="{tutor?.software?.slice(0, 8)}" />
			</div>

			<div>
				<!-- Services -->
				{#if tutor?.services?.length ?? 0 > 0}
					<div class="mx-2 mb-2 p-1">
						<div class="font-semibold">Services:</div>
						<div class=" text-gray-500">
							<ServiceTags keywords="{tutor?.services?.slice(0, 3)}" />
							<!-- {#each tutor?.services?.slice(0, 3) ?? [] as service}
              <li>{service}</li>
            {/each} -->
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<!-- Buttons -->
	<div class="m-2 flex justify-between p-1 h-min">
		<!-- <Button
			class="text-md mx-4 rounded bg-alabaster-300 p-2 font-medium text-white hover:bg-alabaster-200"
			href="https://www.tutorsandservices.com/{tutor.first}-{tutor.id}/"
			>See My work
		</Button> -->
		<Button
			class="text-sm md:text-base mx-4 rounded bg-alabaster-300 p-2 font-medium text-white hover:bg-alabaster-200 outline-none !ring-0"
			on:click="{() => (openWorkGallery = true)}"
			>See My work
		</Button>

		<Button
			class="text-sm md:text-base mx-4 rounded bg-emerald-400 p-2 font-medium text-white hover:bg-emerald-300 outline-none !ring-0"
			on:click="{handleConsultationClick}"
			>Free Consultation
		</Button>
	</div>
</div>
