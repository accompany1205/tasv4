<script lang="ts">
	import { Card, Avatar, Button } from 'flowbite-svelte';
	import type { Tutor } from '$lib/tutors.ts';
	export let tutor: Tutor;
	let _class = '';
	export { _class as class };
</script>

<Card padding="sm" class="mx-4 mb-0 flex-grow-[1] {_class}">
	<div class="flex flex-col items-center pb-4">
		<Avatar size="lg" src='/tutors/{tutor.id}/hs.webp' />
		<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{tutor.name} • ${tutor.hourlyRate}/hr</h5>
		<span class="text-center text-sm text-gray-500 dark:text-gray-400">{tutor.title}</span>
		<div class="mt-4 flex space-x-3 lg:mt-6">
			<Button
				href="https://www.tutorsandservices.com/{tutor.first}-{tutor.id}/"
				class="transform border-2 border-solid border-emerald-400 text-black transition-transform duration-500 ease-in-out hover:scale-105"
				>Learn More</Button
			>
		</div>
	</div>
</Card>

<!-- src\lib\assets\tutors\1619\hs.webp -->
<!-- src\lib\components\TutorCard.svelte -->