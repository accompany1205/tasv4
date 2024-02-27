<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
  
	import FooterFlowBite from '$lib/components/blocks/common/FooterFlowBite.svelte';
	import FreeConsultationSticky from '$lib/components/blocks/common/FreeConsultationSticky.svelte';
	import Analytics from '$lib/components/analytics/Analytics.svelte';
  
	import { register } from 'swiper/element/bundle';
	register();
  
	let exclude = ['/backend', '/login', '/account'];
	let includeLayout = !exclude.includes($page.url.pathname);

	import { inject } from '@vercel/analytics'
	import { dev } from '$app/environment';
	inject({ mode: dev ? 'development' : 'production' });
</script>
  
<slot />

{#if includeLayout}
	<FooterFlowBite />
	<FreeConsultationSticky />
{/if}