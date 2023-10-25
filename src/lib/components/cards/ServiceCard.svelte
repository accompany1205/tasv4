<script lang="ts">
	let _class = '';
	export { _class as class };
	export let images = [{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_1.webp' }];
	import ImageCarousel from './ImageCarousel.svelte';
</script>

<div class="card grid flex-shrink-0 gap-4 p-4 sm:grid-cols-2 {_class} mx-auto max-w-7xl">
	<div class="max-w-sm">
		<slot />
	</div>
	<div class="slider aspect-video">
		<ImageCarousel images="{images}" />
	</div>
</div>
