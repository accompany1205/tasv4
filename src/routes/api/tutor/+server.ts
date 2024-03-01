import { collection, query, getDocs, where } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { json } from '@sveltejs/kit';
import { sanitizeForFirestore } from '$lib/utils/sanitize.js';

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
	try {
		const { userId } = await request.json();
		const tutorsRef = collection(db, 'tutors');
		const queryForUser = query(tutorsRef, where('userUID', '==', userId));
		console.log({ userUID: userId });

		const querySnapshot = await getDocs(queryForUser);

		// Perform the query
		const tutorArray: any[] = [];
		querySnapshot.forEach((doc) => {
			console.log('Document ID:', doc.id);
			const tutorData = doc.data();
			tutorArray.push({ id: doc.id, ...tutorData });
		});
		if (tutorArray.length > 0) {
			const tutor = { id: tutorArray[0].id, ...tutorArray[0] };
			return json({
				status: 200,
				body: { success: true, tutor },
			});
		}
		return json({
			status: 404,
			body: { success: false, message: 'User Not Found!' },
		});
	} catch (error: any) {
		console.error('Error during adding Doc:', error);
		let status = 500;
		let message = 'Internal server error';
		return json({
			status,
			body: { success: false, message },
		});
	}
}
