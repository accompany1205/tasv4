<script lang="ts">
    import type FaqBlock from '$lib/schemas/FaqBlock';
    import {PortableText} from '@portabletext/svelte'

	import { Section, Faq, FaqItem } from 'flowbite-svelte-blocks';
    export let data: FaqBlock;
    export let sectionClass = "relative py-6 sm:py-10"
    export let h3Class = "flex items-center mb-4 text-lg font-medium dark:text-white"

    let background = "";
    let title = ""
    // TODO: Move this out into utility function
    switch (data.bg) {
        case "dark-blue":
            background = 'bg-nile-blue-900';
            title = "text-white";
            break;
        case "light-blue":
            background = 'bg-bay-of-many-700';
            title = "text-white";
            break;
        case "white":
            background = 'bg-alabaster-50';
            title = "text-black";
            break;
        case "grey":
            background = 'bg-alabaster-200';
            title = "text-black";
            break;
        case "green":
            background = 'bg-emerald-400';
            title = "text-white";
            break;
    }
</script>

<Section name="faq" sectionClass="{sectionClass} {background}" class="{title}">
	<h2 class="mb-8 text-4xl font-extrabold tracking-tight {title} "
		>Frequently asked questions</h2
	>
	<Faq>
		<div>
            {#each data.questions as question}
                <FaqItem h3Class="{h3Class} {title} " divClass="mb-10 {title}">
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
