<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import HeaderFlowBite from '$lib/components/HeaderFlowBite.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FooterFlowBite from '$lib/components/FooterFlowBite.svelte';
	import { Button } from 'flowbite-svelte';


	import { register } from 'swiper/element/bundle';
	register();
</script>

<Header />
<slot />
<FooterFlowBite />


<Button href="https://www.jotform.com/221775033335048" class="fixed bottom-4 bg-emerald-400 text-2xl px-2 py-1 right-4">Free Consultation</Button>
