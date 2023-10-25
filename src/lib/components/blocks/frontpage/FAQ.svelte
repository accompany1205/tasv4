<script lang="ts">
	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
</script>

<Section name="faq">
	<h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
		>Frequently asked questions</h2
	>
	<Faq>
		<div>
			<FaqItem>
				<svelte:fragment slot="h3">What is SketchUp?</svelte:fragment>
				<p class="text-gray-500 dark:text-gray-400"
					>SketchUp is a 3D modeling software application used for a wide range of drawing
					applications such as architectural, interior design, landscape architecture,
					civil and mechanical engineering, film, and video game design. It is available
					in both free and paid versions.</p
				>
			</FaqItem>

			<FaqItem>
				<svelte:fragment slot="h3">How much does SketchUp cost?</svelte:fragment>
				<p class="text-gray-500 dark:text-gray-400"
					>SketchUp offers both free and paid versions. The free version, called SketchUp
					Free, has limited features and is available online. The paid version, called
					SketchUp Pro, costs $299 per year, and offers advanced features like export to
					CAD format, unlimited cloud storage, and augmented reality viewing.</p
				>
			</FaqItem>
		</div>

		<div>
			<FaqItem>
				<svelte:fragment slot="h3">Is SketchUp easy to learn?</svelte:fragment>
				<p class="text-gray-500 dark:text-gray-400"
					>SketchUp is relatively easy to learn compared to other 3D modeling software
					applications. It has a user-friendly interface, and there are many tutorials and
					resources available online to help beginners get started.</p
				>
			</FaqItem>

			<FaqItem>
				<svelte:fragment slot="h3"
					>What file formats can SketchUp export to?</svelte:fragment
				>
				<p class="text-gray-500 dark:text-gray-400"
					>SketchUp can export to a variety of file formats including 3D Warehouse, STL,
					3DS, DAE, DWG, DXF, FBX, OBJ, XSI, and VRML.</p
				>
			</FaqItem>

			<FaqItem>
				<svelte:fragment slot="h3">Can SketchUp be used for 2D drawings?</svelte:fragment>
				<p class="text-gray-500 dark:text-gray-400"
					>SketchUp can be used to create both 2D and 3D drawings. However, its main
					strength lies in creating 3D models quickly and easily, which can then be used
					to generate 2D drawings.</p
				>
			</FaqItem>
		</div>
	</Faq>
</Section>
