<script lang="ts">
	export let images: {alt: string, src?: string, srcset?: string}[];

	import { Lightbox } from 'svelte-lightbox';

</script>

<div class="m-auto grid w-fit grid-cols-3 gap-1 p-4">
	{#each images as image}
		<Lightbox>
            <picture slot="thumbnail" class="block aspect-square w-30 h-30 overflow-hidden ">
                <img
                    class="min-h-full min-w-full object-cover object-center"
                    src="{image.src ?? ''}"
                    srcset="{image.srcset ?? ''}"
                    alt="sketchup"
                    decoding="async"
                    width="180"
                    height="180"
                    style="content-visibility:auto"
                />
            </picture>
            <picture class="">
				<img
                    src="{image.src ?? ''}"
                    srcset="{image.srcset ?? ''}"
					alt="sketchup"
					decoding="async"
					width="1200"
					style="content-visibility:auto"
				/>
			</picture>
        </Lightbox>
	{/each}
</div>
