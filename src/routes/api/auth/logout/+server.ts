import { signOut } from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	try {
		await signOut(firebaseAuth);
		return json({
			status: 200,
			body: { success: true, message: 'Login successful' }
		});
	} catch (error) {
		console.error('Error user log out :', error);
		return json({
			status: 500,
			body: { success: false, message: 'Internal server error' }
		});
	}
};
