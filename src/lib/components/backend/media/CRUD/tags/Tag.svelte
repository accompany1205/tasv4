<script lang="ts">
    import { Popover, Button } from 'flowbite-svelte';
    import { TrashBinOutline } from 'flowbite-svelte-icons';
    import { createEventDispatcher } from 'svelte';

    export let image: any;
    export let tag: any;

    let type = tag.type; // Tutor or Service
    let id = tag.id;
    let name = tag.name;

    function borderColor() {
        return type === 'tutors' ? 'border-blue-200' : 'border-red-200';
    }

    const dispatch = createEventDispatcher();

    function handleRemove(event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        dispatch('removeTag', { id: tag.id });
    }
</script>

<div class={`bg-white p-2 text-gray-700 w-fit rounded-xl border-2 ${borderColor()}`} id="tag-{tag.id}">
    {name}
</div>

<Popover class="w-fit text-sm font-light " triggeredBy="#tag-{tag.id}">
    <Button on:click={(event) => handleRemove(event)} color="alternative">
        <TrashBinOutline class="w-4 h-4"/>
    </Button>
</Popover>