import { writable } from 'svelte/store';
import { collection, doc, updateDoc, deleteDoc, addDoc, setDoc } from 'firebase/firestore';
import { sendPasswordResetEmail, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import { db } from '$lib/firebase';
import { query, onSnapshot } from 'firebase/firestore';

console.log(firebaseAuth.currentUser);

// Function to send password reset email
function sendPasswordReset(userEmail: string): void {
	sendPasswordResetEmail(firebaseAuth, userEmail)
		.then(() => {
			// Password reset email sent successfully
			console.log('Password reset email sent to', userEmail);
		})
		.catch((error) => {
			// Error occurred while sending password reset email
			console.error('Error sending password reset email:', error);
		});
}

async function signUp(email: string, password: string) {
	try {
		const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
		const user = userCredential.user;
		console.log('User signed up successfully:', user);
		return user;
	} catch (error) {
		console.error('Error signing up:', error);
		throw error;
	}
}

interface Service {
	[key: string]: any;
}

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

	onSnapshot(
		q,
		(querySnapshot) => {
			const tutorsArray: Tutor[] = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data() as Tutor;
				tutorsArray.push({ ...data });
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
	Object.keys(sanitizedObj).forEach((key) => {
		if (sanitizedObj[key] === undefined) {
			// Convert undefined values to null
			sanitizedObj[key] = null;
		}
	});
	return sanitizedObj;
}

export async function deleteTutor(tutorId: string) {
	const tutorRef = doc(db, 'tutors', tutorId);

	try {
		await deleteDoc(tutorRef);
		console.log('Tutor deleted successfully from Firestore');
	} catch (error) {
		console.error('Error deleting tutor:', error);
		throw error;
	}
}

export async function addTutor(newTutor: any) {
	try {
        const user = await signUp(newTutor.email, "123456");
		await addDoc(collection(db, 'tutors'), {...newTutor, userUID: user.uid});
		sendPasswordReset(newTutor.email);
		console.log('Tutor added successfully to Firestore');
	} catch (error) {
		console.error('Error adding new tutor:', error);
		throw error;
	}
}
