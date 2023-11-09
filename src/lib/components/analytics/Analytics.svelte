<script lang="ts">
    import { page } from '$app/stores'
  
    $: {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'G-C6W85YZ4Q5', {
          page_title: document.title,
          page_path: $page.url.pathname,
        })
      }
    }

    $: {
      if (typeof gtag !== 'undefined') {
        gtag('config', 'AW-11398048179', {
          page_title: document.title,
          page_path: $page.url.pathname,
        })
      }
    }
</script>
  
<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6W85YZ4Q5"></script>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-C6W85YZ4Q5');
  </script>

  <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11398048179"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-11398048179');
  </script>
</svelte:head>
  