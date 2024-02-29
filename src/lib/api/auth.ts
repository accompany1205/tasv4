import {
	signInWithEmailAndPassword,
	type UserCredential,
	signOut,
	sendPasswordResetEmail,
	createUserWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseAuth } from '$lib/firebase';
import { currentUser, clearStoredUser } from '$lib/stores/sessions';
import { get } from 'svelte/store';

export const login = async (email: string, password: string) => {
	try {
		const res: Response = await fetch('/api/auth/login', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({ email, password }),
		});
		if (res.ok) {
			const data = await res.json();
			currentUser.set(data.body);
			console.log(data.body);
		}
		console.log(`User logged in successfully!: ${email}`);
	} catch (error) {
		console.error('Error user log in :', error);
	}
};
export const logout = async (): Promise<void> => {
	try {
		const res: Response = await fetch('/api/auth/logout');
		if (res.ok) {
			console.log(`User logged out successfully!`);
			clearStoredUser();
		}
	} catch (error) {
		console.error('Error user log out :', error);
	}
};
export const sendPasswordResetEmailToUser = async (email: string): Promise<void> => {
	try {
		const res: Response = await fetch('/api/auth/sendPasswordResetLink', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({ email }),
		});
		console.log('Password reset email sent to', email);
	} catch (error) {
		// Error occurred while sending password reset email
		console.error('Error sending password reset email:', error);
	}
};
export const signup = async (email: string, password: string): Promise<string | undefined> => {
	try {
		const res: Response = await fetch('/api/auth/signup', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				// Add any additional headers here
			},
			body: JSON.stringify({ email, password }),
		});
		if (res.ok) {
			const data = await res.json();
			console.log('signup', { data });
			return data.body.user.uid;
		}
		return undefined;
	} catch (error) {
		// Error occurred while sending password reset email
		console.error('Error user sign up :', error);
		return undefined;
	}
};
