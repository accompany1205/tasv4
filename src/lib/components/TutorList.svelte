<script lang="ts">
	import TutorCard from './TutorCard.svelte';
	import { tutors } from '$lib/tutors';
</script>

<div class="m-auto flex w-full flex-wrap justify-center gap-6">
	<!-- {#each tutors as tutor}
		<TutorCard tutor="{tutor}" />
	{/each} -->

	{#each tutors as tutor}
		<TutorCard tutor="{tutor}" />
	{/each}

</div>
