<script lang="ts">
    import { Button } from "flowbite-svelte";

    let droppedFiles: FileList | null = null;
    let imagePreviews: string[] = [];

    function handleDragOver(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
    }

    function handleDrop(event: DragEvent) {
        event.preventDefault();
        event.stopPropagation();
        if (event.dataTransfer?.files) {
            droppedFiles = event.dataTransfer.files;
            generateImagePreviews();
        }
    }

    function generateImagePreviews() {
        if (!droppedFiles) return;
        imagePreviews = Array.from(droppedFiles).map(file =>
            URL.createObjectURL(file)
        );
    }

    const accessKey = import.meta.env.VITE_BUNNY_API;
    const region = 'ny'; // e.g., 'ny' for New York
    const storageZoneName = 'tasv4/frontend';
    const hostname = region ? `${region}.storage.bunnycdn.com` : 'storage.bunnycdn.com';
    const apiEndpoint = `https://${hostname}/${storageZoneName}/`;

    async function uploadFiles() {
        if (!droppedFiles) return;

        for (let i = 0; i < droppedFiles.length; i++) {
            await uploadFile(droppedFiles[i]);
        }
    }

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
                window.location.href = "/backend";
            } else {
                console.error('Upload failed', response.status, await response.text());
            }
        } catch (error) {
            console.error('Error uploading file', error);
        }
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:dragover={handleDragOver}
    on:drop={handleDrop}
    class="p-10 max-w-4xl mt-10 rounded-xl m-auto text-center border-2 border-dashed border-gray-500"
>
    {#if !droppedFiles}
        <div class="font-bold text-emerald-500">
            Drop files here
        </div>
    {:else}
        <div class="flex flex-col gap-4">
            <p class="font-bold text-emerald-500">Files loaded:</p>

            <div class="grid grid-cols-3 gap-4">
                {#each imagePreviews as preview (preview)}
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img src={preview} alt="Image preview" class="w-full h-auto"/>
                {/each}
            </div>
        </div>
    {/if}
</div>
