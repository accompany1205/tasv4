<script lang="ts">
    import { Section, Quotes, Testimonial, TestimonialCard, TestimonialCardItem } from 'flowbite-svelte-blocks';
    import { Spinner } from 'flowbite-svelte';
    import { onMount } from 'svelte';

    onMount(() => {
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);

        
    });
</script>

<svelte:head>
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('event', 'conversion', {'event_category': 'form', 'event_label': 'sketchup_form_submitted'});
  </script>

  <title>Sketchup ThankYou</title>
</svelte:head>




<Section name="testimonial">
  <TestimonialCard>
    <svelte:fragment slot="header">
      <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Thank you!</h2>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">We will contact you as soon as possible!</p>
      <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">Looking forward to working with you!</p>
      <p class="font-light text-gray-500 m-10 mb-[999px] sm:text-xl dark:text-gray-400">Redirecting you back to Home <Spinner /></p>
    </svelte:fragment>
  </TestimonialCard>
</Section>