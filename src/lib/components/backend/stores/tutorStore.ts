import { writable, get } from 'svelte/store';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { query, onSnapshot, getFirestore } from 'firebase/firestore';

export const tutors = writable([]);

function fetchTutors() {
    const tutorsCollectionRef = collection(db, 'tutors');
    const q = query(tutorsCollectionRef);

    onSnapshot(q, (querySnapshot) => {
        const tutorsArray:any = [];
        querySnapshot.forEach((doc) => {
            tutorsArray.push({ id: doc.id, ...doc.data() });
        });
        tutors.set(tutorsArray);
    }, 
    (error) => {
        console.error("Error fetching tutors from Firestore:", error);
    });
}

fetchTutors();