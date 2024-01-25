<script lang="ts">
	import { Button, ButtonGroup, Input, Spinner } from "flowbite-svelte";
    import Table from "./CRUD/Table.svelte";
    import Page from "./CRUD/Page.svelte";
    import AddService from "./CRUD/AddService.svelte";
    import { onMount } from 'svelte';
    import { db } from '$lib/firebase';
    import { collection, getDocs } from 'firebase/firestore';

    let search:string;
    let isTable:boolean = false;
    let services: any[] = [];
    let filteredServices: any[] = [];
    let tutors: any[] = [];

    let loading = true; 

    function toggleView() {
        isTable = !isTable;
    }

    onMount(async () => {
        const servicesCol = collection(db, 'services');
        const querySnapshot = await getDocs(servicesCol);

        services = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: doc.id,
                name: data.name,
                about: data.about,
                faq: data.faq,
                subServices: data.subServices,
                title: data.title,
                tos: data.tos
            };
        });

        const tutorsCol = collection(db, 'tutors');
        const tutorsSnapshot = await getDocs(tutorsCol);
        tutors = tutorsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        console.log(services);
        filteredServices = services;
        loading = false;
    });

    $: if (search) {
        filteredServices = services.filter(service => {
            return service.name.toLowerCase().includes(search.toLowerCase());
        });
    } else {
        filteredServices = services;
    }

</script>

<div class="max-w-7xl bg-white rounded-3xl border-2 border-emerald-200 border-solid shadow-lg h-24 m-auto mt-12 mb-4 flex justify-evenly items-center gap-4">
    <Input placeholder="Search Service" bind:value={search} class="max-w-xs"/>

    <ButtonGroup>
        <Button on:click={toggleView} disabled={isTable}>List</Button>
        <Button on:click={toggleView} disabled={!isTable}>Page</Button>
    </ButtonGroup>

    <AddService/>
</div>


{#if loading}
    <Spinner class="m-auto w-full h-12 my-20"/>
{:else if isTable}
    <Table services={filteredServices}/>
{:else}
    <Page services={filteredServices} tutors={tutors}/>
{/if}