<script lang="ts">
	import { db } from '$lib/firebase';
	import { addDoc, collection } from 'firebase/firestore';
    import { Button, Modal, Progressbar } from 'flowbite-svelte';
    let defaultModal = false;
    import { sineOut } from 'svelte/easing';




    let droppedFiles: FileList | null = null;
    let imagePreviews: string[] = [];
    let uploadProgress = 0;

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
    const storageZoneName = 'tasv4/media';
    const hostname = region ? `${region}.storage.bunnycdn.com` : 'storage.bunnycdn.com';
    const apiEndpoint = `https://${hostname}/${storageZoneName}/`;
    const pullZone = 'https://tas4.b-cdn.net/media'


    function handleFileSelect(event: { target: { files: any; }; }) {
        const files = event.target.files;
        if (files) {
            droppedFiles = files;
            generateImagePreviews();
        }
    }

    function openFileExplorer() {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        } else {
            console.error('File input element not found');
        }
    }

    async function uploadFiles() {
        if (!droppedFiles) return;

        uploadProgress = 0;
        const totalFiles = droppedFiles.length;

        for (let i = 0; i < totalFiles; i++) {
            await uploadFile(droppedFiles[i]);
            uploadProgress = ((i + 1) / totalFiles) * 100; // Update progress
        }

        window.location.href = "/backend";
    }

    async function uploadFile(file: File) {
        // Generate a timestamp
        const timestamp = new Date().getTime();
        // Append the timestamp to the file name
        const fileNameWithTimestamp = `${file.name.split('.').slice(0, -1).join('.')}_${timestamp}.${file.name.split('.').pop()}`;

        const fileUrl = apiEndpoint + encodeURIComponent(fileNameWithTimestamp);

        try {
            const response = await fetch(fileUrl, {
                method: 'PUT',
                headers: {
                    'AccessKey': accessKey,
                    'Content-Type': 'application/octet-stream',
                },
                body: file, // send the file as raw binary
            });

            if (response.ok) {
                console.log('File uploaded successfully');
                createMediaDocument(file, fileUrl, fileNameWithTimestamp);
            } else {
                console.error('Upload failed', response.status, await response.text());
            }
        } catch (error) {
            console.error('Error uploading file', error);
        }
    }

    async function createMediaDocument(file: File, fileUrl: any, fileNameWithTimestamp: string) {
        const title = file.name.replace(/\.[^/.]+$/, "");

        const mediaDoc = {
            alt: "",
            name: fileNameWithTimestamp,
            owner: "Admin", // Replace with actual user UID if needed
            show: true,
            tags: [],
            uploadDate: new Date(),
            url: `${pullZone}/${encodeURIComponent(fileNameWithTimestamp)}`,
            title
        };

        await addDoc(collection(db, 'media'), mediaDoc);
        console.log('Media document created:', mediaDoc);
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

    <Progressbar progress={uploadProgress} class={uploadProgress > 0 ? '' : 'hidden'} animate labelInside tweenDuration={1500} easing={sineOut} size="h-4"/>


    {#if droppedFiles}
        <div class="flex justify-evenly mt-4">
            <Button on:click={openFileExplorer} class="mb-0 ml-2" color="alternative">Choose Files</Button>
            <Button on:click={uploadFiles}>Upload Files</Button>
        </div>
    {/if}
</Modal>

