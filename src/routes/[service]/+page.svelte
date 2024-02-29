<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    import type { Service } from '$lib/components/backend/stores/servicesStore';
    import type { Media } from '$lib/components/backend/stores/mediaStore';
    import type { Tutor } from '$lib/components/backend/stores/tutorStore';

    import { fade } from 'svelte/transition';
    import TopHero from '$lib/components/services-template/TopHero.svelte';
    import { Spinner } from 'flowbite-svelte';
    import Tutors from '$lib/components/services-template/Tutors.svelte';
    import GeneralServices from '$lib/components/services-template/GeneralServices.svelte';
    import GeneralServicesDetail from '$lib/components/services-template/GeneralServicesDetail.svelte';
    import SubServices from '$lib/components/services-template/SubServices.svelte';
    import FAQ from '$lib/components/services-template/FAQ.svelte';
	import { goto } from '$app/navigation';

    export let params = $page.params;
    let serviceName = params.service.toLowerCase();

    let service: Service;
    let serviceImages: Media[] = [];
    let subServiceImages: Media[] = [];
    let tutors: Tutor[] = [];
    let loading = true;

    onMount(async () => {
        // Get the service data
        const servicesCollectionRef = collection(db, 'services');
        const servicesQuerySnapshot = await getDocs(servicesCollectionRef);

        servicesQuerySnapshot.forEach((doc) => {
            let data = doc.data();
            if (data.name.toLowerCase() === serviceName) {
                service = data as Service;
            }
        });

        // Get all media
        const mediaCollectionRef = collection(db, 'media');
        const mediaQuerySnapshot = await getDocs(mediaCollectionRef);
        const mediaItems: Media[] = mediaQuerySnapshot.docs.map(doc => doc.data() as Media);

        if (service) {
            // Filter media by service images
            serviceImages = mediaItems.filter(mediaItem => service.images.includes(mediaItem.url));

            // Filter media by sub-services images
            service.subServices.forEach(subService => {
                const filteredImages = mediaItems.filter(mediaItem => subService.images.includes(mediaItem.url));
                subServiceImages.push(...filteredImages);
            });

            // Get all tutors and filter by services offered
            const tutorsCollectionRef = collection(db, 'tutors');
            const tutorsQuerySnapshot = await getDocs(tutorsCollectionRef);
            tutors = tutorsQuerySnapshot.docs.map(doc => doc.data() as Tutor).filter(tutor => tutor.services.includes(service.name));


            await new Promise(resolve => setTimeout(resolve, 100));
            loading = false;
        } else {
            console.log('No such service!');
            goto("/");
        }
    });
</script>

<svelte:head>
    {#if service}
        <title>{service.name}</title>
    {:else}
        <title>{serviceName}</title>
    {/if}
</svelte:head>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }
</style>

{#if loading}
    <div class="overlay" out:fade={{ duration: 1000 }}>
        <Spinner class="w-24 h-24"/>
    </div>
{/if}

{#if service}
    <TopHero service={service} images={serviceImages}/>
    <Tutors tutors={tutors}/>
    <GeneralServices />
    <GeneralServicesDetail />
    <SubServices subServices={service.subServices} service={service}/>
    <FAQ faq={service.faq}/>
{:else}
<div class="h-screen">

</div>
{/if}

