import type TutorData from "./TutorData"

export default interface TutorBlock {
    _type: "tutorBlock",
    blockHeading: string,
    featuredTutors: TutorData[]
}