import type FaqBlock from "./FaqBlock";
import type RichBlock from "./RichBlock";
import type TutorBlock from "./TutorBlock";
import type HeroBlock from "./HeroBlock";
import type BuilderBlock from "./BuilderBlock";
import type TypesOfServices from "./TypesOfServices";
import type StaticCardGridData from "./StaticCardGridData";
import type FormLink from "./FormLink";

export default interface ServicePage {
    _type: "servicePage",
    pageTitle: string,
    service: {_ref: string},
    slug: {current: string}
    heroBlock: HeroBlock,
    servicesBlock: BuilderBlock,
    extrasBlock: BuilderBlock,
    tutorBlock: TutorBlock,
    builderBlock: BuilderBlock,
    staticCardGridBlock: StaticCardGridData,
    formLink: FormLink
}