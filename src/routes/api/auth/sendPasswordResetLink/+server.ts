import { sendPasswordResetEmail } from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	try {
		const { email } = await request.json();
		await sendPasswordResetEmail(firebaseAuth, email);
		return json({
			status: 200,
			body: { success: true, message: 'Successfully sent eamil' }
		});
	} catch (error) {
		console.error('Error sending password reset email:', error);
		return json({
			status: 500,
			body: { success: false, message: 'Internal server error' }
		});
	}
};


