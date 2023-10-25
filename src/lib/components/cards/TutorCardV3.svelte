<script lang="ts">
	import '@fontsource-variable/akshar';
	import ServiceTags from '../elements/ServiceTags.svelte';
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	import type { Tutor } from '$lib/tutors.ts';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

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
</script>

<div
	use:inview="{options}"
	on:inview_change="{handleChange}"
	class="grid flex-shrink grid-rows-[auto_1fr_auto] max-h-full overflow-clip rounded bg-white font-akshar shadow-lg {_class}"
>
	<div>
		<!-- Image -->
		<div class="block aspect-[21/9] w-full overflow-hidden bg-gray-200">
			{#if isInView}
				<Lightbox>
					<img
						src="/tutors/{tutor.id}/img/1.webp"
						alt="Matthew W"
						class="min-h-full min-w-full object-cover object-center"
						width="512"
						height="230"
						decoding="async"
						loading="lazy"
					/>
				</Lightbox>
			{/if}
		</div>
		<!-- Tutor Info -->
		<div class="flex overflow-x-clip">
			<!-- Headshot -->
			<div class="-ml-4 -mt-10 flex-shrink-0">
				<img
					src="/tutors/{tutor.id}/hs.webp"
					alt="Matthew W"
					class="h-28 w-28 flex-shrink-0 rounded-full border-2 border-emerald-400 p-1"
				/>
			</div>
			<!-- Name -->
			<div class="p-2">
				<div class="text-4xl font-bold">{tutor.name}</div>
				{#if tutor?.ratingCount ?? 0 >= 5}
					<span class="font-medium text-yellow-300">{tutor?.ratingScore?.toFixed(1)}⭐ {tutor.ratingCount} Reviews</span>
				{:else}
					<span class="font-medium text-yellow-300">New</span>
				{/if}
				<span class="font-medium text-gray-500">• Expert • ${tutor.hourlyRate}/hr</span>
			</div>
		</div>

		<!-- Software Tags -->
		<div class="mx-3 py-1">
			<ServiceTags keywords={tutor?.software?.slice(0, 8)} />
		</div>
	</div>

	<div>
		<!-- Title -->
		<div class="mx-3 mb-1 text-left text-xl font-medium">{tutor?.title}</div>

		<!-- Services -->
		{#if tutor?.services?.length ?? 0 > 0}
			<div class="mx-2 mb-2 p-1">
				<div class="font-semibold">Services I Provide:</div>
				<ul class="mt-2 list-disc pl-5 text-gray-500">
					{#each tutor?.services?.slice(0, 3) ?? [] as service}
						<li>{service}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Buttons -->
	<div class="m-2 flex justify-between p-1">
		<button class="text-md mx-4 rounded bg-alabaster-300 p-2 font-medium text-white hover:bg-alabaster-200"
			>Learn More About {tutor.first}</button
		>
		<button class="text-md mx-4 rounded bg-emerald-400 p-2 font-medium text-white hover:bg-emerald-300"
			>Book A Free Consultation</button
		>
	</div>
</div>
