export default interface FaqBlock {
    _type: "faqBlock",
    blockHeading: string,
    questions: {
        heading: string,
        body: {}[]
    }[]
}