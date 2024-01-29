<script lang="ts">
    import { Input, Select, Textarea, Label } from 'flowbite-svelte';
    export let service:any;
    export let tos:any;;
    export let tutors:any;
</script>


<div class="w-full flex gap-10">
    <div class="w-1/2 flex flex-col gap-4">
        <div class="mb-4">
            <Label class="block text-sm font-medium text-gray-700">Name</Label>
            <Input class="mt-1 block w-full" type="text" value={service.name}></Input>
        </div>
        <div class="mb-4">
            <Label class="block text-sm font-medium text-gray-700">Title</Label>
            <Input class="mt-1 block w-full" type="text" value={service.title}></Input>
        </div>
        <div class="mb-4">
            <Label class="block text-sm font-medium text-gray-700">About</Label>
            <Textarea rows=4 class="mt-1 block w-full" value={service.about}></Textarea>
        </div>
        <div class="mb-4">
            <Label class="block text-sm font-medium text-gray-700">Type of Service</Label>
            <Select class="mt-1 block w-full" items={tos} />
        </div>
    </div>

    <div class="w-1/2">
        <Label class="block text-sm font-medium text-gray-700">Qualified Tutors</Label>
        <div class="flex gap-2 mt-2" id="tutors-{service.id}">
            {#each tutors as tutor (tutor.id)}
                <img src={tutor.headshot} alt={tutor.name} class="rounded-full max-w-16">
            {/each}
        </div>

        <Label class="mt-12 block text-sm font-medium text-gray-700">Force Tutors</Label>
        <div class="flex gap-2 mt-2" id="tutors-{service.id}">
            Force tutors to be in a service
        </div>

    </div>
</div>