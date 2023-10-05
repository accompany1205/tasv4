<script lang="ts">
	import TutorCard from './TutorCard.svelte';
	import { tutors } from '$lib/tutors';
</script>

<div class="m-auto flex w-full flex-wrap justify-center gap-6 max-w-full">
	{#each tutors as tutor}
		<TutorCard tutor="{tutor}" class="max-w-[280px]" />
	{/each}
</div>
