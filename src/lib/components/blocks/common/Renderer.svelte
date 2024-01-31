<script lang="ts">
	import type { ComponentType, ComponentProps } from 'svelte';

	export let component: ComponentType;
	export let props: ComponentProps<InstanceType<ComponentType>>;
	export let slotName: string = '';
</script>

<svelte:component this="{component}" {...props} slot="{slotName}" />
