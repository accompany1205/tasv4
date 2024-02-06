<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
    import EditTutor from './EditTutor.svelte';
    import { tutors } from '../../stores/tutorStore';
    import { writable, derived } from 'svelte/store';
    import { ArrowDownSolid, ArrowUpSolid } from 'flowbite-svelte-icons';

    export let searchTerm = writable('');
    let sortKey = writable('id');
    let sortDirection = writable(1);

    const filteredAndSortedTutors = derived(
        [tutors, sortKey, sortDirection, searchTerm], 
        ([$tutors, $sortKey, $sortDirection, $searchTerm]) => {
            return $tutors
                .filter(tutor => {
                    const fullName = `${tutor.first?.toLowerCase()} ${tutor.last?.toLowerCase()}`;
                    return fullName.includes($searchTerm.toLowerCase());
                })
                .sort((a, b) => {
                    const aVal = a[$sortKey];
                    const bVal = b[$sortKey];
                    return (aVal < bVal ? -1 : 1) * $sortDirection;
                });
        }
    );

    function sortTable(key: string) {
        sortKey.update(n => {
            if (n === key) {
                sortDirection.update(m => -m);
                return n;
            } else {
                sortDirection.set(1);
                return key;
            }
        });
    }

    function statusClass(status: string): string {
        switch (status) {
            case 'Active':
                return 'text-green-400';
            case 'Hold':
                return 'text-red-600';
            case 'Full':
                return 'text-blue-400';
            case 'New':
                return 'text-yellow-300';
            default:
                return 'text-gray-400';
        }
    }



</script>

<Table class="max-w-7xl m-auto border-2 dark:border-gray-600">
    <TableHead>
        <TableHeadCell>Headshot</TableHeadCell>
        <TableHeadCell on:click={() => sortTable('first')}>
            <div class="flex items-center gap-3">
                Name
                {#if $sortKey === 'first'}
                    {#if $sortDirection === 1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell on:click={() => sortTable('email')}>
            <div class="flex items-center gap-3">
                Email
                {#if $sortKey === 'email'}
                    {#if $sortDirection === 1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell on:click={() => sortTable('phone')}>
            <div class="flex items-center gap-3">
                Number
                {#if $sortKey === 'phone'}
                    {#if $sortDirection === 1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>

        <TableHeadCell on:click={() => sortTable('rate')}>
            <div class="flex items-center gap-3">
                Rate
                {#if $sortKey === 'rate'}
                    {#if $sortDirection === 1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>    
        </TableHeadCell>

        <TableHeadCell on:click={() => sortTable('status')}>
            <div class="flex items-center gap-3">
                Status
                {#if $sortKey === 'status'}
                    {#if $sortDirection === 1}
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
        {#each $filteredAndSortedTutors as tutor (tutor.id)}
            <TableBodyRow>
                <TableBodyCell><img src={tutor.headshot} class="w-14 rounded-xl" alt={tutor.name}/></TableBodyCell>
                <TableBodyCell>{tutor.first} {tutor.last}</TableBodyCell>
                <TableBodyCell>{tutor.email}</TableBodyCell>
                <TableBodyCell>{tutor.phone}</TableBodyCell>
                <TableBodyCell>${tutor.rate}</TableBodyCell>
                <TableBodyCell class={statusClass(tutor.status)}>{tutor.status}</TableBodyCell>
                <TableBodyCell><EditTutor tutorId={tutor.id}/></TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>