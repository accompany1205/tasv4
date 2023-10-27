<style>
</style>

<script>
	/**
	 * @type {any[]}
	 */
	export let keywords = [];
</script>

<div>
	{#each keywords as keyword}
		<span class="m-1 inline-block rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-gray-950"
			>{keyword}</span
		>
	{/each}
</div>
