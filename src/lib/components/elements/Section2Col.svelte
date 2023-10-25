<script lang="ts">
	let _class = '';
	export { _class as class };
</script>

<div class="card mx-auto grid max-w-7xl flex-shrink-0 gap-4 p-4 sm:grid-cols-2 {_class}">
	<slot />
</div>
