import type { Action } from '@sveltejs/kit';
import { db } from '$lib/firebase'; // Adjust the import path as needed
import { collection, addDoc } from 'firebase/firestore';

console.log("123");

// POST action
export const actions: Record<string, Action> = {
    addTutor: async ({ request }) => {
        try {
            const form = await request.formData();
            const firstName = form.get('first');
            const lastName = form.get('last');
            const email = form.get('email');
            const phone = form.get('phone');
            const rate = form.get('rate');
            const status = form.get('status'); // Ensure this matches your form field name
            const description = form.get('description');

            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH");

            // Add data to Firebase
            const docRef = await addDoc(collection(db, 'tutors'), {
                first: firstName,
                last: lastName,
                email,
                phone,
                rate,
                status,
                description,
            });

            return { status: 303, headers: { location: '/success' } }; // Redirect to a success page or handle as needed
        } catch (error) {
            // Handle error, perhaps return to the form with an error message
            return { status: 500, errors: { server: 'Failed to add tutor' } };
        }
    }
};
