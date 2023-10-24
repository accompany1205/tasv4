<script>
	//Components
	import TopHero from '$lib/components/TopHero.svelte';
	import GeneralServices from '$lib/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/blocks/frontpage/SketchupServices.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
	import TutorV3Swipeblock from '$lib/components/swiper/TutorV3Swipeblock.svelte';

	export let featuredTutorsHero = ["1619","12081","12115","2652"];
	export let featuredTutorsCards = ["2515","1619","12115","12081","2652","20684","2972"];
</script>

<svelte:head>
	<title>Tutors and Services</title>
</svelte:head>

<TopHero featuredTutors={featuredTutorsHero}/>
<TutorV3Swipeblock tutors={featuredTutorsCards} />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ/>