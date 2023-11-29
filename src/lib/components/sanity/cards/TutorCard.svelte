<script lang="ts">
	import type TutorData from "$lib/schemas/TutorData"
	import type FormLink from "$lib/schemas/FormLink";
	import ActiveTutor from "$lib/stores/TutorCardModal_ActiveTutor";
	import FormLinkButton from "$sanity/elements/FormLinkButton.svelte";

	import '@fontsource-variable/akshar';
	import ServiceTags from '$lib/components/elements/ServiceTags.svelte';
	import { Lightbox } from 'svelte-lightbox';
    import {AssetRefToImageURL} from '$sanity/helpers';
	
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
	export let tutor: TutorData;
	export let formLink: FormLink;

	const hasGallery = tutor.defaultCard?.gallery?.length > 0
	
	// let dialog: TutorCardModal;
	const openDialog = () => {
		if (hasGallery) {
			ActiveTutor.set({name: tutor.shortName, images: tutor.defaultCard.gallery});
		}
	}
</script>

<div
	use:inview="{options}"
	on:inview_change="{handleChange}"
	class="grid max-h-full h-full flex-shrink grid-rows-[auto_1fr_auto] overflow-clip rounded bg-white font-akshar shadow-lg {_class}"
>
	<div>
		<!-- Image -->
		<div class="block aspect-[21/9] w-full overflow-hidden bg-gray-200">
			{#if isInView}
				{#if hasGallery}
					<!-- svelte-ignore a11y-click-events-have-key-events a11y-interactive-supports-focus -->
					<picture on:click="{openDialog}" role="button">
						<img
							src="{AssetRefToImageURL(tutor.defaultCard.coverImage.asset._ref)}"
							alt="{tutor.defaultCard.coverImage.caption ?? "cover image"}"
							class="min-h-full min-w-full object-cover object-center"
							width="512"
							height="230"
							decoding="async"
							loading="lazy"
						/>
					</picture>
				{:else}
					<Lightbox>
						<picture>
							<img
								src="{AssetRefToImageURL(tutor.defaultCard.coverImage.asset._ref)}"
								alt="{tutor.defaultCard.coverImage.caption ?? "cover image"}"
								class="min-h-full min-w-full object-cover object-center"
								width="512"
								height="230"
								decoding="async"
								loading="lazy"
							/>
						</picture>
					</Lightbox>
				{/if}
			{/if}
		</div>
		<!-- Tutor Info -->
		<div class="flex overflow-x-clip">
			<!-- Headshot -->
			<div class="-ml-4 -mt-10 flex-shrink-0">
				<img
					src="{AssetRefToImageURL(tutor.headshot.asset._ref)}"
					alt="{tutor.longName}"
					class="h-28 w-28 flex-shrink-0 rounded-full border-2 border-emerald-400 p-1 object-contain object-center"
				/>
			</div>
			<!-- Name -->
			<div class="p-2">
				<div class="text-4xl font-bold">{tutor.longName}</div>
				<!-- {#if tutor?.ratingCount ?? 0 >= 5}
					<span class="font-medium text-yellow-300"
						>{tutor?.ratingScore?.toFixed(1)}⭐ {tutor.ratingCount} Reviews</span
					>
				{:else}
					<span class="font-medium text-yellow-300">New</span>
				{/if} -->
				<span class="font-medium text-gray-500">• Expert • ${tutor.rate}/hr</span>
			</div>
		</div>

		<!-- Software Tags -->
		<div class="mx-3 py-1">
			<ServiceTags keywords="{tutor.defaultCard.featuredTags.slice(0, 8)}" />
		</div>
	</div>

	<div>
		<!-- Title -->
		<div class="mx-3 mb-1 text-left text-xl font-medium">{tutor.blurb}</div>

		<!-- Services -->
		{#if tutor.defaultCard.featuredServices?.length ?? 0 > 0}
			<div class="mx-2 mb-2 p-1">
				<div class="font-semibold">Services I Provide:</div>
				<ul class="mt-2 list-disc pl-5 text-gray-500">
					{#each tutor.defaultCard.featuredServices.slice(0, 3) ?? [] as service}
						<li>{service}</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>

	<!-- Buttons -->
	<div class="m-2 flex justify-between p-1 {hasGallery ? '' : 'flex-col'}">
		{#if hasGallery}
			<button on:click="{openDialog}"
				class="
					text-md
					
					rounded
					bg-alabaster-300
					p-2
					font-medium
					text-white
					hover:bg-alabaster-200"
				>
				See {tutor.shortName}'s Portfolio
			</button>
		{/if}
		<!-- TODO: Update to EnhancedURL Button -->
		<FormLinkButton {formLink}/>
	</div>
</div>
