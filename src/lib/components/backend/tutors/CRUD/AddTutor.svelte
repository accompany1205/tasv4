<script lang="ts">
    import { Section } from 'flowbite-svelte-blocks';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';

    let defaultModal = false;

    let selected: any;
    let status = [
        { value: 'active', name: 'Active' },
        { value: 'full', name: 'Full' },
        { value: 'hold', name: 'On Hold' }
    ];
</script>
    
<Button on:click={() => (defaultModal = true)}>Add Tutor</Button>

<Modal title="Add Product" bind:open={defaultModal} autoclose class="min-w-full" backdropClass="fixed m-0 ml-0 p-0 inset-0 z-40 bg-gray-900 bg-opacity-50 dark:bg-opacity-80">
    <form action="/backend" method="post">
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="first" class="mb-2">First</Label>
                <Input type="text" id="first" placeholder="First Name" required />
            </div>

            <div>
                <Label for="last" class="mb-2">Last</Label>
                <Input type="text" id="last" placeholder="Last Name" required />
            </div>

            <div>
                <Label for="email" class="mb-2">Email</Label>
                <Input type="text" id="email" placeholder="tutor.tas@gmail.com" required />
            </div>

            <div>
                <Label for="phone" class="mb-2">Phone</Label>
                <Input type="text" id="phone" placeholder="123-345-6789" required />
            </div>
        </div>   

        <DropdownDivider class="my-8"/>


        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="rate" class="mb-2">Rate</Label>
                <Input type="text" id="rate" placeholder="15 ~ 100" required />
            </div>

            <div>
                <Label>Status</Label>
                <Select class="mt-2" items={status} bind:value={selected} required />
            </div>

            <div class="sm:col-span-2">
                <Label for="description" class="mb-2">Notes on Tutor</Label>
                <Textarea id="description" placeholder="Your description here" rows="4" name="description" required />
            </div>

            <Button type="submit" class="w-52 mt-4">
                Add New Tutor
            </Button>
        </div>
    </form>
</Modal>
