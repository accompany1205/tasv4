<script lang="ts">
	import ServiceCategoriesTabs from '$lib/components/blocks/frontpage/service-categories/ServiceCategoriesTabs.svelte';
</script>

<div class="overflow-x-hidden py-4 mb-6">
	<h2 class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black">
		We Can Help With
	</h2>

	<div class="m-2 p-4 mx-auto flex max-w-screen-xl flex-col flex-wrap gap-4 text-white">
		<ServiceCategoriesTabs />
	</div>
</div>
