<script lang="ts">
    import type FaqBlock from '$lib/schemas/FaqBlock';
    import {PortableText} from '@portabletext/svelte'

	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
    export let data: FaqBlock;
    export let sectionClass = "relative py-6 sm:py-10"
    export let h3Class = "flex items-center mb-4 text-lg font-medium dark:text-white"
</script>

<Section name="faq" {sectionClass}>
	<h2 class="mb-8 text-4xl font-extrabold tracking-tight  "
		>Frequently asked questions</h2
	>
	<Faq>
		<div>
            {#each data.questions as question}
                <FaqItem {h3Class}>
                    <svelte:fragment slot="h3">{question.heading}</svelte:fragment>
                    <PortableText
                        value={question.body}
                        components={{}}
                    />
                </FaqItem>
            {/each}
		</div>
	</Faq>
</Section>
