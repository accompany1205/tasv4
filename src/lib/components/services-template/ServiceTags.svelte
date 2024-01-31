<script lang="ts">
	export let services:any[] = [];
</script>

<div>
	{#each services as service}
		<span class="m-1 inline-block rounded-md bg-slate-100 px-2 py-1 text-sm font-medium text-gray-950"
			>{service.name}</span
		>
	{/each}
</div>
