<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    import { Label, Input } from 'flowbite-svelte';

    export let image: any;
    let defaultModal = false;
</script>

<Button color="alternative" on:click={() => (defaultModal = true)}>Edit</Button>

<Modal title="Edit Media" bind:open={defaultModal} size="xl" autoclose class="max-h-[80vh] overflow-y-auto">
    <div class="flex">

        <div class="w-1/2">
            <img src={image.url} alt={image.alt} class="object-cover sticky top-0"/>
        </div>

        <div class="grid gap-4 sm:grid-cols-1 px-10 w-1/2 overflow-y-auto">
            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>
            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>


            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>


            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>

            <div class="mb-6">
                <Label for="input-group-1" class="block mb-2">Your Email</Label>
                <Input id="email" type="email" placeholder="name@flowbite.com"/>
            </div>

        </div>
    </div>

    <div class="flex gap-4 sticky left-0 bottom-0">
        <Button>Save</Button>
        <Button color="alternative">Close</Button>
    </div>
</Modal>
