<script>
    // Gallery
    import { Gallery } from 'flowbite-svelte';
    import HeaderHero from '$lib/components/HeaderHero.svelte';
    import TutorList from '$lib/components/TutorList.svelte';

    const images = [
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_2.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_3.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_4.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_5.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_6.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_7.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_8.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_9.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_10.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_11.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_12.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_13.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_14.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_15.webp' },
      { alt: '', src: 'https://tas-v4.b-cdn.net/sketchup_16.webp' }
    ];

    // Ratings

    import { RatingComment } from 'flowbite-svelte';
    let comment = {
      id: '1',
      user: {
        name: 'Richard S.',
        img: {
          src: '/images/profile-picture-2.webp',
          alt: 'Richard S.'
        },
        joined: 'Joined on August 2014'
      },
      total: 5,
      rating: 4.5,
      heading: 'Thinking to buy another one!',
      address: 'the UK',
      datetime: '2022-03-25'
    };

</script>

<style>
</style>


<HeaderHero></HeaderHero>
  
<!-- <Gallery items={images} class="gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" imgClass='h-auto m-auto max-w-full aspect-square rounded-3xl'/> -->
<TutorList></TutorList>