import { writable } from 'svelte/store';
import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const tutorStatusOptions = writable<string[]>([]);

async function fetchTutorStatusOptions() {
    const docRef = doc(db, 'settings', 'tutorStatus');
    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const data = docSnap.data();

            if (data.options && Array.isArray(data.options)) {
                tutorStatusOptions.set(data.options);
            } else {
                console.warn('No options array found or it is not an array');
            }
        } else {
            console.warn('No document found with ID "tutorStatus"');
        }
    } catch (error) {
        console.error("Error fetching tutor status options from Firestore:", error);
    }
}

fetchTutorStatusOptions();