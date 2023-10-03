<script lang="ts">
    export let sources = [''];
</script>

<div class="grid grid-cols-3 w-fit gap-1 m-auto p-4">
    {#each sources as pic_src}
        <picture class="w-20 bg-pink-500 aspect-square overflow-hidden">
            <img class="min-h-full min-w-full object-cover object-center" 
            srcset="{pic_src}" 
            alt="sketchup"
            decoding="async"
            width="112"
            style="content-visibility:auto"
            >
        </picture>
    {/each}
</div>