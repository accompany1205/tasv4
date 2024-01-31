<script lang="ts">
	import { Rating } from 'flowbite-svelte';
	import google_logo from '$lib/assets/icons/google.webp';
	import { QuoteSolid } from 'flowbite-svelte-icons';

	export let review: GoogleReviewRating;
</script>

<div class="text-gray-500">
	<div class="relative">
		<div
			class="h-[200px] overflow-y-auto bg-white rounded
      after:w-0 after:h-0
      after:absolute
      after:-bottom-[15px] after:left-8
      after:border-l-[15px] after:border-l-transparent
      after:border-t-[15px] after:border-t-white
      after:border-r-[15px] after:border-r-transparent"
		>
			<div class="ml-10 m-5">
				<QuoteSolid size="lg" class="absolute left-3 top-4 text-gray-300 rotate-180" />
				<Rating total="{5}" size="{30}" rating="{review.rating}" />
				{review.comment}
				<img
					src="{google_logo}"
					class="absolute top-4 right-3 flex-shrink-0 object-contain object-center"
					alt="Google Review"
					width="20"
					height="20"
				/>
			</div>
		</div>
	</div>

	<div class="flex items-center justify-start gap-4 p-5 rounded mt-3">
		<img src="{review.image}" alt="Google Review" width="56px" height="56px" />
		<div class="flex flex-col text-white gap-1">
			<span class="text-base font-semibold">{review.name}</span>
			<span class="text-sm font-normal">{review.date}</span>
		</div>
	</div>
</div>
