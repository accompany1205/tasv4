// collections.ts
import { writable, get } from 'svelte/store';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';

const collectionsStore = writable<Record<string, any[]> | null>(null);

async function fetchAllCollections() {
    let currentData = get(collectionsStore);
    if (!currentData) {
        const collectionNames = ['media', 'services', 'tutors'];
        const collections: Record<string, any[]> = {};

        for (const name of collectionNames) {
            const querySnapshot = await getDocs(collection(db, name));
            const documents = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            collections[name] = documents;
        }

        collectionsStore.set(collections);
        currentData = collections;
    }
    return currentData;
}

export { collectionsStore, fetchAllCollections };
