<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getFirestore, collection, getDocs, type DocumentData } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    import TopHero from '$lib/components/services-template/TopHero.svelte';
    import Tutors from '$lib/components/services-template/Tutors.svelte';
    import GeneralServices from '$lib/components/services-template/GeneralServices.svelte';
    import GeneralServicesDetail from '$lib/components/services-template/GeneralServicesDetail.svelte';
    import SubServices from '$lib/components/services-template/SubServices.svelte';
    import FAQ from '$lib/components/services-template/FAQ.svelte';

    export let params = $page.params;
    let serviceName = params.service.toLowerCase();

    let serviceData:any;

    onMount(async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'services'));

            querySnapshot.forEach((doc) => {
                let data = doc.data();
                if (data.name.toLowerCase() === serviceName) {
                    serviceData = data;
                    console.log(serviceData);
                }
            });

            if (!serviceData) {
                console.log('No such service!');
            }
        } catch (error) {
            console.error('Error fetching service from Firestore: ', error);
        }
    });
</script>

<svelte:head>
    <title>{serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}</title>
</svelte:head>


<TopHero />
<!-- <Tutors /> -->
<GeneralServices />
<GeneralServicesDetail />
<SubServices />
<FAQ />