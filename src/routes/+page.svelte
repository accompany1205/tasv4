<script>
    // Gallery
    import { Gallery } from 'flowbite-svelte';
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

    //Tutors
    import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
    import { DotsHorizontalOutline } from 'flowbite-svelte-icons';

</script>

<style>
</style>


<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Online Sketchup Classes, Zoom Tutors & Professional Services</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom. Tutors & services are available now. Call for a free consultation and demo.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="https://www.jotform.com/221775033335048" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#61ce70] hover:bg-[#69e07a] transform transition-transform duration-500 ease-in-out hover:scale-105">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>
</section>
  
<!-- <Gallery items={images} class="gap-4 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" imgClass='h-auto m-auto max-w-full aspect-square rounded-3xl'/> -->


  <Card padding="sm">
    <div class="flex justify-end">
      <DotsHorizontalOutline />
      <Dropdown class="w-36">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Export data</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </Dropdown>
    </div>

    <div class="flex flex-col items-center pb-4">
      <Avatar size="lg" src="src\lib\assets\tutors\aims.webp" />
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aims A</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400">SketchUp, V-Ray, Renderings</span>
      <span class="text-sm text-gray-500 dark:text-gray-400">$40/hr</span>
      <div class="flex mt-4 space-x-3 lg:mt-6">
        <Button class="border-solid border-2 border-emerald-400 text-black">Learn More</Button>
      </div>
    </div>
  </Card>