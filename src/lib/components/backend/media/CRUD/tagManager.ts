import { db } from '$lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function fetch_All_Data(collectionName: string) {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    let documents: any[] = [];
    querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
    });
    return documents;
}

async function fetch_Name_and_ID(collectionName: string) {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    let documents: any[] = [];
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        documents.push({ type:collectionName, id: doc.id, name: data.name });
    });
    return documents;
}

export async function fetchServicesAndTutors() {
    const services = await fetch_Name_and_ID('services');
    const tutors = await fetch_Name_and_ID('tutors');

    // console.log('Services:', services);
    // console.log('Tutors:', tutors);

    return { services, tutors };
}
