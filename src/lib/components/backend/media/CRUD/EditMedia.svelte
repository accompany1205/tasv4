<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    import { Label, Input, Toggle} from 'flowbite-svelte';
    import TagManager from './tags/TagManager.svelte';
    import DelMedia from './DelMedia.svelte';
    import { doc, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    export let image: any;
    export let btnClass: string;
    let defaultModal = false;

    let title = image.title;
    let altText = image.alt;
    let published = image.show;

    $: title, updateFirebase();
    $: altText, updateFirebase();
    $: published, updateFirebase();

    function handlePublishedChange() {
        published = !published;
        updateFirebase();
    }

    function formatDate(firestoreTimestamp: { toDate: () => any; }) {
        if (firestoreTimestamp && firestoreTimestamp.toDate) {
            const date = firestoreTimestamp.toDate();
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric', month: '2-digit', day: '2-digit'
            };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        return '';
    } 

    function saveChanges() {
        updateFirebase();
    }

    async function updateFirebase() {
        const imageRef = doc(db, 'media', image.id);

        try {
            await updateDoc(imageRef, {
                title: title,
                alt: altText,
                show: published
            });
            console.log('Image updated successfully');
        } catch (error) {
            console.error('Error updating image:', error);
        }
    }


</script>

<Button color="alternative" class="{btnClass}" on:click={() => (defaultModal = true)}>Edit</Button>

<Modal title="Edit Media" bind:open={defaultModal} size="xl" autoclose class="max-h-[80vh] overflow-y-auto">
    <div class="flex">

        <div class="w-1/2">
            <img src={image.url} alt={image.alt} class="object-cover sticky top-0 rounded-xl shadow-lg"/>
            <DelMedia image={image}/>
        </div>

        <div class="grid gap-4 sm:grid-cols-1 px-10 w-1/2 overflow-y-auto">

            <!-- Editable -->
            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Title</Label>
                <Input id="title" type="text" bind:value={title} />
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Alt</Label>
                <Input id="altText" type="text" bind:value={altText} />
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Published</Label>
                <Toggle checked={published} on:click={() => published = !published}/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Tags</Label>
                <TagManager image={image}/>
            </div>

            <!-- Static -->
            <div class="flex">
                <div class="text-gray-900 font-semibold">
                    Name:&nbsp;
                </div>

                <div class="font-medium text-gray-500">
                    {image.name}
                </div>            
            </div>

            <div class="flex">
                <div class="text-gray-900 font-semibold">
                    Owner:&nbsp;
                </div>

                <div class="font-medium text-gray-500">
                    {image.owner}
                </div>            
            </div>

            <div class="flex">
                <div class="text-gray-900 font-semibold">
                    Uploaded:&nbsp;
                </div>

                <div class="font-medium text-gray-500">
                    {formatDate(image.uploadDate)}
                </div>            
            </div>

            <div class="flex">
                <div class="text-gray-900 font-semibold">
                    Url:&nbsp;
                </div>

                <div class="font-medium text-gray-500">
                    {image.url}
                </div>            
            </div>

        </div>
    </div>

    <div class="flex gap-4 sticky left-0 bottom-0 mt-0">
        <Button on:click={saveChanges}>Save</Button>
        <Button color="alternative">Close</Button>
    </div>
</Modal>
