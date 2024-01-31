<script lang="ts">
	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
	export let faq:any[] = [];
</script>

<Section name="faq">
	<h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
		>Frequently asked questions</h2
	>
	<Faq>
		{#each faq as faq}
			<FaqItem class="m-0">
				<svelte:fragment slot="h3">{faq.question}</svelte:fragment>
				<p class="text-gray-500 dark:text-gray-400">{faq.answer}</p>
			</FaqItem>
		{/each}
	</Faq>
</Section>
