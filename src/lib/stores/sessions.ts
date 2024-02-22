import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { UserCredential } from 'firebase/auth';
import { goto } from '$app/navigation';

const nullUser: UserCredential | null = null;

export const currentUser = writable<UserCredential | null>(nullUser);

if (browser) {
	currentUser.set(getStoredUser());
	currentUser.subscribe((user) => {
		localStorage.setItem('storedUser', JSON.stringify(user ? user : nullUser));
	});
}

// get the stored user data without changing the currentUser store
export function getStoredUser(): UserCredential | null {
	if (browser) {
		try {
			const storedUserJSON = localStorage.getItem('storedUser');
			if (!storedUserJSON) {
				return null;
			}
			const user: UserCredential = JSON.parse(storedUserJSON);
			return user;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}
	console.warn('asked for stored user data outside of the browser');
	return null;
}

// clear stored user
export function clearStoredUser(): void {
	currentUser.set(nullUser);
	if (browser) {
		localStorage.setItem('storedUser', JSON.stringify(nullUser));
	}
}

export function requireAuth() {
	console.log('requireAuth');
	try {
		const { subscribe } = currentUser;
		const unsubscribe = subscribe((value: any) => {
			console.log({ auth: value });
			if (!value) {
				goto('/login');
			}
		});
		unsubscribe();
	} catch (error) {
		console.log(`requireAuth error: ${error}`);
	}
}