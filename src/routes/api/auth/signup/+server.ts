import { type UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import { json } from '@sveltejs/kit';


export async function POST({ request }) {
	try {
		const { email, password } = await request.json();
		const user: UserCredential = await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password,
		);
		return json({
			status: 200,
			body: user,
		});
	} catch (error: any) {
		console.error('Error during user login:', error);

		let status = 500;
		let message = 'Internal server error';

		if (error.code === 'auth/email-already-in-use') {
			status = 409; // Conflict
			message = 'Email is already in use';
		} else if (error.code === 'auth/invalid-email') {
			status = 400; // Bad Request
			message = 'Invalid email address';
		}

		return json({
			status,
			body: { success: false, message },
		});
	}
};

