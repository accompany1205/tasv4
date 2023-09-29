<script lang="ts">
	import type { Tutor } from '$lib/tutors.ts';
	import TutorCard from '$lib/components/TutorCard.svelte';
	export let tutors: Tutor[];
	const breakpoints = '{"320": {"slidesPerView": 1}, "720":{"slidesPerView": 2}}';
</script>

<div class="">
	<swiper-container breakpoints="{breakpoints}">
		{#each tutors as tutor}
			<swiper-slide>
				<div class="mx-8 w-auto flex-shrink-0">
					<TutorCard tutor="{tutor}" class="m-auto flex-shrink-0" />
				</div>
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
