<script lang="ts">
	import { LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';

	export let thumbnail: string;
	export let featuredImages: Record<string, string>;
</script>

<LightboxGallery>
	<div slot="thumbnail">
		<GalleryThumbnail id="{0}" class="!relative group">
			<img
				srcset="{thumbnail}"
				alt="Simple lightbox"
				class="absolute inset-0 object-cover
        w-full h-full group-hover:opacity-50 img-fluid"
			/>
			<div class="relative p-4">
				<div
					class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
				>
					<div class="text-lg text-black">See my portfolio</div>
				</div>
			</div></GalleryThumbnail
		>
	</div>

	{#each Object.values(featuredImages) as image}
		<GalleryImage>
			<img srcset="{image}" alt="Simple lightbox" />
		</GalleryImage>
	{/each}
</LightboxGallery>
