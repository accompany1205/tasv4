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