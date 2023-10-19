<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import HeaderFlowBite from '$lib/components/HeaderFlowBite.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FooterFlowBite from '$lib/components/FooterFlowBite.svelte';
	import { Button } from 'flowbite-svelte';
	import FreeConsultationSticky from '$lib/components/FreeConsultationSticky.svelte';

	import { register } from 'swiper/element/bundle';
	register();
</script>

<Header />
<slot />
<FooterFlowBite />


<FreeConsultationSticky />
