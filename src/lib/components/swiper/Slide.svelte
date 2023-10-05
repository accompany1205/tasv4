<script lang="ts">
    import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
    export let isInView: boolean = false;

    let show = false;

    $: if (isInView === true) {
        setTimeout(() => {
            show = true;
        },
        400)
    }
</script>

<swiper-slide class:show class="slide-content aspect-square">
    {#if isInView}
        <div class:show class="fadebox">
            <Lightbox on:click>
                <slot name="content"> </slot>
            </Lightbox>
        </div>
    {:else}
        <slot name="fallback">
            <div class="bg-yellow-200 h-0"/>
        </slot>
    {/if}
</swiper-slide>

<style>
    .fadebox {
        opacity: 0;
        transition: opacity 1000ms;
    }
    .fadebox.show {
        opacity: 1;
    }
</style>