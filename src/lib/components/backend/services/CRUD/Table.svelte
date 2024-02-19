<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch } from 'flowbite-svelte';
    import EditService from './EditService.svelte';
    import { filteredServices } from '../../stores/servicesStore';
</script>

<Table hoverable={true} class="max-w-7xl m-auto border-2 dark:border-gray-600 mb-20">
    <TableHead class="bg-gray-200">
        <TableHeadCell>Logo</TableHeadCell>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Title</TableHeadCell>
        <TableHeadCell>Type of Service</TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
    </TableHead>

    <TableBody>
        {#each $filteredServices as service (service.id)}
            <TableBodyRow>
                <TableBodyCell>
                    <img src={service.logo} alt={service.logo} class="object-cover rounded-xl w-12 h-12"/>
                </TableBodyCell>
                <TableBodyCell>{service.name}</TableBodyCell>
                <TableBodyCell>{service.title}</TableBodyCell>
                <TableBodyCell>{service.tos}</TableBodyCell>
                <TableBodyCell>
                    <EditService service={service}/>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>