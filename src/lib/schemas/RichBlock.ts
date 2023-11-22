import type { InputValue } from "@portabletext/svelte/dist/ptTypes"

export default interface RichBlock {
    _type: "richBlock",
    layout: string,
    blockHeading: string,
    subHeading: string,
    blockBody: InputValue,
    imageGallery: {
        _type: "image",
        caption: string,
        asset: {
            _type: "reference",
            _ref: string
        }
    }[],
    bg: string
}

export interface EnhancedRichBlockData {
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