<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox } from 'flowbite-svelte';
    
    export let zoomIndex:any;
    export let images: any = [];
    let filterText = '';

    function formatDate(firestoreTimestamp: { toDate: () => any; }) {
        if (firestoreTimestamp && firestoreTimestamp.toDate) {
            const date = firestoreTimestamp.toDate();
            const options: Intl.DateTimeFormatOptions = { 
                year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
            };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        return '';
    }

    $: filteredImages = images.filter((image: { title: string; }) =>
        image.title.toLowerCase().includes(filterText.toLowerCase())
    );
</script>


<Table hoverable={true} class="max-w-4xl m-auto mb-20">
    <TableHead>
        <TableHeadCell class="!p-4"><Checkbox /></TableHeadCell>
        <TableHeadCell>Image</TableHeadCell>
        <TableHeadCell>Title</TableHeadCell>
        <TableHeadCell>Upload Date</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
    </TableHead>

    <TableBody>
        {#each filteredImages as image}
            <TableBodyRow>
                <TableBodyCell class="!p-4"><Checkbox /></TableBodyCell>
                <TableBodyCell>
                    <img src={image.url} alt={image.alt} class="w-20 h-20 object-cover rounded" />
                </TableBodyCell>
                <TableBodyCell>{image.title}</TableBodyCell>

                <TableBodyCell>{formatDate(image.uploadDate)}</TableBodyCell>
                <TableBodyCell>
                    <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
