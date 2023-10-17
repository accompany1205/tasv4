<script>
    import '@fontsource-variable/akshar';
    import ServiceTags from './ServiceTags.svelte';

    let keywordsArray = [
    "SketchUp",
    "AutoCAD",
    "Blender"
    ];

</script>

<style>
    .card-size {
        width: 350px;
        height: 700px;
    }
</style>
  
<div class="card-size bg-white rounded shadow-lg mx-auto font-akshar">
    <!-- Image -->
    <div class="w-full">
        <img src="/temp/sketchup_9.webp" alt="Matthew W" class="">
    </div>

    <!-- Tutor Info -->
    <div class="flex overflow-x-clip">
        <!-- Headshot -->
        <div class="flex-shrink-0 -mt-10 -ml-4">
            <img src="/tutors/18836/hs.webp" alt="Matthew W" class="flex-shrink-0 rounded-full w-28 h-28 border-emerald-400 border-2 p-1">
        </div>

        <!-- Name -->
        <div class="p-2">
            <div class="text-4xl font-bold">Matthew W</div>
            <span class="text-yellow-300 font-medium">5⭐ 50 Reviews</span>
            <span class="text-gray-500 font-medium">• Expert • $100/hr</span>
        </div>
    </div>

    <!-- Software Tags -->
    <div class="m-2 p-1">
        <ServiceTags keywords={keywordsArray} />
    </div>

    <!-- Title -->
    <div class="m-2 p-1 text-center text-xl">Advanced AutoCAD and Sketchup Tutor for Architecture</div>

    <!-- Services -->
    <div class="m-2 p-1">
        <div class="font-semibold">Services I Provide:</div>
        <ul class="list-disc pl-5 mt-2 text-gray-500">
            <li>Architectural Modeling</li>
            <li>Building Custom Dynamic Components</li>
            <li>Architectural Plans</li>
            <li>Architectural Rendering</li>
            <li>3D Modeling</li>
        </ul>
    </div>

    <!-- Buttons -->
    <div class="m-2 p-1 flex justify-between">
        <button class="bg-alabaster-300 text-white text-sm rounded mx-4 p-1">Learn More About Matthew W</button>
        <button class="bg-emerald-400 text-white text-sm rounded mx-4 p-1">Book A Free Consultation</button>
    </div>
</div>
