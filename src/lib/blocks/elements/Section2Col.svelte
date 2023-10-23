<script lang="ts">
	let _class = '';
	export { _class as class };	
</script>

<div class="card grid flex-shrink-0 gap-4 p-4 sm:grid-cols-2 mx-auto max-w-7xl {_class}">
    <slot/>
</div>