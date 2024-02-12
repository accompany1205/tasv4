<script lang="ts">
    import { Alert, Button, Checkbox, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
    import { writable, derived } from 'svelte/store';
    import { ArrowDownSolid, ArrowUpSolid, FileCopyOutline } from 'flowbite-svelte-icons';
    import { media } from '../../stores/mediaStore';
	import EditMedia from './EditMedia.svelte';

    let sortKey = writable('title'); // Default sort key
    let sortDirection = writable(1); // 1 for ascending, -1 for descending
    let hidden = 'hidden';
    let alertTimeout: string | number | NodeJS.Timeout | undefined;
    export let zoomIndex:any;
    export let filterText = writable('');

    const filteredAndSortedMedia = derived([media, sortKey, sortDirection, filterText], ([$media, $sortKey, $sortDirection, $filterText]) => {
        return $media
        .filter(mediaItem => mediaItem.title.toLowerCase().includes($filterText.toLowerCase())) // Filter by title
        .sort((a:any, b:any) => {
            let comparison = 0;
            if ($sortKey === 'uploadDate') {
                comparison = a.uploadDate.seconds - b.uploadDate.seconds;
            } else {
                comparison = a[$sortKey].localeCompare(b[$sortKey]);
            }
            return comparison * $sortDirection;
        });
    });

    function sortTable(key: string) {
        sortKey.set(key);
        sortDirection.update(n => -n);
    }
        
    function formatDate(firestoreTimestamp: { seconds?: number; nanoseconds?: number; toDate?: any; }) {
        if (firestoreTimestamp && firestoreTimestamp.toDate) {
            const date = firestoreTimestamp.toDate();
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric', month: '2-digit', day: '2-digit'
            };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        return '';
    }

    async function copyTextToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
            alert();

        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    function alert() {
        hidden = "";

        clearTimeout(alertTimeout);
            
        alertTimeout = setTimeout(() => {
            hidden = "hidden";
        }, 2000);
    }


</script>

<Table class="max-w-7xl m-auto border-2 dark:border-gray-600 mb-20">
    <TableHead>
        <!-- <TableHeadCell class="!p-4"><Checkbox /></TableHeadCell> -->
        <TableHeadCell>Image</TableHeadCell>
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
        <TableHeadCell on:click={() => sortTable('uploadDate')}>
            <div class="flex items-center gap-3">
                Upload Date
                {#if $sortKey === 'uploadDate'}
                    {#if $sortDirection === -1}
                        <ArrowUpSolid class="w-3 h-3"/>
                    {:else}
                        <ArrowDownSolid class="w-3 h-3"/>
                    {/if}
                {/if}
            </div>
        </TableHeadCell>
        <TableHeadCell class="w-0 m-0 p-0 text-center">Url</TableHeadCell>
        <TableHeadCell class="w-0 m-0 p-0 text-center">Actions</TableHeadCell>
    </TableHead>

    <TableBody>
        {#each $filteredAndSortedMedia as mediaItem}
            <TableBodyRow>
                <!-- <TableBodyCell class="!p-4"><Checkbox /></TableBodyCell> -->
                <TableBodyCell>
                    <img src={mediaItem.url} alt={mediaItem.alt} 
                    style="width: {400 - zoomIndex * 50}px; height: {400 - zoomIndex * 50}px;" 
                    class="object-cover rounded-xl" />
                </TableBodyCell>
                <TableBodyCell>{mediaItem.title}</TableBodyCell>

                <TableBodyCell>{formatDate(mediaItem.uploadDate)}</TableBodyCell>

                <TableBodyCell>
                    <Button color="alternative" class="" on:click={() => copyTextToClipboard(mediaItem.url)}><FileCopyOutline/></Button>
                </TableBodyCell>

                <TableBodyCell>
                    <EditMedia imageId={mediaItem.id} btnClass={""}/>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>


<Alert color="blue" class="fixed bottom-5 right-5 z-50 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg border border-blue-200 shadow-md {hidden}">
    URL Copied to Clipboard
</Alert>


<!-- FIX Unsynced Images on delete!!! -->