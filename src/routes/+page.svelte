<script>
	//Components
	import TopHero from '$lib/blocks/frontpage/TopHero.svelte';
	import GeneralServices from '$lib/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/blocks/frontpage/SketchupServices.svelte';
	import FAQ from '$lib/components/blocks/frontpage/FAQ.svelte';
	import TutorV3Swipeblock from '$lib/components/swiper/TutorV3Swipeblock.svelte';

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
		{ alt: '', src: '/sketchup/main/sketchup_16.webp' }
	];



	let featuredTutorsHero = ["1619","12081","12115","2652"];
	let featuredTutorsCards = ["2515","1619","12115","12081","2652","20684","2972","12113"];
</script>

<svelte:head>
	<title>Tutors and Services</title>
</svelte:head>

<TopHero images={imagesHero} featuredTutors={featuredTutorsHero}/>
<TutorV3Swipeblock tutors={featuredTutorsCards} />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ/>