import type RichBlock from "./RichBlock"

export default interface HeroBlock {
    _type: "heroBlock",
    richBlock: RichBlock,
    featuredTutors: {
        _type: "image",
        caption: string,
        asset: {
            _type: "reference",
            _ref: string
        }
    }[],
    button: {
        buttonText: string,
        buttonLink: string
    }
}