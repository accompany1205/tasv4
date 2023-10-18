<script lang="ts">
	let _class = '';
	export { _class as class };
</script>

<div class="card grid flex-shrink-0 gap-4 p-4 sm:grid-cols-2 {_class} mx-auto max-w-7xl">
	<div class="max-w-sm">
		<slot />
	</div>
	<div class="slider aspect-video bg-pink-500">
		<!-- TODO: Slider -->
	</div>
</div>
