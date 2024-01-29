import type { Actions } from './$types';
import { db } from '$lib/firebase'; 
import { collection, addDoc, updateDoc, doc  } from 'firebase/firestore';

export const actions: Actions = {
	addTutor: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData); 

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
		
			const docRef = await addDoc(collection(db, 'tutors'), formEntry);

			console.log('Document written with ID: ', docRef.id);

	
			return {
				status: 303,
				headers: {
					location: '/backend'
				}
			};
		} catch (e) {
			console.error('Error adding document: ', e);

		
			return {
				status: 500,
				errors: { server: 'Failed to add tutor' }
			};
		}
	},
    editTutor: async ({ request }) => {
        const formData = await request.formData();
        const tutorId = formData.get('id');

        if (typeof tutorId !== 'string' || !tutorId) {
            return {
                status: 400,
                errors: { server: 'Tutor ID is required for updating.' }
            };
        }

        const updateEntry = {
            first: formData.get('first'),
            last: formData.get('last'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            rate: formData.get('rate'),
            status: formData.get('status'),
            description: formData.get('description')
        };

        try {
            const tutorDocRef = doc(db, 'tutors', tutorId);
            await updateDoc(tutorDocRef, updateEntry);

            return {
                status: 303,
                headers: {
                    location: '/backend'
                }
            };
        } catch (e) {
            console.error('Error updating document: ', e);

            return {
                status: 500,
                errors: { server: 'Failed to update tutor' }
            };
        }
    }





};
