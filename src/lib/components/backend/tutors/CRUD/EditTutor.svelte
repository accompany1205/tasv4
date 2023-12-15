<script lang="ts">
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider } from 'flowbite-svelte';

    let defaultModal = false;

    let selected: any;
    let status = [
        { value: 'active', name: 'Active' },
        { value: 'full', name: 'Full' },
        { value: 'hold', name: 'On Hold' }
    ];

    async function handleSubmit(event: any) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);

        const response = await fetch('/backend', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            console.error('New Tutor Added');
        } else {
            console.error('Network response was not ok.');
        }
    }

</script>
    
<a href="javascript:void(0);" on:click={() => (defaultModal = true)} class="hover:underline hover:text-primary-700">Edit Tutor</a>

<Modal title="Edit Tutor" bind:open={defaultModal} outsideclose class="z-50">  
    <form on:submit={handleSubmit}>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="first" class="mt-8 mb-2 text-sm">First
                    <Input class="mt-2" type="text" name="first" id="first" placeholder="First Name" required autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="last" class="mt-8 mb-2 text-sm">Last
                    <Input class="mt-2" type="text" name="last" id="last" placeholder="Last Name" required autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="email" class="mt-8 mb-2 text-sm">Email
                    <Input class="mt-2" type="text" name="email" id="email" placeholder="tutor.tas@gmail.com" required autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="phone" class="mt-8 mb-2 text-sm">Phone
                    <Input class="mt-2" type="text" name="phone" id="phone" placeholder="123-345-6789" required autocomplete="on"/>
                </Label>
            </div>
        </div>   

        <DropdownDivider class="mt-9"/>


        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="rate" class="mt-8 mb-2 text-sm">Rate
                    <Input class="mt-2" type="text" name="rate" id="rate" placeholder="15 ~ 100" required />
                </Label>
            </div>

            <div>
                <Label class="mt-8 mb-2 text-sm">Status
                    <Select class="mt-2" name="status" items={status} bind:value={selected} id="select" required />
                </Label>
            </div>

            <div class="sm:col-span-2">
                <Label for="description" class="mt-8 mb-2 text-sm">Notes on Tutor
                    <Textarea class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" required />
                </Label>
            </div>

            <Button type="submit" class="w-52 mt-4">
                Edit Tutor
            </Button>
        </div>
    </form>
</Modal>
