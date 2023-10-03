<script lang="ts">
	import type { Tutor } from '$lib/tutors.ts';
	import TutorCard from '$lib/components/TutorCard.svelte';
	export let tutors: Tutor[];
	const breakpoints = '{"320": {"slidesPerView": 1}, "1440":{"slidesPerView": 2}}';
	const autoplay = '{delay:3000}'
</script>

<div class="h-[300px] swiper">
	<swiper-container height="300px" breakpoints="{breakpoints}" autoplay="{autoplay}" effect='slide' grab-cursor="true"  loop="true">
		{#each tutors as tutor}
			<swiper-slide>
				<div class="mx-8 w-auto flex-shrink-0">
					<TutorCard tutor="{tutor}" class="m-auto flex-shrink-0" />
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
