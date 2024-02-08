import { writable } from 'svelte/store';
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';

interface Media {
    id: string;
    show: boolean;
    uploadDate: {
        seconds: number;
        nanoseconds: number;
    };
    alt: string;
    url: string;
    tags: Array<{
        name: string;
        id: string;
        type: string;
    }>;
    title: string;
    owner: string;
    name: string;
}

export const media = writable<Media[]>([]);
export let loadingMedia = writable(true);

function fetchMedia() {
    const mediaCollectionRef = collection(db, 'media');
    const q = query(mediaCollectionRef);

    onSnapshot(q, (querySnapshot) => {
        const mediaArray: Media[] = [];
        querySnapshot.forEach((doc) => {
            mediaArray.push({ id: doc.id, ...doc.data() } as Media);
        });
        media.set(mediaArray);
        loadingMedia.set(false);
    },
    (error) => {
        console.error("Error fetching media from Firestore:", error);
        loadingMedia.set(false);
    });
}


export async function updateMedia(updatedMedia:any) {
    const mediaRef = doc(db, 'media', updatedMedia.id);
    try {
        await updateDoc(mediaRef, updatedMedia);
        console.log('Media updated successfully');
    } catch (error) {
        console.error('Error updating media:', error);
    }
}

fetchMedia();
