<script lang="ts">
  import { DropdownDivider, Modal } from 'flowbite-svelte';
  import { goto } from '$app/navigation';
  import { Card, Label, Textarea, Input, Button } from 'flowbite-svelte';
  import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';
  
  import tutor from "$lib/assets/icons/tutor.webp?w=64";
  import service from "$lib/assets/icons/services.webp?w=64";
  import tutor_service from "$lib/assets/icons/tutor_service.webp?w=64";

  export let butClass = "max-w-sm items-center bg-emerald-400 p-3 text-center text-3xl font-bold text-white hover:bg-emerald-300";
  export let butTitle = "Get Started Today";
  
  let clickOutsideModal = false;
  let type1 = '';
  let type2 = '';
  let type3 = '';
  let hoverColor = 'bg-emerald-200 text-black hover:bg-emerald-200';
  let selectedValue = '';

  function handleType(selected: number) {
    type1 = selected === 1 ? hoverColor : '';
    type2 = selected === 2 ? hoverColor : '';
    type3 = selected === 3 ? hoverColor : '';

    switch (selected) {
      case 1:
        selectedValue = 'A Tutor (Help me learn)';
        break;
      case 2:
        selectedValue = 'A Service (Do the work for me)';
        break;
      case 3:
        selectedValue = 'Both';
        break;
      default:
        selectedValue = '';
    }
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);


    const response = await fetch('/', {
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

<Button
  class={butClass}
  on:click={() => (clickOutsideModal = true)}
>
  {butTitle}
</Button>

<Modal title="Information Form" bind:open={clickOutsideModal} outsideclose class="z-50">  
    <form class="p-5 overflow-auto" on:submit={handleSubmit}>
      <Label class="block mb-2 text-sm">What do you need?</Label>

      <Input id="typeInputHelper" size="sm" placeholder="You should not be seeing this" class="hidden" name="submission[27]" value={selectedValue}/>
      <div class="flex gap-4">
        <Button type="button" name="submission[27]" value="A Tutor (Help me learn)" class="w-24 h-24 block text-black hover:bg-emerald-100 hover:text-black {type1}" color="none" on:click={() => handleType(1)}>
          <img alt="Tutoring" src="{tutor}">
          <p>Tutoring</p>
        </Button>

        <Button type="button" class="w-24 h-24 block text-black hover:bg-emerald-100 hover:text-black {type2}" color="none" on:click={() => handleType(2)}>
          <img alt="Services" src="{service}">
          <p>Services</p>
        </Button>

        <Button type="button" class="w-24 h-24 block text-black hover:bg-emerald-100 hover:text-black {type3}" color="none" on:click={() => handleType(3)}>
          <img alt="Both" src="{tutor_service}">
          <p>Both</p>
        </Button>
      </div>

      <Label class="block mt-8 mb-2 text-sm">What do you need help with?*</Label>
      <Textarea required id="desc" name="submission[31]" rows=4 class="mt-2"/>

      <DropdownDivider class="mt-6"/>

      <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div class="w-full">
          <Label class="mt-8 mb-2 text-sm">First Name*
            <Input id="firstName" name="submission[75][first]" required placeholder="" class="mt-2" autocomplete="on"/>
          </Label>
        </div>

        <div class="w-full">
          <Label class="mt-8 mb-2 text-sm">Last Name
            <Input id="lastName" name="submission[75][last]" placeholder="" class="mt-2" autocomplete="on"/>
          </Label>
        </div>

        <div class="w-full">
          <Label class="mt-8 mb-2 text-sm">Email*
            <Input id="email" name="submission[9]" required placeholder="" class="mt-2" autocomplete="on"/>
          </Label>
        </div>

        <div class="w-full">
          <Label class="mt-8 mb-2 text-sm">Phone
            <Input type="text" id="phone" name="submission[62]" placeholder="" class="mt-2" autocomplete="on"/>
          </Label>
        </div>
      </div>

      <DropdownDivider class="my-6"/>

      <div class="flex gap-5">
        <Button type="submit" class="w-full bg-emerald-400 hover:bg-emerald-300 text-xl" size="xl">Submit Form</Button>
      </div>
    </form>
</Modal>
