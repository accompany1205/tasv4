// src/lib/auth.js
import { writable } from 'svelte/store';
// import { redirect } from '@sveltejs/kit';

export const auth = writable(null);

// will add
export const singIn = (user: any) => {
	auth.set(user);
};

export const signOut = () => {
	auth.set(null);
};

export function requireAuth() {
	console.log('requireAuth');
	try {
		const { subscribe } = auth;
		const unsubscribe = subscribe((value: any) => {
			console.log({ auth: value });
			if (!value) {
				window.location.href = '/login';
			}
		});
		unsubscribe();
	} catch (error) {
		console.log(`requireAuth error: ${error}`);
	}
}
