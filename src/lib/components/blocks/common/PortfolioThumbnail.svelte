<script lang="ts">
	import PortfolioImageGallery from './PortfolioImageGallery.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';

	export let thumbnail: string;
	export let featuredImages: Record<string, string>;

	const hero_images_flattened = Object.values(featuredImages)
		.map((url) => ({ alt: '', srcset: url }))
		.slice(0, 8);

	let openGallery: boolean = false;
</script>

<div class="block aspect-[16/9] w-full overflow-hidden bg-gray-200">
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-interactive-supports-focus -->
	<div
		class="relative group h-[-webkit-fill-available] cursor-pointer"
		on:click="{() => (openGallery = true)}"
		role="button"
	>
		<img
			srcset="{thumbnail}"
			alt="Matthew W"
			class="min-h-full min-w-full object-cover object-center group-hover:opacity-50"
			width="512"
			height="230"
			decoding="async"
			loading="lazy"
		/>

		<div class="absolute top-0 left-0 p-4">
			<div
				class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
			>
				<div class="text-lg text-black">See My Work</div>
			</div>
		</div>
	</div>
</div>

{#if openGallery}
	<PortfolioImageGallery
		bind:showModal="{openGallery}"
		title="My work"
		description="I can teach you the basics of Sketchup and Layout. I can help you all the way from drawing your first lines and shapes in Sketchup to making entire floor plans."
	>
		<ImageCarousel images="{hero_images_flattened}" showLogo="{false}" indicatorInside />
	</PortfolioImageGallery>
{/if}
