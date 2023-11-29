import type { InputValue } from "@portabletext/svelte/dist/ptTypes"

export default interface RichBlockData {
    _type: "richBlock",
    heading: string,
    body: InputValue,
    gallery?: {
        _type: "image",
        caption: string,
        asset: {
            _type: "reference",
            _ref: string
        }
    }[],
    button?: {
        buttonText: string,
        actionIdent?: string,
        enhancedUrl: {
            url: string,
            params: {
                name: string,
                value: string
            }
        }
    },
    layout?: string,
    bg?: string
}