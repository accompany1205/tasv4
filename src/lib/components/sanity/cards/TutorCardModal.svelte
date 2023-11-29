<script lang="ts">
    import { browser, dev, building, version } from '$app/environment';
    import { onMount } from 'svelte';
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage, BodyChild } from 'svelte-lightbox';

    import {AssetRefToImageURL} from '$sanity/helpers';
    import ActiveTutor from "$lib/stores/TutorCardModal_ActiveTutor";
    
    import FormLinkButton from '$sanity/elements/FormLinkButton.svelte';

    import type FormLink from '$lib/schemas/FormLink';
    export let formLink: FormLink;

    let ready = false;

    interface Gallery {
        _type: "image",
        title: string,
        caption: string,
        asset: {
            _type: "reference",
            _ref: string
        }
    }
    let tutor: {name: string, images: Gallery[]}
    let nameDisplayString = "";
    const tutor_gallery = ActiveTutor.subscribe(
        (gallery) => {
            tutor = gallery;
            nameDisplayString = 
                gallery.name.length < 1 
                    ? "Tutor Portfolio"
                    : gallery.name.endsWith('s') 
                        ? `${gallery.name}' Portfolio` 
                        : `${gallery.name}'s Portfolio`
            if (browser && ready) {openDialog()}
        }
    )

    let dialog: HTMLDialogElement;
    export function openDialog() {
        dialog?.showModal();
    }
    function closeDialog() {
        dialog.close();
    }

    let swiper: HTMLElement;
	const params = {
        slidesPerView: "auto"
	};

    onMount(() => {
        ready = true;
        Object.assign(swiper, params);
		// @ts-ignore
		swiper.initialize();
    })
</script>

<dialog bind:this="{dialog}" 
    class="
        w-full
        h-full
        @container
        backdrop:bg-[#8d8d8d66]
        backdrop:backdrop-blur-sm
        bg-alabaster-50
        "
    style="max-width: min(calc((100% - 2px) - 0.75em), 1600px); max-height: min(calc((100% - 2px) - 0.75em), 1200px);">
    <div 
        class="
            p-0
            grid
            grid-rows-[auto_minmax(0px,1fr)_auto]
            items-center
            w-full
            
            h-full
            max-h-full
        ">
        <!-- Header Row -->
        <div class="w-full grid grid-cols-[1fr_auto] items-center">
            <h3 class="pl-2 inline font-bold text-2xl">{nameDisplayString}</h3>
            <button on:click="{closeDialog}" class=" bg-alabaster-300 aspect-square w-8 ml-auto">
                <svg class=" mx-auto w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
            
        </div>
        <!-- Gallery -->
        <div class="swiper grid grid-rows-[minmax(0px,1fr)_auto_auto] overflow-hidden w-full h-full max-h-full  ">
                <swiper-container bind:this="{swiper}" init="false" thumbs-swiper=".mySwiper2" class="w-[100cqw]"
                    autoplay-delay="45033330" autoplay-disable-on-interaction="false" >
                    {#each tutor.images ?? [] as image}
                        <swiper-slide class="w-fit">
                            <div class="m-auto h-full">
                                <picture class="bg-black  h-full w-fit block m-auto">
                                    <img
                                        src="{AssetRefToImageURL(image.asset._ref)}"
                                        alt="{image.caption}"
                                        class="h-full w-fit object-cover object-center"
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </picture>
                                <div class="absolute bottom-0 bg-[#1b1b1b66] text-white text-xl w-full h-1/4 text-center">
                                    <h3 class="font-bold text-2xl mb-2">
                                        {image.title}
                                    </h3>
                                    <span>
                                        {image.caption}
                                    </span>
                                </div>
                            </div>
                        </swiper-slide>
                    {/each}
                </swiper-container>
                <div class="bg-alabaster-950 pt-4 shadow-[inset_0px_0px_16px_0px_#00000055]">
                    
                    <!-- Thumbnail Gallery -->
                    <swiper-container class="mySwiper2 w-[100cqw] max-h-36 mx-auto" space-between="4" slides-per-view="auto" centered-slides="false" free-mode="false"
                        watch-slides-progress="true" >
                        {#each tutor.images ?? [] as image}
                            <swiper-slide class="aspect-square max-h-36 w-fit">
                                <div class=" max-w-md ">
                                    <picture class="bg-black  w-auto max-h-full block m-auto">
                                        <img
                                            src="{AssetRefToImageURL(image.asset._ref)}"
                                            alt="{image.caption}"
                                            class="min-h-full min-w-full max-h-36 object-cover object-center aspect-square"
                                            decoding="async"
                                            loading="lazy"
                                        />
                                    </picture>
                                </div>
                            </swiper-slide>
                        {/each}
                    </swiper-container>
                </div>

        </div>
        <!-- CTA Buttons -->
        <div class="w-full grid grid-cols-[1fr_auto] items-center">
            <FormLinkButton {formLink} class="bg-emerald-400 p-4 text-lg font-bold text-white h-full w-full">
                Schedule a Call
            </FormLinkButton>

            <button class="bg-alabaster-400 p-4 text-lg font-bold text-white h-full">
                View Profile
            </button>
        </div>
    </div>
</dialog>