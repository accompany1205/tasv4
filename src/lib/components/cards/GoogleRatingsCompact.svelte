<script lang="ts">
	import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';
	import google_logo from '$lib/assets/icons/google.webp?w=64';
	export let rating = 5.0;
	export let ratingCount = 225;
</script>

<!-- Google Review -->
<a
	class=""
	href="https://www.tutorsandservices.com/reviews/"
	target="_blank"
	rel="noopener noreferrer"
>
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
		<img
			src="{google_logo}"
			class="flex-shrink-0 object-contain object-center w-8"
			alt="Google Review"
			width="64"
			height="64"
		/>

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
			<!-- <a
				class="hover:text-nile-blue-300"
				href="https://www.tutorsandservices.com/reviews/"
				target="_blank"
				rel="noopener noreferrer"
			> -->
			{ratingCount} Reviews
			<!-- </a> -->
		</div>
	</div>
</a>
