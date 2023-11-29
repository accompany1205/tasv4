import type { InputValue } from "@portabletext/svelte/dist/ptTypes"


export default interface StaticCardGridData {
    _type: "staticCardGridBlock",
    heading: string,
    cards: {
        heading: string,
        icon: "tutoring" | "collaborative" | "contract",
        body: InputValue
    }[],
    bg: string
}