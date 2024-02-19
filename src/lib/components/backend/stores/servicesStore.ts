import { writable, derived, get } from 'svelte/store';
import { collection, doc, updateDoc, deleteDoc, addDoc, query, onSnapshot } from 'firebase/firestore';
import { db } from '$lib/firebase';


interface Service {
    id: string;
    name: string;
    about: string;
    faq: Array<{
        question: string;
        answer: string;
    }>;
    subServices: Array<{
        name: string;
        description: string;
        images: Array<string>;
    }>;
    title: string;
    tos: string;
    description: string;
    hero: string;
    logo: string;
}

export const filterText = writable('');
export const services = writable<Service[]>([])
export let loading = writable(true);

export const filteredServices = derived(
    [services, filterText],
    ([$services, $filterText]) => {
        return $services.filter(service => 
            service.name.toLowerCase().includes($filterText.toLowerCase())
        );
    }
);


function fetchServices() {
    const servicesCollectionRef = collection(db, 'services');
    const q = query(servicesCollectionRef);

    onSnapshot(q, (querySnapshot) => {
        const servicesArray: Service[] = [];
        querySnapshot.forEach((doc) => {
            servicesArray.push({ id: doc.id, ...doc.data() } as Service);
        });
        services.set(servicesArray);
        loading.set(false);
        console.log(get(services));

    }, 
    (error) => {
        console.error("Error fetching services from Firestore:", error);
        loading.set(false);
    });
}

export async function updateService(updatedService: Service) {
    const serviceRef = doc(db, 'services', updatedService.id);
    
    try {
        await updateDoc(serviceRef, updatedService);
        console.log('Service updated successfully in Firestore');
    } catch (error) {
        console.error('Error updating service:', error);
        throw error;
    }
}

export async function deleteService(serviceId: string) {
    const serviceRef = doc(db, 'services', serviceId);

    try {
        await deleteDoc(serviceRef);
        console.log('Service deleted successfully from Firestore');
    } catch (error) {
        console.error('Error deleting service:', error);
        throw error;
    }
}

export async function addService(newService: Service) {
    try {
        await addDoc(collection(db, 'services'), newService);
        console.log('Service added successfully to Firestore');
    } catch (error) {
        console.error('Error adding new service:', error);
        throw error;
    }
}

fetchServices();
