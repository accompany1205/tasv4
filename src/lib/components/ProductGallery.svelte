<script>
    import { Gallery } from 'flowbite-svelte';

    const images = [
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_2.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_3.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_4.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_5.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_6.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_7.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_8.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_9.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_10.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_11.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_12.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_13.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_14.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_15.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_16.webp' }
    ];
</script>

<Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3" />
