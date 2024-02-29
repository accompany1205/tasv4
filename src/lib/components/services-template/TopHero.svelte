<script lang="ts">
    import { onMount } from 'svelte';
    import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import type { Media } from '$lib/components/backend/stores/mediaStore';

    import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
    import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
    import { Button } from 'flowbite-svelte';
    import FormModal from '../blocks/FormModal.svelte';

    export let service: any;
    export let featuredTutors = [''];
	export let images:Media [] = [];

    $: transformedImages = images.map((image) => ({
        alt: image.alt,
        srcset: image.url,
        title: image.title
    }));

</script>

<section class="overflow-x-hidden bg-[#e8e8e8] dark:bg-gray-900">
    <div class="bg-nile-blue-900 py-3 sm:py-6">
        <h1 class="mx-auto max-w-screen-xl px-4 text-left font-bold leading-none tracking-tight text-white text-[1.3rem] sm:text-[2.75rem]">
            {service.title}
        </h1>
    </div>

    <div class="mx-auto grid max-w-screen-xl grid-rows-[auto_1fr] items-top gap-x-4 px-3 py-2 sm:grid-cols-[minmax(100px,_1fr)_1fr] lg:gap-x-8 m-6">
        <div class="left-col mb-8 md:mt-3">
            <ImageCarousel images={transformedImages} logo={service.logo} showLogo={true} />
        </div>

        <div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg text-lg">
            <div class="w-full max-w-md pb-6">
                <div class="flex flex-col gap-4">
                    <h2 class="font-bold text-2xl">
                        Don't Struggle Alone, Get {service.name} Help from a Pro.
                    </h2>
                    <p class="font-normal text-gray-950">
                        {service.description}
                    </p>
                    <p class="font-normal text-gray-950">
                        We are a team of tutors and freelancers that are hireable on an as-needed basis for professional help with your projects.
                    </p>
                </div>
            </div>

            <GoogleRatings />

            <FormModal />
        </div>
    </div>
</section>