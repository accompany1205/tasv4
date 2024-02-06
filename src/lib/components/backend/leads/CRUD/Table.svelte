<script lang="ts">
    import { onMount } from 'svelte';
    import { TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch} from 'flowbite-svelte';
    import { Section } from 'flowbite-svelte-blocks';
    import AssignLead from './AssignLead.svelte';
    import EditLead from './EditLead.svelte';
    import { Popover } from 'flowbite-svelte';

    import { db } from '$lib/firebase';
    import { collection, getDocs, query, orderBy, startAt, limit } from 'firebase/firestore';
    import { Spinner } from 'flowbite-svelte';
	import AddLead from './AddLead.svelte';

    let divClass='w-full max-w-full bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col max-w-full md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
  
    let searchTerm = '';
    let leads: any[] = [];
    let filteredLeads: any[] = [];
    let loading = true;

    onMount(async () => {
        const leadsCol = collection(db, 'leads');
        const leadsQuery = query(leadsCol, orderBy('dateCreated', 'desc'));

        const querySnapshot = await getDocs(leadsQuery);

        leads = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        filteredLeads = leads;
        loading = false;
    });

    $: if (searchTerm) {
        filteredLeads = leads.filter(lead => {
            const fullName = `${lead.first.toLowerCase()} ${lead.last.toLowerCase()}`;
            return fullName.includes(searchTerm.toLowerCase());
        });
    } else {
        filteredLeads = leads;
    }


    function formatDate(firestoreTimestamp: { toDate: () => any; }) {
        if (firestoreTimestamp && firestoreTimestamp.toDate) {
            const date = firestoreTimestamp.toDate();
            
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric',
                month: '2-digit',
                day: '2-digit', 
                hour: 'numeric',
                minute: '2-digit',
                hour12: true 
            };

            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        return '';
    }

</script>

<div class="bg-gray-100 dark:bg-gray-900 px-12 pt-12 pb-28">
    <TableSearch placeholder="Search" hoverable={true}  bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput}>

        <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <AddLead/>
        </div>

        <!-- Table Header -->
        <TableHead>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Name</TableHeadCell>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Email</TableHeadCell>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Phone</TableHeadCell>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Type of Service</TableHeadCell>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Description</TableHeadCell>
            <TableHeadCell class="bg-orange-100" padding="px-4 py-3" scope="col">Date</TableHeadCell>

            <TableHeadCell class="bg-blue-50" padding="px-4 py-3" scope="col">Assigned</TableHeadCell>
            <TableHeadCell class="bg-blue-50" padding="px-4 py-3" scope="col">Response</TableHeadCell>
            <TableHeadCell class="bg-blue-50" padding="px-4 py-3" scope="col">Status</TableHeadCell>
            <TableHeadCell class="bg-blue-50" padding="px-4 py-3" scope="col">Edit</TableHeadCell>
        </TableHead>

        <!-- Table Body -->
        <TableBody>
            {#if loading}
                <TableBodyRow>
                    <TableBodyCell tdClass="py-32 text-center" colspan="7">
                        <Spinner class="m-auto"/>
                    </TableBodyCell>
                </TableBodyRow>
            {:else if searchTerm !== '' && filteredLeads.length === 0}
                <TableBodyRow>
                    <TableBodyCell tdClass="px-4 py-3" colspan="7">No matching leads found.</TableBodyCell>
                </TableBodyRow>
            {:else}
                {#each (searchTerm !== '' ? filteredLeads : leads) as lead (lead.id)}
                    <TableBodyRow>
                        <TableBodyCell tdClass="px-4 py-3">{lead.first} {lead.last}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{lead.email}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{lead.phone}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{lead.tos}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3" id="desc{lead.id}">{lead.description}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">
                            {formatDate(lead.dateCreated)}
                            <!-- <Popover class="w-64 text-sm font-light z-50" title="Lead Description" triggeredBy="desc{lead.id}">{lead.description}</Popover> -->
                        </TableBodyCell>

                        <TableBodyCell tdClass="px-4 py-3"><AssignLead assigned={lead.assigned} leadID={lead.id}/></TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{lead.response}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3">{lead.status}</TableBodyCell>
                        <TableBodyCell tdClass="px-4 py-3"><EditLead lead={lead}/></TableBodyCell>
                    </TableBodyRow>
                {/each}
            {/if}
        </TableBody>
    </TableSearch>
</div>

