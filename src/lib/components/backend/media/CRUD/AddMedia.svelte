<script lang="ts">
    import { Button, Modal } from 'flowbite-svelte';
    let defaultModal = false;



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


    function handleFileSelect(event) {
        const files = event.target.files;
        if (files) {
            droppedFiles = files;
            generateImagePreviews();
        }
    }

    function openFileExplorer() {
        document.getElementById('fileInput').click();
    }


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

<Button on:click={() => (defaultModal = true)}>Add Files</Button>

<Modal title="Add Files to Media" bind:open={defaultModal}>
    <input type="file" id="fileInput" class="hidden" on:change={handleFileSelect} multiple />

    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        on:dragover={handleDragOver}
        on:drop={handleDrop}
        class="p-10 max-w-4xl mx-10 rounded-xl m-auto text-center border-2 border-dashed border-gray-500"
    >
        {#if !droppedFiles}
            <div class="font-bold text-emerald-500">
                Drop files here or
                <Button on:click={openFileExplorer} class="mb-0 ml-2" color="alternative">Choose Files</Button>
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

    {#if droppedFiles}
        <div class="flex justify-evenly mt-4">
            <Button on:click={openFileExplorer} class="mb-0 ml-2" color="alternative">Choose Files</Button>
            <Button on:click={uploadFiles}>Upload Files</Button>
        </div>
    {/if}
</Modal>

