import { type UserCredential, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import type { RequestHandler } from '@sveltejs/kit';

type RequestBody = {
	email: string;
	password: string;
};

export const post: RequestHandler = async ({ request }) => {
	try {
		const { email, password } = await request.json();
		const user: UserCredential = await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password,
		);
		return {
			status: 200,
			body: user,
		};
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

		return {
			status,
			body: { success: false, message },
		};
	}
};

export const allowCredentials = true; // Allow credentials in CORS headers
