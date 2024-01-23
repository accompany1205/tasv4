<script lang="ts">
    import { fetchServicesAndTutors } from './tagManager';
    import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
    import { PlusSolid } from 'flowbite-svelte-icons';
    import { createEventDispatcher } from 'svelte';

    export let currentTags: any[] = [];
    let tagOptions: any[] = [];
    let availableTags: any[] = [];

    $: availableTags = tagOptions.filter(option => 
        !currentTags.some(currentTag => currentTag.id === option.id));

    async function loadTags() {
        const { services, tutors } = await fetchServicesAndTutors();
        tagOptions = [...services, ...tutors];
        availableTags = tagOptions.filter(option => 
            !currentTags.some(currentTag => currentTag.id === option.id));
    }
    loadTags();

    const dispatch = createEventDispatcher();

    function onAddTag(tag: any, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();
        dispatch('addTag', tag);
    }

    function handleClick(event: {stopPropagation(): unknown; preventDefault: () => void;}) {
        event.preventDefault();
        event.stopPropagation();
    }

</script>

<Button on:click={handleClick} color="alternative" class="rounded-xl border-dashed bg-transparent hover:text-emerald-400">
    Add Tag &nbsp;<PlusSolid size="xs" class="text-gray-900"/>
</Button>

<Dropdown>
    {#each availableTags as tag (tag.id)}
        <DropdownItem on:click={(event) => onAddTag(tag, event)}>{tag.name}</DropdownItem>
    {/each}
</Dropdown>
