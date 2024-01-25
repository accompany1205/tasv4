<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import EditService from './EditService.svelte';

    export let services: any[] = [];
</script>

<Table hoverable={true} class="max-w-7xl m-auto mb-20 shadow">
    <!-- Table Header -->
    <TableHead class="bg-gray-200">
        <TableHeadCell padding="px-4 py-3" scope="col">Name</TableHeadCell>
        <TableHeadCell padding="px-4 py-3" scope="col">Title</TableHeadCell>
        <TableHeadCell padding="px-4 py-3" scope="col">Type of Service</TableHeadCell>
        <TableHeadCell padding="px-4 py-3" scope="col">About</TableHeadCell>
        <TableHeadCell padding="px-4 py-3" scope="col">Action</TableHeadCell>
    </TableHead>

    <!-- Table Body -->
    <TableBody>
        {#if services.length === 0}
            <TableBodyRow>
                <TableBodyCell tdClass="px-4 py-3" colspan="6">No matching services found.</TableBodyCell>
            </TableBodyRow>
        {:else}
            {#each services as service (service.id)}
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
</Table>

