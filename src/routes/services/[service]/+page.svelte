<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    import TopHero from '$lib/components/services-template/TopHero.svelte';
    import Tutors from '$lib/components/services-template/Tutors.svelte';
    import GeneralServices from '$lib/components/services-template/GeneralServices.svelte';
    import GeneralServicesDetail from '$lib/components/services-template/GeneralServicesDetail.svelte';
    import SubServices from '$lib/components/services-template/SubServices.svelte';
    import FAQ from '$lib/components/services-template/FAQ.svelte';

    export let params = $page.params;
    let serviceName = params.service.toLowerCase();

    let service:any;
    let images: { alt: any; srcset: any; title: any; }[] = [];
    let tutors:any;


    onMount(async () => {
        // Get the service data
        const servicesCollectionRef = collection(db, 'services');
        const servicesQuerySnapshot = await getDocs(servicesCollectionRef);

        servicesQuerySnapshot.forEach((doc) => {
            let data = doc.data();
            if (data.name.toLowerCase() === serviceName) {
                service = data;
            }
        });

        // Get all media and filter by tags
        if (service) {
            const mediaCollectionRef = collection(db, 'media');
            const mediaQuerySnapshot = await getDocs(mediaCollectionRef);
            const mediaItems = mediaQuerySnapshot.docs.map(doc => doc.data());

            const mediaImages = mediaItems.filter(mediaItem => {
                return mediaItem.tags && mediaItem.tags.some((tag: { name: string; }) => {
                    return tag.name.toLowerCase() === service.name.toLowerCase();
                });
            });

            images = mediaImages.map(mediaItem => ({
                alt: mediaItem.alt,
                srcset: mediaItem.url,
                title: mediaItem.title
            }));

            console.log("Filtered media images:", mediaImages);
        } else {
            console.log('No such service!');
        }

        // Get all tutors and filter by services offered
        if (service) {
            const tutorsCollectionRef = collection(db, 'tutors');
            const tutorsQuerySnapshot = await getDocs(tutorsCollectionRef);
            const tutorsItems = tutorsQuerySnapshot.docs.map(doc => doc.data());

            tutors = tutorsItems.filter(tutor => {
                return tutor.services && tutor.services.some((serviceItem: { name: string; }) => {
                    return serviceItem.name.toLowerCase() === service.name.toLowerCase();
                });
            });
        } else {
            console.log('No such service!');
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

{#if service}
    <TopHero service={service} images={images}/>
    <Tutors tutors={tutors}/>
    <GeneralServices />
    <GeneralServicesDetail />
    <SubServices subServices={service.subServices} service={service}/>
    <FAQ faq={service.faq}/>
{:else}
    <p>Loading...</p>
{/if}