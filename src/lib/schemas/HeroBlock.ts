import type RichBlock from "./RichBlock"
import type { InputValue } from "@portabletext/svelte/dist/ptTypes"


export default interface HeroBlock {
    _type: "heroBlock",
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
            }[]
        }
    },
    layout?: string,
    bg?: string

    featuredTutors: {
        _type: "image",
        caption: string,
        asset: {
            _type: "reference",
            _ref: string
        }
    }[],
}