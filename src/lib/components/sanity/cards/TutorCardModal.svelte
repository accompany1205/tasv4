<script lang="ts">
    import { browser, dev, building, version } from '$app/environment';
    import { onMount } from 'svelte';
	import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage, BodyChild } from 'svelte-lightbox';

    import {AssetRefToImageURL} from '$sanity/helpers';
    import ActiveTutor from "$lib/stores/TutorCardModal_ActiveTutor"
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
    let images: Gallery[]
    const gallery = ActiveTutor.subscribe(
        (gallery) => {
            images = gallery;
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

    onMount(() => {
        ready = true;
    })
</script>

<dialog bind:this="{dialog}" 
    class="
        w-full
        h-full
        @container
        backdrop:bg-[#8d8d8d66]
        backdrop:backdrop-blur-sm
        "
    style="max-width: min(calc((100% - 6px) - 1em), 1200px); max-height: min(calc((100% - 6px) - 1em), 1200px);">
    <div 
        class="
            p-4
            grid
            grid-rows-[auto_minmax(0px,1fr)_auto]
            items-center
            w-full
            max-w-[inherit]
            h-full
            max-h-full
        ">
        <!-- Header Row -->
        <div class="ml-auto">
            <button on:click="{closeDialog}" class="text-3xl">
                X
            </button>
            
        </div>
        <!-- Gallery -->
        <div class="swiper block overflow-hidden w-full h-full max-h-full max-w-[inherit] ">
                <swiper-container bind:this="{swiper}" init="true" class="max-h-full max-w-[inherit]">
                    {#each images ?? [] as image}
                        <swiper-slide class="">
                            <div class="m-auto h-[100cqh] w-full max-w-2xl flex-shrink-0 p-2">
                                <h3>{image.title}</h3>
                                <picture class="bg-purple-500  w-auto max-h-full block m-auto">
                                    <img
                                        src="{AssetRefToImageURL(image.asset._ref)}"
                                        alt="{image.caption}"
                                        class="min-h-full min-w-full object-cover object-center"
                                
                                        decoding="async"
                                        loading="lazy"
                                    />
                                </picture>
                                <span>{image.caption}</span>
                            </div>
                        </swiper-slide>
                    {/each}
                </swiper-container>


        </div>
        <!-- CTA Buttons -->
        <div>
            <hr class="m-2"/>
            <button class="bg-emerald-400 p-4 text-xl text-white">
                Schedule a Call Today!
            </button>
        </div>
    </div>
</dialog>