<script lang="ts">
	import { onMount } from 'svelte';
	import { Tabs, TabItem, Img } from 'flowbite-svelte';
	import CategoriesTabItems from './CategoriesTabItems.svelte';

	let flattened: string[] = [];

	const getCategoryImages = () => {
		const pictures = import.meta.glob('$lib/assets/sketchup/main/*.webp', {
			query: {
				format: 'webp;jpeg',
				w: '256;', //120;240;480;
				picture: '',
				as: 'srcset',
			},
			import: 'default',
			eager: true,
		});
		console.log('pictures: ', pictures);
		flattened = <string[]>(
			Object.values(pictures).slice(0, Math.floor(Math.random() * (10 - 1 + 1)) + 1)
		);
	};

	onMount(() => {
		getCategoryImages();
	});
</script>

<Tabs
	defaultClass="flex flex-wrap justify-start space-x-2 py-2 px-4 text-2xl text-gray-900 first:pl-0"
	activeClasses="bg-emerald-400 py-2 px-4 text-2xl text-white rounded"
	inactiveClasses="py-2 px-4 text-2xl text-gray-900 hover:bg-emerald-400 hover:text-white hover:rounded"
	contentClass="p-0 transition-all duration-300 ease-linear"
>
	<CategoriesTabItems open title="All" on:click="{getCategoryImages}" images="{flattened}" />

	<CategoriesTabItems title="Architecture" on:click="{getCategoryImages}" images="{flattened}" />

	<CategoriesTabItems title="Gaming" on:click="{getCategoryImages}" images="{flattened}" />

	<CategoriesTabItems title="Industrial" on:click="{getCategoryImages}" images="{flattened}" />

	<CategoriesTabItems title="Interior" on:click="{getCategoryImages}" images="{flattened}" />

	<CategoriesTabItems title="Software" on:click="{getCategoryImages}" images="{flattened}" />
</Tabs>
