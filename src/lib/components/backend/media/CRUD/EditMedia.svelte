<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    import { Label, Input } from 'flowbite-svelte';

    export let image: any;
    let defaultModal = true;

    let title = image.title;
    let altText = image.alt;
    let published = image.published;
    let tags = image.tags;    
</script>

<Button color="alternative" on:click={() => (defaultModal = true)}>Edit</Button>

<Modal title="Edit Media" bind:open={defaultModal} size="xl" autoclose class="max-h-[80vh] overflow-y-auto">
    <div class="flex">

        <div class="w-1/2">
            <img src={image.url} alt={image.alt} class="object-cover sticky top-0 rounded-xl shadow-lg"/>
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
                <Input id="published" type="text" bind:value={published} />
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Tags</Label>
                <Input id="tags" type="text" bind:value={tags} />
            </div>


            <!-- Static -->
            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">File Name</Label>
                <Input id="name" type="text" value={image.name}/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Owner</Label>
                <Input id="owner" type="text" value={image.owner}/>
            </div>


            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Uploaded</Label>
                <Input id="uploadDate" type="date" value={image.uploadDate}/>{image.uploadDate}
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Url</Label>
                <Input id="url" type="text" value={image.url}/>
            </div>

        </div>
    </div>

    <div class="flex gap-4 sticky left-0 bottom-0">
        <Button>Save</Button>
        <Button color="alternative">Close</Button>
    </div>
</Modal>
