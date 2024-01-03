<script lang="ts">
    import { onMount } from 'svelte';
    import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
    import { db } from '$lib/firebase';
    import { addDoc } from 'firebase/firestore';
    import { Label, Input, Button, Modal, Textarea, Select, DropdownDivider} from 'flowbite-svelte';
    import { Toast } from 'flowbite-svelte';
    import { CloseCircleSolid } from 'flowbite-svelte-icons';

    export let lead:any;

    let defaultModal = false;
    let showToast = false;

    let statusENUM = [
        { value: 'New', name: 'New' },
        { value: 'Contacted', name: 'Contacted' },
        { value: 'Qualified', name: 'Qualified' },
    ];

    let tosENUM = [
        { value: 'Both', name: 'Both' },
        { value: 'Tutoring', name: 'Tutoring' },
        { value: 'Services', name: 'Services' },
    ];

    let responseENUM: { value: string; name: string; }[] = [
        { value: "No Response", name: "No Response" },
        { value: "Interested", name: "Interested" },
        { value: "Pass it on", name: "Pass it on" },
        { value: "Bad Lead", name: "Bad Lead" }
    ];


    let tutorOptions: { value: string; name: string; }[] = [];
    

    let first = lead.first || '';
    let last = lead.last || '';
    let email = lead.email || '';
    let phone = lead.phone || '';
    let status = lead.status || '';
    let description = lead.description || '';
    let tos = lead.tos || '';
    let response = lead.response || '';
    let subject = lead.subject || '';
    let assigned = lead.assigned || '';

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, 'tutors'));
        tutorOptions = querySnapshot.docs.map(doc => ({ value: doc.id, name: `${doc.data().first} ${doc.data().last}` }));
        response = lead.response || "No Response";
        status = lead.status || "New";
    });

    async function updateLead() {
        try {
            if (!first || (!email && !phone)) {
                showToast = true;
                setTimeout(() => { showToast = false; }, 10000);
                return;
            }

            const leadRef = doc(db, 'leads', lead.id);

            await updateDoc(leadRef, {
                first,
                last,
                email,
                phone,
                status,
                description,
                tos,
                response,
                subject
            });

        defaultModal = false;
        window.location.href = "/tas";       

        } catch (error) {
            console.error('Error updating lead: ', error);
        }
    }
</script>


<Button on:click={() => (defaultModal = true)} color="alternative">Edit</Button>

<Modal title="Edit Lead" bind:open={defaultModal} class="z-50">  

<!-- Form Body -->
    <div>
        <div class="grid gap-4 mb-4 sm:grid-cols-2">
            <div>
                <Label for="first" class="mb-2 text-sm">First
                    <Input bind:value={first} class="mt-2" type="text" name="first" id="first" placeholder="First Name" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="last" class="mb-2 text-sm">Last
                    <Input bind:value={last} class="mt-2" type="text" name="last" id="last" placeholder="Last Name" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="email" class="mb-2 text-sm">Email
                    <Input bind:value={email} class="mt-2" type="text" name="email" id="email" placeholder="tutor.tas@gmail.com" autocomplete="on"/>
                </Label>
            </div>

            <div>
                <Label for="phone" class="mb-2 text-sm">Phone
                    <Input bind:value={phone} class="mt-2" type="text" name="phone" id="phone" placeholder="123-345-6789" autocomplete="on"/>
                </Label>
            </div>
        </div>   

        <DropdownDivider class="my-8"/>


        <div class="grid gap-4 mb-4 sm:grid-cols-2">

            <div>
                <Label class="mb-2 text-sm">Subject
                    <Input bind:value={subject} class="mt-2" type="text" name="subject" id="subject" autocomplete="on"/>
                </Label>
            </div> 


            <div>
                <Label class="mb-2 text-sm">Type of Services
                    <Select class="mt-2" bind:value={tos} name="tos" items={tosENUM}/>
                </Label>
            </div>

            <div class="sm:col-span-2">
                <Label for="description" class="mb-2 text-sm">Description
                    <Textarea bind:value={description} class="mt-2" id="description" name="description" placeholder="Your description here" rows="4" />
                </Label>
            </div>

        </div>


        <DropdownDivider class="my-8"/>

        <div class="grid gap-4 mt-6 sm:grid-cols-3">

            <div>
                <Label class="mb-2 text-sm">Response
                    <Select class="mt-2" bind:value={response} name="tos" items={responseENUM}/>
                </Label>
            </div>

            <div>
                <Label class="mb-2 text-sm">Status
                    <Select class="mt-2" name="status" items={statusENUM} bind:value={status} id="select" />
                </Label>
            </div>

        </div>
    </div>

<!-- Add Lead -->
    <svelte:fragment slot="footer">
        <Button on:click={updateLead} class="w-52">
            Edit Lead
        </Button>

        {#if showToast}
            <Toast dismissable={false} position="bottom-right" color="red" class="h-12">
                <svelte:fragment slot="icon">
                    <CloseCircleSolid class="w-5 h-5" />
                    <span class="sr-only">Error icon</span>
                </svelte:fragment>
                <span class="font-bold">Required</span><br>(First or Last) and (Email or Phone)
            </Toast>
        {/if}
    </svelte:fragment>


</Modal>
