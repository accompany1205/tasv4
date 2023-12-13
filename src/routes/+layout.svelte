<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
  
	import Header from '$lib/components/blocks/common/Header.svelte';
	import FooterFlowBite from '$lib/components/blocks/common/FooterFlowBite.svelte';
	import FreeConsultationSticky from '$lib/components/blocks/common/FreeConsultationSticky.svelte';
	import Analytics from '$lib/components/analytics/Analytics.svelte';
  
	import { register } from 'swiper/element/bundle';
	register();
  
	let exclude = ['/backend'];
	let includeLayout = !exclude.includes($page.url.pathname);
  </script>
  
  <Analytics />
  {#if includeLayout}

  {/if}
  <slot />
  {#if includeLayout}
	<FooterFlowBite />
	<FreeConsultationSticky />
  {/if}
  