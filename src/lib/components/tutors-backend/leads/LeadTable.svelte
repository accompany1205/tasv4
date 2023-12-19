<script lang="ts">
    import { onMount } from 'svelte';
    import {TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import { Section } from 'flowbite-svelte-blocks';
    import { db } from '$lib/firebase';
    import { collection, getDocs} from 'firebase/firestore';
    import { Spinner } from 'flowbite-svelte';

    let divClass='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
  
    let searchTerm = '';
    let tutors: any[] = [];
    let filteredTutors: any[] = [];
    let loading = true; 

    onMount(async () => {
        const tutorsCol = collection(db, 'tutors');
        const querySnapshot = await getDocs(tutorsCol);

        tutors = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        filteredTutors = tutors;
        loading = false;
    });

    $: if (searchTerm) {
        filteredTutors = tutors.filter(tutor => {
            const fullName = `${tutor.first.toLowerCase()} ${tutor.last.toLowerCase()}`;
            return fullName.includes(searchTerm.toLowerCase());
        });
    } else {
        filteredTutors = tutors;
    }
</script>

<Section classSection='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5'>
    <TableSearch placeholder="Search" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput} >

        <!-- Add Tutor -->
        <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

        </div>

        <!-- Header -->
        <TableHead>
            <TableHeadCell padding="px-4 py-3" scope="col">Name</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Email</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Number</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">$/Hour</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Action</TableHeadCell>
        </TableHead>

        <!-- Body -->
        <TableBody>
            {#if loading}
                <TableBodyRow>
                    <TableBodyCell tdClass="py-32 text-center" colspan="5">
                        <Spinner class="m-auto"/>
                    </TableBodyCell>
                </TableBodyRow>
            {:else if searchTerm !== '' && filteredTutors.length === 0}
                <TableBodyRow>
                    <TableBodyCell tdClass="px-4 py-3" colspan="5">No matching tutors found.</TableBodyCell>
                </TableBodyRow>
            {:else}
                {#each (searchTerm !== '' ? filteredTutors : tutors) as tutor (tutor.id)}
                    <TableBodyRow>
                        <TableBodyCell tdClass="px-4 py-3">{tutor.first} {tutor.last}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{tutor.email}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{tutor.phone}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">${tutor.rate}</TableBodyCell>
                    </TableBodyRow>
                {/each}
            {/if}
        </TableBody>
    </TableSearch>
</Section>