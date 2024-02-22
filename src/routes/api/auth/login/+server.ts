import { signInWithEmailAndPassword } from 'firebase/auth';
import type { UserCredential } from 'firebase/auth'; // Update import to get correct UserCredential type
import { firebaseAuth } from '$lib/firebase';
// import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

type RequestBody = {
    email: string,
    password: string,
}
/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { email, password } = await request.json();
        const userCredential: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredential.user;
        return json({
            status: 200,
            body: user
        });
    } catch (error: any) {
        console.error('Error during user login:', error);

        let status = 500;
        let message = 'Internal server error';

        // Check if the error is related to authentication
        if (error.code === 'auth/wrong-password') {
            status = 400; // Bad Request
            message = 'Invalid password';
        } else if (error.code === 'auth/user-not-found') {
            status = 404; // Not Found
            message = 'User not found';
        }

        return json({
            status,
            body: { success: false, message }
        });
    }
};

