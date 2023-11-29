import { writable } from 'svelte/store';

interface Gallery {
    _type: "image",
    title: string,
    caption: string,
    asset: {
        _type: "reference",
        _ref: string
    }
}
interface TutorGallery {
    name: string
    images: Gallery[]
}

const empty: TutorGallery = {
    name: "",
    images: []
}

export default writable<TutorGallery>(empty);

