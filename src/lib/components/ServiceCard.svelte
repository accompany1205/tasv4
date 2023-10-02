<script lang="ts">
	let _class = '';
	export { _class as class };
</script>

<div class="card flex-shrink-0 p-4 grid gap-4 sm:grid-cols-2 {_class}">
    <div class="max-w-sm">
		<slot/>
	</div>
	<div class="slider bg-pink-500 aspect-video">
		<!-- TODO: Slider -->
	</div>
</div>