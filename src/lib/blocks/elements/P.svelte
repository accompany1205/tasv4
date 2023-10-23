<script lang="ts">
	let _class = '';
	export { _class as class };	
</script>

<p class="pb-4 text-lg {_class}">
    <slot/>
</p>