<script>
	//Components
	import TopHero from '$lib/components/TopHero.svelte';

	import TutorList from '$lib/components/TutorList.svelte';
	import TutorSwipeBlock from '$lib/components/swiper/TutorSwipeBlock.svelte';
	import Ratings from '$lib/components/Ratings.svelte';
	import ProductGallery from '$lib/components/ProductGallery.svelte';
	import GoogleRatings from '$lib/components/GoogleRatings.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GeneralServices from '$lib/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/blocks/frontpage/SketchupServices.svelte';

	import { tutors } from '$lib/tutors';
</script>

<svelte:head>
	<title>Tutors and Services</title>
</svelte:head>
<TopHero>
	<TutorSwipeBlock tutors="{tutors.slice(0, 3)}" />
</TopHero>
<GeneralServices/>
<GeneralServicesDetail/>
<SketchupServices/>

<hr class="m-auto w-5/6 pb-8" />
<TutorList />
<Footer />
