<script>
	import '../app.css';
	import Header from '$lib/components/blocks/common/Header.svelte';
	import HeaderFlowBite from '$lib/components/blocks/common/HeaderFlowBite.svelte';
	import FooterFlowBite from '$lib/components/blocks/common/FooterFlowBite.svelte';
	import { Button } from 'flowbite-svelte';
	import FreeConsultationSticky from '$lib/components/blocks/common/FreeConsultationSticky.svelte';

	import { register } from 'swiper/element/bundle';
	register();
</script>

<Header />
<slot />
<FooterFlowBite />
<FreeConsultationSticky />
