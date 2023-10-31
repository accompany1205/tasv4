// TL;DR: Barrel file for images processed with vite-imagetools
import merge from 'deepmerge'; 

interface AssetMap  {
    [key: string]: string[] | AssetMap
}

export const mega_import: Record<string, string> = import.meta.glob('$lib/assets/**/*.webp', {
    query: {
        format: 'webp',
        w: '512;256;128;', //120;240;480;
        picture: '',
        as: 'srcset',
    },
    import: 'default',
    eager: true,
});   

let mega: AssetMap = {
    actors: [], 
    icons: [], 
    logos: [],  
    "show-case": [],
    sketchup: {
        main: [], 
        services: {}
    },
    tutors: []
}
Object.entries(mega_import).map(([key, value] ) => {
    // @ts-ignore
	let segments: AssetMap = key.split('/').slice(4).reverse().reduce(
        // @ts-ignore
        (res, key)  => ({[key]: res}),
        value
    );
    mega = merge(mega, segments)
})

// console.log(JSON.stringify(mega, undefined, 2))

export { mega }