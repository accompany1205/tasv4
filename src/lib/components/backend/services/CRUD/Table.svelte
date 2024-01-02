<script lang="ts">
    import { onMount } from 'svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import { db } from '$lib/firebase';
    import { collection, getDocs } from 'firebase/firestore';
    import { Spinner } from 'flowbite-svelte';
	import { Section } from 'flowbite-svelte-blocks';
	import AddService from './AddService.svelte';
    import EditService from './EditService.svelte';

    let divClass='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";

    let searchTerm = '';
    let services: any[] = [];
    let filteredServices: any[] = [];
    let loading = true; 

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

        console.log(services);
        filteredServices = services;
        loading = false;
    });

    $: if (searchTerm) {
        filteredServices = services.filter(service => {
            return service.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
    } else {
        filteredServices = services;
    }

</script>

<Section classSection='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5'>
    <TableSearch placeholder="Search" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput}>

        <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <AddService/>
        </div>

        <!-- Table Header -->
        <TableHead>
            <TableHeadCell padding="px-4 py-3" scope="col">Name</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Title</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Type of Service</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">About</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Action</TableHeadCell>
        </TableHead>

        <!-- Table Body -->
        <TableBody>
            {#if loading}
                <TableBodyRow>
                    <TableBodyCell tdClass="py-32 text-center" colspan="6">
                        <Spinner class="m-auto"/>
                    </TableBodyCell>
                </TableBodyRow>
            {:else if searchTerm !== '' && filteredServices.length === 0}
                <TableBodyRow>
                    <TableBodyCell tdClass="px-4 py-3" colspan="6">No matching services found.</TableBodyCell>
                </TableBodyRow>
            {:else}
                {#each filteredServices as service (service.id)}
                    <TableBodyRow>
                        <TableBodyCell tdClass="px-4 py-3">{service.name}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{service.title}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{service.tos}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{service.about}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">
                            <EditService service={service}/>
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            {/if}
        </TableBody>
    </TableSearch>
</Section>
