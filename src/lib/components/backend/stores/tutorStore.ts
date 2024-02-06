import { writable } from 'svelte/store';
import { collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { query, onSnapshot } from 'firebase/firestore';

interface Service {
    [key: string]: any;
}

interface Tutor {
    description: string;
    email: string;
    first: string;
    headshot: string;
    id: string;
    last: string;
    name: string;
    phone: string;
    rate: string;
    // services: Service[];
    status: string;
    title: string;
    visible: boolean;
}

export const tutors = writable<Tutor[]>([]);
export let loading = writable(true);

function fetchTutors() {
    const tutorsCollectionRef = collection(db, 'tutors');
    const q = query(tutorsCollectionRef);

    onSnapshot(q, (querySnapshot) => {
        const tutorsArray: Tutor[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data() as Tutor;
            tutorsArray.push({ id: doc.id, ...data });
        });
        tutors.set(tutorsArray);
        loading.set(false);
    }, 
    (error) => {
        console.error("Error fetching tutors from Firestore:", error);
        loading.set(false);
    });
}

fetchTutors();

export async function updateTutor(updatedTutor: Tutor) {
    const sanitizedTutor = sanitizeForFirestore(updatedTutor);
    
    const tutorRef = doc(db, 'tutors', sanitizedTutor.id);
    
    try {
        await updateDoc(tutorRef, sanitizedTutor);
        console.log('Tutor updated successfully in Firestore');
    } catch (error) {
        console.error('Error updating tutor:', error);
        throw error;
    }
}


function sanitizeForFirestore(obj: Record<string, any>): Record<string, any> {
    const sanitizedObj = { ...obj };
    Object.keys(sanitizedObj).forEach(key => {
        if (sanitizedObj[key] === undefined) {
            // Convert undefined values to null
            sanitizedObj[key] = null;
        }
    });
    return sanitizedObj;
}
