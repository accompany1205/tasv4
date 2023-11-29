<script lang="ts">
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	import { Carousel } from 'flowbite-svelte';
    export let images: {alt: string, src?: string, srcset?: string}[];

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	import {AssetRefToImageURL} from '$sanity/helpers';

    // @ts-ignore
	import sketchup_logo from "$lib/assets/logos/SketchUp-logo_720_cropped.webp?w=400";

	export let showLogo = false;

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);
</script>

<div use:inview="{options}" on:inview_change="{handleChange}" class="max-w-7xl w-full aspect-video relative mb-14">
	{#if isInView}
		{#if images.length > 1}
			<Carousel images="{images}"   let:Indicators duration="{4000}" class="rounded-sm relative z-0 h-auto sm:h-auto md:h-auto xl:h-auto 2xl:h-auto aspect-video" transition={null}>
				<Indicators class="translate-y-12 " let:selected activeClass="bg-alabaster-600" inactiveClass="bg-alabaster-300"/>
			</Carousel>
		{:else if images.length > 0}
			<Lightbox>
				<picture>
					<img
						src="{images[0].src}"
						alt="{images[0].alt ?? "project sample"}"
						class="min-h-full min-w-full object-cover object-center"
						decoding="async"
						loading="lazy"
					/>
				</picture>
			</Lightbox>
		{/if}
	{/if}

	{#if showLogo}
		<div class="absolute top-0 backdrop-blur-sm w-auto px-4 py-1 bg-white bg-opacity-50">
			<img src="{sketchup_logo}" alt="SketchUp Logo" width="250" height="54" class="" />
		</div>
	{/if}
</div>
