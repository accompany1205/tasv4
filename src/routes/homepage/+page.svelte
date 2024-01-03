<script lang="ts">
	import AllTutors from '$lib/components/blocks/frontpage/AllTutors.svelte';
	import ServiceCategories from '$lib/components/blocks/frontpage/service-categories/ServiceCategories.svelte';
	import FreeConsultation from '$lib/components/blocks/frontpage/FreeConsultation.svelte';
	import AboutUs from '$lib/components/blocks/frontpage/AboutUs.svelte';
	import GeneralServices from '$lib/components/blocks/frontpage/GeneralServices.svelte';
	import CompanyPhilosophy from '$lib/components/blocks/frontpage/CompanyPhilosophy.svelte';
	import Advantages from '$lib/components/blocks/frontpage/Advantages.svelte';
	import GoogleReviews from '$lib/components/blocks/frontpage/GoogleReviews.svelte';
	import SpecialOffer from '$lib/components/blocks/frontpage/SpecialOffer.svelte';

	const hero_images_import: Record<string, string> = import.meta.glob(
		'$lib/assets/sketchup/main/*.webp',
		{
			query: {
				format: 'webp;jpeg',
				w: '512;256;128;', //120;240;480;
				picture: '',
				as: 'srcset',
			},
			import: 'default',
			eager: true,
		},
	);
	const hero_images_flattened = Object.values(hero_images_import)
		.map((url) => ({ alt: '', srcset: url }))
		.slice(0, 8);

	let featuredTutorsHero = ['1619', '12081', '12115', '2652'];
</script>

<AllTutors images="{hero_images_flattened}" featuredTutors="{featuredTutorsHero}" />
<ServiceCategories />
<FreeConsultation />
<AboutUs />
<GeneralServices />
<CompanyPhilosophy />
<Advantages />
<GoogleReviews />
<SpecialOffer />
