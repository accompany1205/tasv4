<script>
	import { Section, News, HeroHeader, HeroBody } from 'flowbite-svelte-blocks';
	import { Button } from 'flowbite-svelte';
	import { ArrowRightSolid } from 'flowbite-svelte-icons';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
</script>

<Section name="heroVisual">
	<div class="mr-auto place-self-center lg:col-span-7">
		<HeroHeader
			h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
			pClass="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
		>
			<svelte:fragment slot="h1"
				><span class="text-emerald-400">Sketchup</span> Tutoring</svelte:fragment
			>
			<svelte:fragment slot="paragraph"
				>From 3D sketch to professional mastery, creators globally trust Tutors and Services
				to streamline their design journey.</svelte:fragment
			>
			<a href="/"
				><Button
					size="xl"
					class="mr-3 inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-300"
					>Get started<ArrowRightSolid size="md" class="-mr-1 ml-2" /></Button
				>
			</a>
			<a href="/"
				><Button color="light" size="xl" class="inline-flex items-center justify-center"
					>Learn More</Button
				>
			</a>
		</HeroHeader>
	</div>
	<div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
		<ImageCarousel />
	</div>
</Section>5
