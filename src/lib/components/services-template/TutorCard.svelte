<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    import '@fontsource-variable/akshar';
    import ServiceTags from './ServiceTags.svelte';
    import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
    import { featured_images, headshots } from '$lib/tutors';

    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    import { Button } from 'flowbite-svelte';

    let isInView: boolean;
    const options = {
        rootMargin: '50px',
        unobserveOnEnter: true,
    };

    const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) =>
        (isInView = detail.inView);

    let _class = '';
    export { _class as class };

    export let tutor: any;
    console.log(tutor);

    const dispatch = createEventDispatcher();

    function handleConsultationClick() {
        dispatch('consultationClick', { tutorId: tutor.id });
    }
</script>

<div
    use:inview="{options}"
    on:inview_change="{handleChange}"
    class="grid max-h-full flex-shrink grid-rows-[auto_1fr_auto] overflow-clip rounded bg-white font-akshar shadow-lg {_class}"
>
    <div>
        <!-- Image -->
        <div class="block aspect-[21/9] w-full overflow-hidden bg-gray-200">
            {#if isInView}
            <Lightbox>
                <img
                    srcset={tutor.headshot}
                    alt="Matthew W"
                    class="min-h-full min-w-full object-cover object-center"
                    width="512"
                    height="230"
                    decoding="async"
                    loading="lazy"
                />
            </Lightbox>
            {/if}
        </div>

        <!-- Tutor Info -->
        <div class="flex overflow-x-clip">
            <!-- Headshot -->
            <div class="-ml-4 -mt-10 flex-shrink-0">
                <img
                    srcset={tutor.headshot}
                    alt="Matthew W"
                    class="h-28 w-28 flex-shrink-0 rounded-full border-2 border-emerald-400 p-1"
                />
            </div>
            <!-- Name -->
            <div class="p-2">
                <div class="text-4xl font-bold">{tutor.name}</div>

                {#if tutor.rating.ratingCount >= 5}
                <span class="font-medium text-yellow-300"
                    >{tutor.rating.ratingAverage}⭐ {tutor.rating.ratingCount} Reviews</span
                >
                {:else}
                <span class="font-medium text-yellow-300">New</span>
                {/if}

                <span class="font-medium text-gray-500">• ${tutor.rate}/hr</span>
            </div>
        </div>

        <div class="mx-5 mb-1 text-left text-md font-medium">{tutor.description}</div>

        <!-- Software Tags -->
        <div class="mx-3 py-1">
            <ServiceTags services={tutor.services.slice(0, 8)} />
        </div>
    </div>

    <!-- Buttons FIX LATER -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        <div class="flex justify-center gap-4 m-auto p-6">
            <Button class="text-md h-fit w-1/2 rounded bg-alabaster-300 p-2 font-medium text-white hover:bg-alabaster-200" href="https://www.tutorsandservices.com/{tutor.first}/">
                Learn More About {tutor.first}
            </Button>

            <Button class="text-md h-fit w-1/2 rounded bg-emerald-400 p-2 font-medium text-white hover:bg-emerald-300" on:click={handleConsultationClick}>
                Book A Free Consultation
            </Button>
        </div>
    </div>
</div>
