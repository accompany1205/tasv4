<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';

	import { register } from 'swiper/element/bundle';
	register();
</script>

<Header />
<slot />
