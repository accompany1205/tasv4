<script lang="ts">
	import LightboxGrid from '$lib/components/LightboxGrid.svelte';
	const pictures = import.meta.glob('$lib/assets/sketchup/*.webp', {
		query: {
			format: 'webp;jpeg',
			w: '120;1200;',
			as: 'srcset',
		},
		import: 'default',
		eager: true,
	});
	const flattened = <string[]>Object.values(pictures);
</script>

<LightboxGrid sources="{flattened.slice(4, 8)}" />
