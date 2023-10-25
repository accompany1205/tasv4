<script lang="ts">
    import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
    export let rating = 5.0;
    export let ratingCount = 225;
</script>

<!-- Google Review -->
<div class="flex flex-shrink-0 justify-evenly items-center	p-1 border-emerald-400 border-t-4 bg-white text-black my-4 text-lg h-auto w-full max-w-sm">
    <a class="w-10" href="https://www.google.com/maps/place/TutorsAndServices.com/@39.739301,-104.9816413,17z/data=!4m8!3m7!1s0x876c7f11e86d4569:0xf20a041fd855df4f!8m2!3d39.7393011!4d-104.9767704!9m1!1b1!16s%2Fg%2F11jj0j4_81?entry=ttu" target="_blank" rel="noopener noreferrer">
        <img src="temp/google.webp" class="flex-shrink-0 object-contain object-center" alt="Google Review">
    </a>

    <div class="font-akshar">
        <div class="flex items-center">
            <span class="text-2xl pt-[0.25rem]">{rating.toFixed(1)}</span>
            <Rating class="ml-1 w-32 h-10" id="google-rating" total={5} size={50} rating={rating} />
        </div>
    </div>

    <div class="text-gray-600 font-akshar text-center pt-[0.25rem]">
        <a class="hover:text-nile-blue-300"href="https://www.google.com/maps/place/TutorsAndServices.com/@39.739301,-104.9816413,17z/data=!4m8!3m7!1s0x876c7f11e86d4569:0xf20a041fd855df4f!8m2!3d39.7393011!4d-104.9767704!9m1!1b1!16s%2Fg%2F11jj0j4_81?entry=ttu" target="_blank" rel="noopener noreferrer">
            {ratingCount} Reviews
        </a>
    </div>
</div>
