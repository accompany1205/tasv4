import type RichBlock from "./RichBlock";
import type { EnhancedRichBlockData } from "./RichBlock";
import type { InputValue } from "@portabletext/svelte/dist/ptTypes"

export default interface TutorPage {
    slug: {current: string},
    pageTitle: string,
    richBlock_TutorHero: EnhancedRichBlockData,
    software: EnhancedRichBlockData[],
    services: EnhancedRichBlockData[],
    specialOffers: EnhancedRichBlockData[],
    details: {
        availability: string,
        location: string,
        minSession: string
    },
    galleryBlock: RichBlock,
    bio: InputValue
}