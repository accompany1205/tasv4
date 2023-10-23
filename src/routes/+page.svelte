<script>
	//Components
	import TopHero from '$lib/components/TopHero.svelte';
	import GeneralServices from '$lib/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/blocks/frontpage/SketchupServices.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import TutorV3Swipeblock from '$lib/components/swiper/TutorV3Swipeblock.svelte';

	import { tutors } from '$lib/tutors';
</script>

<svelte:head>
	<title>Tutors and Services</title>
</svelte:head>

<TopHero />
<TutorV3Swipeblock tutors="{tutors.slice(0, 4)}" />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ/>