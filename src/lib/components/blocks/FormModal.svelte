<script>
    import { Button, Modal } from 'flowbite-svelte';
    let clickOutsideModal = false;
</script>
  
<Button
  class="max-w-sm items-center bg-emerald-400 p-3 text-center text-3xl font-bold text-white hover:bg-emerald-300"
  href="/form?softwarePref=SketchUp"
    >
  Get Started Today
</Button>
  
<Modal title="Terms of Service" bind:open={clickOutsideModal} autoclose outsideclose>

</Modal>