<script lang="ts">
    import { fetchServicesAndTutors } from './tagManager';
    import Tag from './Tag.svelte';
    import AddTags from './AddTags.svelte';
    import { collection, doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    export let image: any;

    let title = image.title;
    let altText = image.alt;
    let published = image.published;
    $: tags = image.tags || [];
    
    async function addTagToImage(event: CustomEvent) {
        const tagToAdd = event.detail;
        if (!tags.find(tag => tag.id === tagToAdd.id)) {
            const updatedTags = [...tags, tagToAdd];

            try {
                const imageRef = doc(db, 'media', image.id);
                await updateDoc(imageRef, {
                    tags: updatedTags
                });
                console.log('Tag added to the image successfully.');

                image.tags = updatedTags;
            } catch (error) {
                console.error('Error adding tag to the image:', error);
            }
        } else {
            console.log('Tag is already associated with the image.');
        }
    }
</script>

<div class="bg-gray-50 border-2 border-dashed rounded-xl w-full h-fit p-2 flex gap-4 flex-wrap">
    {#each tags as tag (tag.id)}
        <Tag tag={tag}/>
    {/each}

    <AddTags on:addTag={addTagToImage} currentTags={tags}/>
</div>