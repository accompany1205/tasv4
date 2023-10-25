<script lang="ts">
    export let image;
    const scrset = image.map((img, index) => img.src + ` ${index}x, `).join();
</script>

<picture class=" bg-pink-400">
    {#each image as img, index}
        <source srcset="{img.src}" media="(min-width: {75 - ((index*35))}em)">
    {/each}
    <img
        class="w-full"
        src="{image[1].src}"
        alt="sketchup"
        decoding="async"
        loading="lazy"
        width="250"
        height="250"
        srcset="{scrset}"
    />
</picture>