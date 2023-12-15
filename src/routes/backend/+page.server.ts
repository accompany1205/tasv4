import type { Actions } from './$types';
import { db } from '$lib/firebase'; // Ensure the path is correct
import { collection, addDoc } from 'firebase/firestore';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData); // This will log the form data to your server console

		// Construct an object with the form data
		const formEntry = {
			first: formData.get('first'),
			last: formData.get('last'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			rate: formData.get('rate'),
			status: formData.get('status'),
			description: formData.get('description')
		};

		try {
			// Add data to Firebase
			const docRef = await addDoc(collection(db, 'tutors'), formEntry);

			console.log('Document written with ID: ', docRef.id);

			// You could return a response here or redirect the user
			return {
				status: 303,
				headers: {
					location: '/success' // Redirect to a success page
				}
			};
		} catch (e) {
			console.error('Error adding document: ', e);

			// Handle the error, perhaps return to the form with an error message
			return {
				status: 500,
				errors: { server: 'Failed to add tutor' }
			};
		}
	}
};
