import type { InputValue } from "@portabletext/svelte/dist/ptTypes"


export default interface FaqBlock {
    _type: "faqBlock",
    heading: string,
    questions: {
        heading: string,
        body: InputValue
    }[],
    bg: string
}