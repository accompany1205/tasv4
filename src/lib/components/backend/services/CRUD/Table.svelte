<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import EditService from './EditService.svelte';
    import { filteredServices } from '../../stores/servicesStore';
    import { ArrowDownSolid, ArrowUpSolid } from 'flowbite-svelte-icons';
    import { derived, writable } from 'svelte/store';

    let sortKey = writable('name'); // Default sort by service name
    let sortDirection = writable(1); // 1 for ascending, -1 for descending

    const sortedServices = derived([filteredServices, sortKey, sortDirection], ([$filteredServices, $sortKey, $sortDirection]) => {
        return $filteredServices.sort((a:any, b:any) => {
            const aVal = a[$sortKey].toLowerCase();
            const bVal = b[$sortKey].toLowerCase();
            return (aVal < bVal ? -1 : 1) * $sortDirection;
        });
    });

    function sortTable(key: string) {
        sortKey.update(n => {
            if (n === key) {
                sortDirection.update(m => -m); // Toggle direction
                return n;
            } else {
                sortDirection.set(1); // Set ascending for new key
                return key;
            }
        });
    }
</script>

<Table hoverable={true} class="max-w-7xl m-auto border-2 dark:border-gray-600 mb-20">
    <TableHead>
        <TableHeadCell>Logo</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('name')}>
            <div class="flex items-center gap-3">
                Name
                {#if $sortKey === 'name'}
                    {#if $sortDirection === -1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell on:click={() => sortTable('title')}>
            <div class="flex items-center gap-3">
                Title
                {#if $sortKey === 'title'}
                    {#if $sortDirection === -1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell on:click={() => sortTable('tos')}>
            <div class="flex items-center gap-3">
                Type of Service
                {#if $sortKey === 'tos'}
                    {#if $sortDirection === -1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell>Action</TableHeadCell>
    </TableHead>

    <TableBody>
        {#each $sortedServices as service (service.id)}
            <TableBodyRow>
                <TableBodyCell>
                    {#if service.logo}
                        <img src={service.logo} alt={service.logo} class="object-cover rounded-xl w-12 h-12"/>
                    {:else}
                        <img src='/default_service.png' alt="Tutor headshot" class="object-cover rounded-xl w-12 h-12"/>
                    {/if}
                </TableBodyCell>
                <TableBodyCell>{service.name}</TableBodyCell>
                <TableBodyCell>{service.title}</TableBodyCell>
                <TableBodyCell>{service.tos}</TableBodyCell>
                <TableBodyCell>
                    <EditService serviceId={service.id}/>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>

</Table>