import { collection, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { db } from '$lib/firebase';
import { json } from '@sveltejs/kit';
import { sanitizeForFirestore } from '$lib/utils/sanitize.js';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    try {
        const { documentName, data } = await request.json();
        await addDoc(collection(db, documentName), data);
        return json({
            status: 200,
            body: "Successfully added!"
        });
    } catch (error: any) {
        console.error('Error during adding Doc:', error);
        let status = 500;
        let message = 'Internal server error';
        return json({
            status,
            body: { success: false, message }
        });
    }
};

export async function PUT({ request }) {
    try {
        const { documentName, data } = await request.json();
        const sanitizedData = sanitizeForFirestore(data);

		const docRef = doc(db, documentName, sanitizedData.id);
        await updateDoc(docRef, sanitizedData);
        return json({
            status: 200,
            body: "Successfully updated!"
        });
    } catch (error: any) {
        console.error('Error during updating Doc:', error);
        let status = 500;
        let message = 'Internal server error';
        return json({
            status,
            body: { success: false, message }
        });
    }
};

export async function DELETE({ request }) {
    try {
        const { documentName, id } = await request.json();
        const docRef = doc(db, documentName, id);
		await deleteDoc(docRef);
        return json({
            status: 200,
            body: "Successfully deleted!!"
        });
    } catch (error: any) {
        console.error('Error during adding Doc:', error);
        let status = 500;
        let message = 'Internal server error';
        return json({
            status,
            body: { success: false, message }
        });
    }
};

