<script lang="ts">
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	export let sources = [''];
</script>

<div class="m-auto grid min-h-[20rem] max-w-md grid-cols-2 gap-1 p-4">
	{#each sources as pic_src}
		<Lightbox>
			<picture
				slot="thumbnail"
				class="block aspect-square max-w-xs overflow-hidden bg-pink-500"
			>
				<img
					class="min-h-full min-w-full object-cover object-center"
					srcset="{pic_src}"
					alt="sketchup"
					decoding="async"
					width="240"
					height="240"
					style="content-visibility:auto"
				/>
			</picture>
			<picture class="">
				<img
					srcset="{pic_src}"
					alt="sketchup"
					decoding="async"
					width="1200"
					style="content-visibility:auto"
				/>
			</picture>
		</Lightbox>
	{/each}
</div>
