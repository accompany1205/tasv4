<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getFirestore, collection, getDocs, type DocumentData } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    
	import TopHero from '$lib/components/blocks/frontpage/TopHero.svelte';
	import GeneralServices from '$lib/components/blocks/frontpage/GeneralServices.svelte';
	import GeneralServicesDetail from '$lib/components/blocks/frontpage/GeneralServicesDetail.svelte';
	import SketchupServices from '$lib/components/blocks/frontpage/SketchupServices.svelte';
	import FAQ from '$lib/components/blocks/frontpage/FAQ.svelte';
	import TutorV3Swipeblock from '$lib/components/blocks/common/TutorV3Swipeblock.svelte'; 

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


<TopHero images="{hero_images_flattened}" featuredTutors="{featuredTutorsHero}" />
<TutorV3Swipeblock tutors="{featuredTutorsCards}" />
<GeneralServices />
<GeneralServicesDetail />
<SketchupServices />
<FAQ />