<script lang="ts">
    import '@fontsource-variable/akshar';
    import ServiceTags from './ServiceTags.svelte';
    import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
    import type { Tutor } from '$lib/tutors.ts';

	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';

	let isInView: boolean;
	const options = {
		rootMargin: '50px',
		unobserveOnEnter: true,
	};
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
		(isInView = detail.inView);

    let keywordsArray = [
    "SketchUp",
    "AutoCAD",
    "Blender"
    ];
    let _class = "";
	export { _class as class };
	export let tutor: Tutor;
</script>

<style>
    .card-size {
        /* width: 350px; */
        height: auto;
    }
</style>
  
<div use:inview="{options}" on:inview_change="{handleChange}"
    class="overflow-clip flex-shrink bg-white rounded shadow-lg font-akshar grid grid-rows-[auto_1fr_auto] {_class}">
    <div>
        <!-- Image -->
        <div class="w-full aspect-[21/9] bg-gray-200 block overflow-hidden">
            {#if isInView}
                <Lightbox>
                    <img
                        src="/tutors/{tutor.id}/img/1.webp"
                        alt="Matthew W"
                        class="min-h-full min-w-full object-cover object-center"
                        width="512"
                        height="230"
                        decoding="async"
                        loading="lazy"
                    >
                </Lightbox>
            {/if}
        </div>
        <!-- Tutor Info -->
        <div class="flex overflow-x-clip">
            <!-- Headshot -->
            <div class="flex-shrink-0 -mt-10 -ml-4">
                <img src="/tutors/{tutor.id}/hs.webp" alt="Matthew W" class="flex-shrink-0 rounded-full w-28 h-28 border-emerald-400 border-2 p-1">
            </div>
            <!-- Name -->
            <div class="p-2">
                <div class="text-4xl font-bold">{tutor.name}</div>
                <span class="text-yellow-300 font-medium">5⭐ 50 Reviews</span>
                <span class="text-gray-500 font-medium">• Expert • ${tutor.hourlyRate}/hr</span>
            </div>
        </div>

        <!-- Software Tags -->
        <div class="mx-3 py-1">
            <ServiceTags keywords={tutor?.software} />
        </div>
    </div>

    <div>
        <!-- Title -->
        <div class="mx-3 mb-1 font-medium text-left text-xl">{tutor?.title}</div>
        {#if (tutor?.services?.length ?? 0 > 0)}
            <div class="mx-2 mb-2 p-1">
                <div class="font-semibold">Services I Provide:</div>
                <ul class="list-disc pl-5 mt-2 text-gray-500">
                    {#each tutor?.services ?? [] as service}
                        <li>{service}</li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>

    <!-- Buttons -->
    <div class="m-2 p-1 flex justify-between">
        <button class="bg-alabaster-300 text-white font-medium text-md rounded mx-4 p-2">Learn More About {tutor.first}</button>
        <button class="bg-emerald-400 text-white font-medium text-md rounded mx-4 p-2">Book A Free Consultation</button>
    </div>
</div>
