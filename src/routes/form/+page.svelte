<script lang="ts">
	import { goto } from '$app/navigation';
	import { Card, Label, Textarea, Radio, DropdownDivider, Input, Helper, Button } from 'flowbite-svelte';

    async function handleSubmit(event:any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch('/form', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const result = await response.json();      
            goto('/thanks');
        } else {
            console.error('Network response was not ok.');
        }
    }

</script>

<svelte:head>
	<title>Sketchup PreForm</title>
</svelte:head>

<Card class="w-full max-w-3xl m-auto my-20">
	<form class="p-5" on:submit={handleSubmit}>

		<!-- Project Info -->
		<Label class="block mt-0 mb-2">What do you need?
			<Radio name="submission[27]" value="A Tutor (Help me learn)" class="m-2">Tutoring</Radio>
			<Radio name="submission[27]" value="A Service (Do the work for me)" class="m-2">Services</Radio>
			<Radio name="submission[27]" value="Both" class="m-2">Both</Radio>
		</Label>

		<Label class="block mt-8 mb-2">What do you need help with?
			<Textarea required id="desc" name="submission[31]" rows=4 class="mt-2"/>
		</Label>

		<DropdownDivider class="mt-6"/>


		<!-- Client Info -->
		<div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
			<div class="w-full">
				<Label class="mt-8 mb-2">First Name*
					<Input id="firstName" name="submission[75][first]" required placeholder="" class="mt-2" autocomplete="on"/>
				</Label>
			</div>

			<div class="w-full">
				<Label class="mt-8 mb-2">Last Name
					<Input id="lastName" name="submission[75][last]" placeholder="" class="mt-2" autocomplete="on"/>
				</Label>
			</div>

			<div class="w-full">
				<Label class="mt-8 mb-2">Email*
					<Input id="email" name="submission[9]" required placeholder="" class="mt-2" autocomplete="on"/>
				</Label>
			</div>

			<div class="w-full">
				<Label class="mt-8 mb-2">Phone
					<Input type="text" id="phone" name="submission[62]" placeholder="" class="mt-2" autocomplete="on"/>
				</Label>
			</div>
		</div>

		<DropdownDivider class="my-6"/>

		<!-- Submit -->
		<div class="w-full flex">
			<Button type="submit" class="m-auto max-w-md  bg-emerald-400 hover:bg-emerald-300 text-xl" size="xl">Submit Form</Button>
		</div>
			
	</form>
</Card>