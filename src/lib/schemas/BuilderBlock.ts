import type FaqBlock from "./FaqBlock";
import type RichBlock from "./RichBlock";
import type TutorBlock from "./TutorBlock";
import type HeroBlock from "./HeroBlock";

export default interface BuilderBlock {
    _type: "builderBlock",
    blockHeading: string,
    layout: string,
    blocks: Array<
        FaqBlock 
        | RichBlock 
        | TutorBlock 
        | HeroBlock
    >
}