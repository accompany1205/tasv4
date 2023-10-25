<script lang="ts">
	import ImageGrid from '$lib/components/blocks/common/ImageGrid.svelte';

	const pictures = import.meta.glob('$lib/assets/sketchup/main/*.webp', {
		query: {
			format: 'webp;jpeg',
			w: '1,2,4;', //120;240;480;
			picture: '',
			as: 'srcset',
		},
		import: 'default',
		eager: true,
	});

	const flattened = <string[]>Object.values(pictures);
</script>

<ImageGrid sources="{flattened}" />
