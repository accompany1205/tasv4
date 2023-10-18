<script lang="ts">
	import ImageGrid from '$lib/components/ImageGrid.svelte';
	const pictures = import.meta.glob('$lib/assets/sketchup/*.webp', {
		query: {
			format: 'webp;jpeg',
			w: '120;240;480;',
			picture: '',
			as: 'srcset',
		},
		import: 'default',
		eager: true,
	});
	const flattened = <string[]>Object.values(pictures);
</script>

<ImageGrid sources="{flattened}" />
