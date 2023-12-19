<script lang="ts">
	import { headshots } from '$lib/tutors';

	export let featuredTutors = [''];
	let _class: string = '';

	export { _class as class };
</script>

<div class="{_class}">
	{#each featuredTutors as tutorID, index}
		<div class="-mx-4 flex-shrink-0 first:m-0">
			<img
				srcset="{headshots[tutorID]}"
				alt="Featured Tutor"
				class="h-20 w-20 flex-shrink-0 rounded-full p-1"
				width="80"
				height="80"
			/>
		</div>
	{/each}
</div>
