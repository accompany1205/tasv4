<script lang="ts">
	import { Hr } from 'flowbite-svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import Section2Col from '$lib/components/elements/Section2Col.svelte';
	import H3 from '$lib/components/elements/H3.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
	import services from '$lib/services';
	const concept_arc_import: Record<string, string> = import.meta.glob(
		'$lib/assets/sketchup/services/conceptual-architecture/*.webp',
		{
			query: {
				format: 'webp;jpeg',
				w: '512;256;128;', //120;240;480;
				picture: '',
				as: 'srcset',
			},
			import: 'default',
			eager: true,
		},
	);
	const concept_arc_flattened = Object.values(concept_arc_import).map((url) => ({
		alt: '',
		srcset: url,
	}));

	const interior_design_import: Record<string, string> = import.meta.glob(
		'$lib/assets/sketchup/services/interior-design/*.webp',
		{
			query: {
				format: 'webp;jpeg',
				w: '512;256;128;', //120;240;480;
				picture: '',
				as: 'srcset',
			},
			import: 'default',
			eager: true,
		},
	);
	const interior_design_flattened = Object.values(interior_design_import).map((url) => ({
		alt: '',
		srcset: url,
	}));

	const product_design_import: Record<string, string> = import.meta.glob(
		'$lib/assets/sketchup/services/product-design/*.webp',
		{
			query: {
				format: 'webp;jpeg',
				w: '512;256;128;', //120;240;480;
				picture: '',
				as: 'srcset',
			},
			import: 'default',
			eager: true,
		},
	);
	const product_design_flattened = Object.values(product_design_import).map((url) => ({
		alt: '',
		srcset: url,
	}));
</script>

<div class="bg-nile-blue-900 p-4 text-white">
	<H3 class="m-auto max-w-screen-xl">Sketchup Services We Provide</H3>

	<ServiceCard images="{concept_arc_flattened}">
		<H4>Conceptual Architecture 3D Modeling</H4>
		<P>
			Create conceptual archetectural 3D models to hash out your basic ideas. This can save
			expensive fees for redrawing or changing plans.
		</P>
	</ServiceCard>
	<Hr classHr="m-0 mb-14 mx-auto max-w-7xl" />

	<ServiceCard images="{interior_design_flattened}">
		<H4>Interior Design</H4>
		<P>
			Sketchup is a great tool for interior design. Place materials on 3d shapes to recreate a
			space, and see it from inside the model. Sketchup is unique in that it is fully
			customizable. There are no limitations to what you can create.
		</P>
	</ServiceCard>
	<Hr classHr="m-0 mb-14 mx-auto max-w-7xl" />

	<ServiceCard images="{product_design_flattened}">
		<H4>Product Design</H4>
		<P>
			Use 3D modeling to visualize a design, 3D print, show it to prospective investors, or
			conduct rapid prototyping.
		</P>
	</ServiceCard>
	<Hr classHr="m-0 mb-14 mx-auto max-w-7xl" />

	<div class="card mx-auto grid max-w-7xl flex-shrink-0 gap-4 p-4 sm:grid-cols-2">
		<div class="order-1 sm:-order-1">
			<H4>We Can Help!</H4>
			<ul>
				{#each services as service, index}
					<li>{service}</li>
				{/each}
			</ul>
		</div>
		<div>
			<H4>About Sketchup</H4>
			<P>
				Sketchup is a great visualization program that puts the power of 3D modeling in the
				hands of everyone. What was once only possible with years of technical training, can
				now be learned in just a few lessons. Sketchup is great for kids too. We have taught
				all ages from 10 to 75.
			</P>
			<P>
				Sketchup allows users to transfer an idea, into a visual 3D model, and eventually
				into reality using digital manufacturing processes like 3D printers and CNC
				machines. You can also use your model for design exploration and construction
				documentation for traditional building methods. Models created in Sketchup can also
				be brought into virtual reality. You can explore your future home with a VR headset!
				Sketchup is a Universal 3D Modeling Program with Countless Applications. Users can
				create architectural structures, virtual 3D gaming worlds, 3D printed objects, 3D
				Art and more.
			</P>
			<P>
				Anything that can be imagined, can be created. Imagine drawing or doodling an idea
				on a piece of paper. Now imagine doodling with virtual geometric 3D shapes: cubes,
				cylinders, spheres, cones, domes, and more. Now you can doodle quickly in 3D. The
				possibilities for creation are endless.
			</P>
		</div>
	</div>
</div>
