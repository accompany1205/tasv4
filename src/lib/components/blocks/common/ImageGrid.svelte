<script lang="ts">
	export let sources = [''];
</script>

<div class="m-auto grid w-full grid-cols-3 gap-1 p-4">
	{#each sources as pic_src}
		<picture class="aspect-square w-20 overflow-hidden bg-pink-500">
			<img
				class="min-h-full min-w-full object-cover object-center"
				srcset="{pic_src}"
				alt="sketchup"
				decoding="async"
				width="112"
				height="112"
				style="content-visibility:auto"
			/>
		</picture>
	{/each}
</div>
