<script lang="ts">
	import { TabItem, Img } from 'flowbite-svelte';
	import { flip } from 'svelte/animate';
	import { quintOut, sineIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let open: boolean = false;
	export let title: string;
	export let images: string[] = [];
</script>

<TabItem open="{open}" title="{title}" on:click>
	<div class="flex items-start flex-wrap flex-row justify-center gap-4">
		{#each images as image (image)}
			<div
				class="cursor-pointer overflow-hidden rounded-lg"
				animate:flip="{{ duration: 800 }}"
				in:slide="{{ duration: 400, delay: 200, easing: sineIn }}"
				out:slide="{{ duration: 400, easing: quintOut }}"
			>
				<Img
					srcset="{image}"
					alt="Matthew W"
					class="h-72 w-72 object-center object-fill hover:scale-110 hover:transition-all hover:duration-300 hover:ease-linear"
					decoding="async"
					loading="lazy"
					figClass="relative"
					captionClass="absolute bottom-0 w-full px-4 text-2xl font-bold text-white bg-gray-600/80"
					caption="Rendering"
				/>
			</div>
		{/each}
	</div>
</TabItem>
