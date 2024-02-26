<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/blocks/common/Header.svelte';
	import HeaderFlowBite from '$lib/components/blocks/common/HeaderFlowBite.svelte';
	import FooterFlowBite from '$lib/components/blocks/common/FooterFlowBite.svelte';
	import { Button } from 'flowbite-svelte';
	import FreeConsultationSticky from '$lib/components/blocks/common/FreeConsultationSticky.svelte';
	import Analytics from '$lib/components/analytics/Analytics.svelte';

	import { register } from 'swiper/element/bundle';
	register();

	import { inject } from '@vercel/analytics'
	import { dev } from '$app/environment';
	inject({ mode: dev ? 'development' : 'production' });
</script>

<Analytics />
<Header />
<slot />
<FooterFlowBite />
<FreeConsultationSticky />
