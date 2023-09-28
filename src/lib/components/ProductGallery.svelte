<script>
    import { Gallery } from 'flowbite-svelte';

    const images = [
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_1.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_3.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_4.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_5.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_6.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_7.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_8.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_9.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_10.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_11.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_12.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_13.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_14.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_15.webp' },
      { alt: '', src: 'src/lib/assets/sketchup/sketchup_16.webp' }
    ];
</script>

<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
