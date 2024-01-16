<script lang="ts">
    let files: FileList | null = null;

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    async function handleDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer?.files) {
            files = event.dataTransfer.files;
            await uploadFile(files[0]); // Example: Uploading the first file
        }
    }
  
    const accessKey = '8104dfe1-44ca-47cf-b7a9c151b06a-b048-4847';
    const region = 'ny'; // e.g., 'ny' for New York
    const storageZoneName = 'tasv4/frontend';

    const hostname = region ? `${region}.storage.bunnycdn.com` : 'storage.bunnycdn.com';
    const apiEndpoint = `https://${hostname}/${storageZoneName}/`;

    async function uploadFile(file: File) {
        try {
            const response = await fetch(apiEndpoint + encodeURIComponent(file.name), {
                method: 'PUT',
                headers: {
                    'AccessKey': accessKey,
                    'Content-Type': 'application/octet-stream',
                },
                body: file, // send the file as raw binary
            });

            if (response.ok) {
                console.log('File uploaded successfully');
            } else {
                console.error('Upload failed', response.status, await response.text());
            }
        } catch (error) {
            console.error('Error uploading file', error);
        }
    }
</script>

<div
    on:dragover={handleDragOver}
    on:drop={handleDrop}
    class="p-12 max-w-xs m-auto text-center border-2 border-dashed border-gray-500"
>

    Drop files here
    {#if files}
        <p>Files:</p>
        <ul>
        {#each Array.from(files) as file (file.name)}
            <li>{file.name} - {file.size} bytes</li>
        {/each}
        </ul>
    {/if}
</div>