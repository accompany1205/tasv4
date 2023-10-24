<script lang="ts">
	import { browser } from "$app/environment";
  export const ssr = false;
  import { onMount } from 'svelte';
  
  onMount(async () => { 
    let script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://form.jotform.com/jsform/213494772938167';
      document.getElementById("jotform").appendChild(script);
  });
</script>

<div id="jotform">
</div>



  