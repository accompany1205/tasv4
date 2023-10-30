<script lang="ts">
    import {PortableText} from '@portabletext/svelte'

	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
    export let data = [{
        heading: "jimmy", 
        body: [{
            children: []
        }]
    }]
</script>

<Section name="faq">
	<h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
		>Frequently asked questions</h2
	>
	<Faq>
		<div>
            {#each data as entry}
                <FaqItem>
                    <svelte:fragment slot="h3">{entry.heading}</svelte:fragment>
                    <PortableText
                        value={entry.body}
                        components={{}}
                    />
                </FaqItem>
            {/each}

		</div>
	</Faq>
</Section>
