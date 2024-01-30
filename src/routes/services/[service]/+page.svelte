<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { getFirestore, collection, getDocs, type DocumentData } from 'firebase/firestore';
    import { db } from '$lib/firebase';

    export let params = $page.params;
    let serviceName = params.service.toLowerCase();

    let serviceData: DocumentData | null = null;

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

{#if serviceData}
    <h1>{serviceData.name}</h1>
    <h2>{serviceData.title}</h2>
    <p>{serviceData.about}</p>

    <!-- Displaying FAQs -->
    {#if serviceData.faq && serviceData.faq.length}
        <h3>FAQs</h3>
        <ul>
            {#each serviceData.faq as faq}
                <li>
                    <strong>{faq.question}</strong>: {faq.answer}
                </li>
            {/each}
        </ul>
    {/if}

    <!-- Displaying Sub Services -->
    {#if serviceData.subServices && serviceData.subServices.length}
        <h3>Sub Services</h3>
        {#each serviceData.subServices as subService}
            <div>
                <h4>{subService.name}</h4>
                <p>{subService.description}</p>
                {#if subService.images && subService.images.length}
                    <div>
                        {#each subService.images as image}
                            <img src={image} alt={`Image for ${subService.name}`} />
                        {/each}
                    </div>
                {/if}
            </div>
        {/each}
    {/if}

    <p>Type of Service: {serviceData.tos}</p>
{:else}
    <p>Loading service data...</p>
{/if}