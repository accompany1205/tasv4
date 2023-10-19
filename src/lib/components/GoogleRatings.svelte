<script lang="ts">
    import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
    export let rating = 5.0;
    export let ratingCount = 244;
</script>

<!-- Google Review -->
<div class="flex justify-start border-white border-2 rounded-2xl my-4">
    <img src="temp/google.webp" class="w-1/4 min-w-[100px] p-2 flex-shrink-0 object-contain object-center" alt="">

    <div class="font-akshar text-white flex flex-col justify-between w-3/4 p-4">
        <div>Google Rating</div>

        <div class="flex items-center">
            <span>{rating}</span>
            <Rating class="w-24 h-5" id="google-rating" total={5} size={50} rating={rating} />
        </div>

        <div>Based on {ratingCount} Reviews</div>
    </div>
</div>

