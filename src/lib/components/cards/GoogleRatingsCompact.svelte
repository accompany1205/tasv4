<script lang="ts">
	import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
	import google_logo from "$lib/assets/icons/google.webp"
	export let rating = 5.0;
	export let ratingCount = 225;
</script>

<!-- Google Review -->
<div
	class="
    my-0
    flex
    h-12
    flex-shrink-0
    flex-grow
    items-center
    justify-evenly
    border-t-4
    border-emerald-400
    bg-white
    p-1
    text-lg
    text-black
    "
>
	<a
		class="w-8"
		href="https://www.google.com/maps/place/TutorsAndServices.com/@39.739301,-104.9816413,17z/data=!4m8!3m7!1s0x876c7f11e86d4569:0xf20a041fd855df4f!8m2!3d39.7393011!4d-104.9767704!9m1!1b1!16s%2Fg%2F11jj0j4_81?entry=ttu"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			src="{google_logo}"
			class="flex-shrink-0 object-contain object-center"
			alt="Google Review"
		/>
	</a>

	<div class="font-akshar">
		<div class="flex items-center">
			<span class="pt-[0.25rem] text-xl">{rating.toFixed(1)}</span>
			<Rating
				class="ml-1 w-20 "
				id="google-rating"
				total="{5}"
				size="{30}"
				rating="{rating}"
			/>
		</div>
	</div>

	<div class="pt-[0.25rem] text-center font-akshar text-gray-600">
		<a
			class="hover:text-nile-blue-300"
			href="https://www.tutorsandservices.com/reviews/"
			target="_blank"
			rel="noopener noreferrer"
		>
			{ratingCount} Reviews
		</a>
	</div>
</div>
