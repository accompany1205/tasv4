<script lang="ts">
	let _class = '';
	export { _class as class };
</script>

<div class="card flex-shrink-0 p-4  {_class}">
    <slot/>
</div>