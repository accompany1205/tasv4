<script>
    import { Carousel } from 'flowbite-svelte';
	export let images = [
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_1.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_3.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_4.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_5.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_6.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_7.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_8.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_9.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_10.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_11.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_12.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_13.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_14.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_15.webp' },
		{ alt: '', src: 'src/lib/assets/sketchup/main/sketchup_16.webp' },
	];
  </script>
  
  <div class="max-w-4xl w-full">
    <Carousel {images} let:Indicators duration="4000">
      <Indicators />
    </Carousel>
  </div>