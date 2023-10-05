<script lang="ts">
    import { Lightbox, LightboxGallery, GalleryThumbnail, GalleryImage } from 'svelte-lightbox';
    export let isInView: boolean = false;
</script>

<swiper-slide>
    {#if isInView}
        <Lightbox on:click>
            <slot name="content"> </slot>
        </Lightbox>
    {:else}
        <slot name="fallback">
            <div class="bg-yellow-200 aspect-square"/>
        </slot>
    {/if}
</swiper-slide>