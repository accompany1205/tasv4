<style>
	.image {
		transition: opacity 1s; /* Cross dissolve effect */
		aspect-ratio: square;
		width: 100%;
		height: auto;
	}
</style>

<script>
	export let images = [
		'src/lib/assets/sketchup/services/conceptual-architecture/2.webp',
		'src/lib/assets/sketchup/main/sketchup_11.webp',
		'src/lib/assets/sketchup/main/sketchup_3.webp',
	];
	let currentImage = 0;

	setInterval(() => {
		currentImage = (currentImage + 1) % images.length;
	}, 5000); // Change every 5 seconds
</script>

<img src="{images[currentImage]}" alt="rotating mockup" class="image" />
