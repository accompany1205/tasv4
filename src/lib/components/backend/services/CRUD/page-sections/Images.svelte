<script lang="ts">
    import EditLogo from "./edit-images/EditLogo.svelte";
    export let service:any;
</script>


<div class="flex gap-10 text-gray-800 font-semibold">
    <div class="mb-2 text-sm w-4/12 ">Logo
        <EditLogo service={service}/>
    </div>

    <div class="mb-2 text-sm w-8/12 ">Images

    </div>
</div>