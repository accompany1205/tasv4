<script lang="ts">
    import type { PageData } from './$types';
    import TutorCardModal from '$sanity/cards/TutorCardModal.svelte';

    import Builder from '$sanity/blocks/Builder.svelte';
    import SwipeBlock from '$sanity/blocks/SwipeBlock.svelte';
    import HeroBlock from '$sanity/blocks/HeroBlock.svelte';
    import TutorCard from '$sanity/cards/TutorCard.svelte';
    import StaticCardGridBlock from '$sanity/blocks/StaticCardGridBlock.svelte';
    
    export let data: PageData;
    // @ts-ignore
    const page_data = data.page[0];
</script>

<svelte:head>
    <title>{page_data.pageTitle}</title>
</svelte:head>

<main >
    <HeroBlock heroBlock={page_data.heroBlock}/>
    <SwipeBlock>
        {#each page_data.tutorBlock.featuredTutors as tutor}
            <swiper-slide class="w-fit">
                <div class=" h-[100cqh] min-w-[16rem] max-w-sm  flex-shrink-0 p-0">
                    <TutorCard {tutor} formLink={page_data.formLink}/>
                </div>
            </swiper-slide>
        {/each}
    </SwipeBlock>
    <TutorCardModal formLink={page_data.formLink}/>
    <StaticCardGridBlock data={page_data.typesOfServices}/>
    <div class=" py-4 text-white">
        <Builder data={page_data.builderBlock}/>
    </div>
</main>
