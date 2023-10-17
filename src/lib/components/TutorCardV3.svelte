<script lang="ts">
    import '@fontsource-variable/akshar';
    import ServiceTags from './ServiceTags.svelte';
    import type { Tutor } from '$lib/tutors.ts';

    let keywordsArray = [
    "SketchUp",
    "AutoCAD",
    "Blender"
    ];
    let _class = "";
	export { _class as class };
	export let tutor: Tutor;
</script>

<style>
    .card-size {
        width: 350px;
        height: auto;
    }
</style>
  
<div class="card-size bg-white rounded shadow-lg mx-auto font-akshar grid grid-rows-[auto_1fr_auto] {_class}">
    <div>
        <!-- Image -->
        <div class="w-full">
            <img src="/temp/sketchup_9.webp" alt="Matthew W" class="">
        </div>
        <!-- Tutor Info -->
        <div class="flex overflow-x-clip">
            <!-- Headshot -->
            <div class="flex-shrink-0 -mt-10 -ml-4">
                <img src="/tutors/{tutor.id}/hs.webp" alt="Matthew W" class="flex-shrink-0 rounded-full w-28 h-28 border-emerald-400 border-2 p-1">
            </div>
            <!-- Name -->
            <div class="p-2">
                <div class="text-4xl font-bold">{tutor.name}</div>
                <span class="text-yellow-300 font-medium">5⭐ 50 Reviews</span>
                <span class="text-gray-500 font-medium">• Expert • ${tutor.hourlyRate}/hr</span>
            </div>
        </div>

        <!-- Software Tags -->
        <div class="m-2 p-1">
            <ServiceTags keywords={tutor?.software} />
        </div>
    </div>

    <div>
        <!-- Title -->
        <div class="m-2 p-1 text-center text-xl">Advanced AutoCAD and Sketchup Tutor for Architecture</div>
        {#if (tutor?.services?.length ?? 0 > 0)}
            <div class="m-2 p-1">
                <div class="font-semibold">Services I Provide:</div>
                <ul class="list-disc pl-5 mt-2 text-gray-500">
                    {#each tutor?.services ?? [] as service}
                        <li>{service}</li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>

    <!-- Buttons -->
    <div class="m-2 p-1 flex justify-between">
        <button class="bg-alabaster-300 text-white text-sm rounded mx-4 p-1">Learn More About Matthew W</button>
        <button class="bg-emerald-400 text-white text-sm rounded mx-4 p-1">Book A Free Consultation</button>
    </div>
</div>
