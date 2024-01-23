<script lang="ts">
    import { fetchServicesAndTutors } from './tagManager';
    import Tag from './Tag.svelte';

    export let image: any;

    let title = image.title;
    let altText = image.alt;
    let published = image.published;
    let tags = image.tags;
    let newTags: any[] = [];
    
    async function loadTags() {
        const { services, tutors } = await fetchServicesAndTutors();
        newTags = [...services, ...tutors];
    }
    loadTags();

</script>

<div class="bg-gray-50 border-2 border-dashed rounded-xl w-full h-fit p-2 flex gap-4 flex-wrap">
    {#each newTags as tag}
        <Tag tag={tag}/>
    {/each}
</div>