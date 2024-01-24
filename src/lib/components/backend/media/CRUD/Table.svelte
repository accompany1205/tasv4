<script lang="ts">
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Checkbox } from 'flowbite-svelte';
    import EditMedia from './EditMedia.svelte';
    
    export let zoomIndex:any;
    export let images: any = [];
    export let filterText:string;

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


<Table hoverable={true} class="max-w-4xl m-auto mb-20 shadow">
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
                    <img src={image.url} alt={image.alt} 
                    style="width: {450 - zoomIndex * 50}px; height: {300 - zoomIndex * 50}px;" 
                    class="object-cover rounded-xl" />
                </TableBodyCell>
                <TableBodyCell>{image.title}</TableBodyCell>

                <TableBodyCell>{formatDate(image.uploadDate)}</TableBodyCell>
                <TableBodyCell>
                    <EditMedia image={image}/>
                </TableBodyCell>
            </TableBodyRow>
        {/each}
    </TableBody>
</Table>
