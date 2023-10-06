<style>
	.fadebox {
		opacity: 0;
		transition: opacity 1000ms;
	}
	.fadebox.show {
		opacity: 1;
	}
</style>

<script lang="ts">
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
	export let isInView: boolean = false;

	let show = false;

	$: if (isInView === true) {
		setTimeout(() => {
			show = true;
		}, 400);
	}
</script>

<swiper-slide class:show="{show}" class="slide-content aspect-square">
	{#if isInView}
		<div class:show="{show}" class="fadebox aspect-square overflow-hidden rounded-md">
			<Lightbox on:click>
				<slot name="content" />
			</Lightbox>
		</div>
	{:else}
		<slot name="fallback">
			<div class="h-0 bg-yellow-200"></div>
		</slot>
	{/if}
</swiper-slide>
