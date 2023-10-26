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
			console.log("kajdklajdls");
			console.log(detail.inView);
			(CTAVisibility.set(detail.inView))
		};

	//Data Sets
	let imagesHero = [
		{ alt: '', src: '/sketchup/main/sketchup_1.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_3.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_4.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_5.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_6.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_7.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_8.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_9.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_10.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_11.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_12.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_13.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_14.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_15.webp' },
		{ alt: '', src: '/sketchup/main/sketchup_16.webp' },
	];

	let featuredTutorsHero = ['1619', '12081', '12115', '2652'];
	let featuredTutorsCards = ['2515', '1619', '12115', '12081', '2652', '20684', '2972', '12113'];
</script>

<svelte:head>
	<title>Tutors and Services</title>
</svelte:head>

<div  use:inview="{options}" on:inview_change="{handleChange}"/>
<TopHero images="{imagesHero}" featuredTutors="{featuredTutorsHero}" />
<TutorV3Swipeblock tutors="{featuredTutorsCards}" />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ />
