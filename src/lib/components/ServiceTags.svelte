<script>
     /**
	 * @type {any[]}
	 */
      export let keywords = [];
  </script>
  
  <style>
  </style>
  
  <div>
    {#each keywords as keyword}
      <span class="py-1 px-2 m-1 inline-block bg-slate-100 rounded-md text-sm font-medium">{keyword}</span>
    {/each}
  </div>
  