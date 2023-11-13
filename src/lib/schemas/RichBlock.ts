export default interface RichBlock {
    _type: "richBlock",
    layout: string,
    blockHeading: string,
    subHeading: string,
    blockBody: {
        markDefs: [],
        children: {
            _type: string,
            marks: [],
            text: string,
            style: string
        }[],
        style: string,

    }[],
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