<script lang="ts">
	export let title: string;
</script>

<section class="p-4 text-black">
	<h3
		class="m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-3xl font-black break-words"
	>
		{title}
	</h3>

	<div class="m-2 mx-auto flex max-w-screen-xl flex-wrap gap-4 text-black">
		<slot />
	</div>
</section>
