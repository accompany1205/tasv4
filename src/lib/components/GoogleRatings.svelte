<script lang="ts">
    import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
    export let rating = 5.0;
    export let ratingCount = 244;
</script>

<!-- Google Review -->
<div class="flex justify-start border-white border-2 rounded-2xl my-4">
    <a class="w-1/4 min-w-[100px] p-2" href="https://www.google.com/maps/place/TutorsAndServices.com/@39.739301,-104.9816413,17z/data=!4m8!3m7!1s0x876c7f11e86d4569:0xf20a041fd855df4f!8m2!3d39.7393011!4d-104.9767704!9m1!1b1!16s%2Fg%2F11jj0j4_81?entry=ttu" target="_blank" rel="noopener noreferrer">
        <img src="temp/google.webp" class="flex-shrink-0 object-contain object-center" alt="Google Review">
    </a>

    <div class="font-akshar text-white flex flex-col justify-between w-3/4 p-4">
        <div>Google Rating</div>

        <div class="flex items-center">
            <span>{rating}</span>
            <Rating class="w-24 h-5" id="google-rating" total={5} size={50} rating={rating} />
        </div>

        <div>Based on {ratingCount} Reviews</div>
    </div>
</div>
