import { derived, writable } from 'svelte/store';
import { collection } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { query, onSnapshot } from 'firebase/firestore';
import { signup, sendPasswordResetEmailToUser, _addDoc, _updateDoc, _deleteDoc } from '$lib/api';
// import { send } from 'vite';

export interface Tutor {
    description: string;
    email: string;
    first: string;
    headshot: string;
    id: string;
    last: string;
    name: string;
    phone: string;
    rate: string;
    services: string[];
    status: string;
    title: string;
    visible: boolean;
    images: string[];
}

export const filterText = writable('');
export const tutors = writable<Tutor[]>([]);
export let loading = writable(true);

export const filteredTutors = derived(
    [tutors, filterText],
    ([$tutors, $filterText]) => {
        return $tutors.filter(tutor =>
            tutor.name?.toLowerCase().includes($filterText.toLowerCase()) ||
            tutor.email?.toLowerCase().includes($filterText.toLowerCase())
        );
    }
);

function fetchTutors() {
	const tutorsCollectionRef = collection(db, 'tutors');
	const q = query(tutorsCollectionRef);

	onSnapshot(
		q,
		(querySnapshot) => {
			const tutorsArray: Tutor[] = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data() as Tutor;
				tutorsArray.push({ ...data, id: doc.id });
			});
			tutors.set(tutorsArray);
			loading.set(false);
		},
		(error) => {
			console.error('Error fetching tutors from Firestore:', error);
			loading.set(false);
		},
	);
}

fetchTutors();

export async function updateTutor(updatedTutor: Tutor) {

	try {
		await _updateDoc('tutors', updatedTutor);
		console.log('Tutor updated successfully in Firestore');
	} catch (error) {
		console.error('Error updating tutor:', error);
		throw error;
	}
}

export async function deleteTutor(tutorId: string) {
	// const tutorRef = doc(db, 'tutors', tutorId);

	try {
		await _deleteDoc("tutors", tutorId);
		console.log('Tutor deleted successfully from Firestore');
	} catch (error) {
		console.error('Error deleting tutor:', error);
		throw error;
	}
}

export async function addTutor(newTutor: any) {
	try {
        const userUID: string | undefined = await signup(newTutor.email, "123456");
		await _addDoc('tutors', {...newTutor, userUID: userUID ?? ""});
		await sendPasswordResetEmailToUser(newTutor.email);
		console.log('Tutor added successfully to Firestore');
	} catch (error) {
		console.error('Error adding new tutor:', error);
		throw error;
	}
}
