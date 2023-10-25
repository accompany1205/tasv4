<script lang="ts">
	import TutorCard from '$lib/components/cards/TutorCard.svelte';
	import { tutors } from '$lib/tutors';
</script>

<div class="m-auto flex w-full max-w-full flex-wrap justify-center gap-6 overflow-x-hidden">
	{#each tutors as tutor}
		<TutorCard tutor="{tutor}" class="max-w-[280px]" />
	{/each}
</div>
