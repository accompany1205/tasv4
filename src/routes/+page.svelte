<script lang="ts">
	//Components
	import TopHero from '$lib/components/blocks/frontpage/TopHero.svelte';
	import GeneralServices from '$lib/components/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/components/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/components/blocks/frontpage/SketchupServices.svelte';
	import FAQ from '$lib/components/blocks/frontpage/FAQ.svelte';
	import TutorV3Swipeblock from '$lib/components/blocks/common/TutorV3Swipeblock.svelte'; 

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	import CTAVisibility from "$lib/stores/cta_visibility_anchor";

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: false,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		{
			(CTAVisibility.set(detail.inView))
		};

	const hero_images_import: Record<string, string> = import.meta.glob('$lib/assets/sketchup/main/*.webp', {
		query: {
			format: 'webp;jpeg',
			w: '512;256;128;', //120;240;480;
			picture: '',
			as: 'srcset',
		},
		import: 'default',
		eager: true,
	});
	const hero_images_flattened = Object.values(hero_images_import).map((url) => ({alt:'', srcset:url})).slice(0, 8);

	let featuredTutorsHero = ['1619', '12081', '12115', '2652'];
	let featuredTutorsCards = ['2515', '1619', '12115', '12081', '2652', '20684', '2972', '12113'];
</script>

<svelte:head>
	<title>SketchUp Tutors</title>
</svelte:head>

<div  use:inview="{options}" on:inview_change="{handleChange}"/>
<TopHero images="{hero_images_flattened}" featuredTutors="{featuredTutorsHero}" />
<TutorV3Swipeblock tutors="{featuredTutorsCards}" />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ />