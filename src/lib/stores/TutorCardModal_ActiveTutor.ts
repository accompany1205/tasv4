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

const images: Gallery[] = []

export default writable<Gallery[]>(images);

