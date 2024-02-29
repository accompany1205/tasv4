<script lang="ts">
	import PortfolioImageGallery from './PortfolioImageGallery.svelte';
	import ImageCarousel from './ImageCarousel.svelte';
	import type { Media } from '$lib/components/backend/stores/mediaStore';


	export let thumbnail: string;
	export let portfolioImages: Media[] = [];
	export let openWorkGallery: boolean = false;

	let randNumber: number = 1;
</script>

<div
	class="block aspect-[16/9] micro:max-[375px]:aspect-[21/9] micro:max-sm:aspect-[21/7] w-full overflow-hidden bg-gray-200"
>
	<!-- svelte-ignore a11y-click-events-have-key-events a11y-interactive-supports-focus -->
	<div
		class="relative group h-[-webkit-fill-available] cursor-pointer"
		on:click="{() => (openWorkGallery = true)}"
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

		<div class="absolute top-0 left-0 p-4 hidden lg:block">
			<div
				class="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
			>
				<div class="text-lg text-black">See My Work</div>
			</div>
		</div>
	</div>
</div>

{#if openWorkGallery}
	<PortfolioImageGallery bind:OpenGallery="{openWorkGallery}" title="My work">
		<ImageCarousel
			portfolioImages={portfolioImages}
			showLogo="{false}"
			indicatorInside
			showAlt
			logo = ''
		/>
	</PortfolioImageGallery>
{/if}
