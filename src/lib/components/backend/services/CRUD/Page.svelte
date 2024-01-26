<script lang="ts">
	import { Button, Input, Select, Textarea  } from "flowbite-svelte";
	import { onMount } from "svelte";
    import { Tooltip } from 'flowbite-svelte';
    import { Radio } from 'flowbite-svelte';

    let tos = [
        { value: 'T', name: 'Tutoring' },
        { value: 'S', name: 'Services' },
        { value: 'B', name: 'Both' }
    ];
    export let services: any[] = [];
    export let tutors: any[] = [];

    let current:string;
    let tooltipClass="py-2 px-3 text-sm font-medium mx-[-20px] z-50"

    onMount(() => {
        if (services.length > 0) {
            current = services[0].id; // Set current to the first service's ID
        }
    });
</script>

<style>
    .scrollbar::-webkit-scrollbar {
        width: 4px !important;
        height: 4px !important;
        border-radius: 20px;
    }

    .scrollbar::-webkit-scrollbar-track {
        background: #f9fafb;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        background: #b1b1b1;
    }

    .scrollbar::-webkit-scrollbar-thumb:hover {
        background: #dcdcdc ;
    }
</style>


<div class="m-auto max-w-7xl rounded-xl flex gap-4 p-4 overflow-x-auto scrollbar justify-center">
    <!-- Nav -->
    {#each services as service (service.id)}
        <Button color="alternative" class="w-fit shadow-md {service.id === current ? 'border-emerald-300 border-2' : ''}" on:click={() => current = service.id}>
            {service.name}
        </Button>
    {/each}
</div>

<div class="m-auto max-w-7xl bg-white rounded-xl border-2 border-gray-200 p-4 overflow-x-auto scrollbar mt-4 flex gap-10 mb-20">
    <!-- Page View -->
    {#if current}
        {#each services as service (service.id)}
            {#if service.id === current}
                
                <div class="w-2/5 flex flex-col gap-4">
                    <!-- Inputs -->
                        <Input id="name-{service.id}" class="text-3xl text-emerald-400 font-bold border-0 bg-transparent p-0 m-0" value="{service.name}"></Input>
                        <Input id="title-{service.id}" class="text-xl text-gray-800 border-0 bg-transparent p-0 m-0" value="{service.title}"></Input>
                        <Textarea
                            id="about-{service.id}"
                            rows=4
                            class="text-md bg-transparent p-2 m-0"
                            unWrappedClass="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            value="{service.about}"
                        >
                        </Textarea>
                        <Select id="tos-{service.id}" class="mt-2" items={tos} />
                        <div class="flex gap-2">
                            {#each tutors as tutor (tutor.id)}
                                <img src="{tutor.headshot}" alt="" class="rounded-full max-w-16">
                            {/each}
                        </div>

                    <!-- Tooltips -->
                        <Tooltip type="auto" triggeredBy="[id^='name-{service.id}']" placement='left' defaultClass={tooltipClass}>Service Name</Tooltip>
                        <Tooltip type="auto" triggeredBy="[id^='title-{service.id}']" placement='left' defaultClass={tooltipClass}>Service Title</Tooltip>
                        <Tooltip type="auto" triggeredBy="[id^='about-{service.id}']" placement='left' defaultClass={tooltipClass}>About Service</Tooltip>
                        <Tooltip type="auto" triggeredBy="[id^='tos-{service.id}']" placement='left' defaultClass={tooltipClass}>Type of Service</Tooltip>


                </div>

                <div class="w-3/5">
                    <div class="w-full h-[1000px] bg-red-200 object-cover rounded-xl shadow-lg text-center">Iframe goes Here</div>
                    <!-- <iframe src="/" class="w-full h-[1000px] object-cover rounded-xl shadow-lg" title="Website Preview"></iframe> -->
                </div>
      
            {/if}
        {/each}
    {/if}
</div>