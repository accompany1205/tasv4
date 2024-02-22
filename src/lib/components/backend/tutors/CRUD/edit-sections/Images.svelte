<script lang="ts">
    import { derived } from 'svelte/store';
    import { tutors, updateTutor, type Tutor } from '../../../stores/tutorStore';
    import GetMedias from '../../../media/GetMedias.svelte';
    import { Button } from 'flowbite-svelte';
    import { TrashBinOutline } from 'flowbite-svelte-icons';
	import DelTutor from '../DelTutor.svelte';

    export let tutorId: any;

    const tutor = derived(tutors, $tutors => $tutors.find(t => t.id === tutorId));
    let tutorDetails: Tutor;

    tutor.subscribe($tutor => {
        if ($tutor) {
            tutorDetails = {...$tutor};
        }
    });

    function handleImagesSelect(event: { detail: { urls: string[] }; }) {
        tutorDetails.images = event.detail.urls;
    }

    function deleteImage(imageUrl: string) {
        tutorDetails.images = tutorDetails.images.filter(url => url !== imageUrl);
    }

    function saveChanges() {
        if (tutorId) {
            updateTutor(tutorDetails);
        }
    }


</script>

<div class="w-full grid grid-cols-4 p-5 bg-gray-100 rounded-xl border-2 border-dashed justify-items-center gap-5 dark:bg-gray-700">

    {#each tutorDetails?.images as image (image)}
        <div class="relative inline-block group">
            <img src={image} alt={image} class="rounded-xl w-40 aspect-square object-cover"/>
            
            <Button on:click={() => deleteImage(image)}  color="alternative" class="absolute right-0 top-0 p-2 m-2 bg-gray-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible">
                <TrashBinOutline/>
            </Button>
        </div>
    {/each}

    <GetMedias on:select={handleImagesSelect} currentImages={tutorDetails?.images || []} btnClass="text-gray-700 rounded-xl w-40 h-40 bg-transparent border-4 border-dotted hover:bg-gray-50 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500" btnTitle="Add Images" showIcon={false}/>
</div>


<div class="flex justify-evenly gap-10">
    <Button on:click={saveChanges} class="w-1/2">Save</Button>
    <DelTutor tutor={tutorDetails}/>
</div>
