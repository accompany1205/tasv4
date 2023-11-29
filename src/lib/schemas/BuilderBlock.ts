import type FaqBlock from "./FaqBlock";
import type RichBlockData from "./RichBlock";
import type TutorBlock from "./TutorBlock";
import type HeroBlock from "./HeroBlock";

export default interface BuilderBlock {
    _type: "builderBlock",
    blockHeading: string,
    layout: string,
    blocks: Array<
        FaqBlock 
        | RichBlockData 
        | TutorBlock 
        | HeroBlock
    >
}