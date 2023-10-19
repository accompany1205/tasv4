<script lang="ts">
    import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, FooterCopyright } from 'flowbite-svelte';
    import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
    import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';
    import GoogleRatings from './GoogleRatings.svelte';

</script>
  
  <Footer footerType="sitemap" class="bg-nile-blue-900">
    <div class="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-2 xl:grid-cols-4">

      <div class="max-w-1/4">
        <LogoUnframedDynamicText
        fill="white"
        class="font-serif mt-auto  max-h-[inherit] text-lg max-w-full"
        >
          <text class="dyntext" transform="translate(195 76)"> Tutors & </text>
          <text class="dyntext" transform="translate(195 117)"> Services </text>
        </LogoUnframedDynamicText>
        <GoogleRatings/>
      </div>

      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">We Provide</h2>
        <FooterLinkGroup ulClass="text-gray-300">
            <FooterLink liClass="mb-4" href="/">Professional services</FooterLink>
            <FooterLink liClass="mb-4" href="/">Private & flexible tutors</FooterLink>
            <FooterLink liClass="mb-4" href="/">Personalized lessons</FooterLink>
            <FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
            <FooterLink liClass="mb-4" href="/">Help for all abilities</FooterLink>
            <FooterLink liClass="mb-4" href="/">Service for all budgets</FooterLink>
            <FooterLink liClass="mb-4" href="/">Screen-share teachers</FooterLink>
            <FooterLink liClass="mb-4" href="/">Custom Zoom classes</FooterLink>
            <FooterLink liClass="mb-4" href="/">1-on-1 software help</FooterLink>
        </FooterLinkGroup>
    </div>
    
    <div>
      <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Top Classes</h2>
      <FooterLinkGroup ulClass="text-gray-300">
          <FooterLink liClass="mb-4" href="/">AutoCAD</FooterLink>
          <FooterLink liClass="mb-4" href="/">Blender</FooterLink>
          <FooterLink liClass="mb-4" href="/">Cinema 4D</FooterLink>
          <FooterLink liClass="mb-4" href="/">Fusion 360</FooterLink>
          <FooterLink liClass="mb-4" href="/">Maya</FooterLink>
          <FooterLink liClass="mb-4" href="/">Revit</FooterLink>
          <FooterLink liClass="mb-4" href="/">Rhino</FooterLink>
          <FooterLink liClass="mb-4" href="/">Sketchup</FooterLink>
          <FooterLink liClass="mb-4" href="/">Solidworks</FooterLink>
          <FooterLink liClass="mb-4" href="/">Unreal Engine</FooterLink>
      </FooterLinkGroup>
  </div>
  

      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Top Services</h2>
        <FooterLinkGroup ulClass="text-gray-300">
            <FooterLink liClass="mb-4" href="/">3D Print Modeling</FooterLink>
            <FooterLink liClass="mb-4" href="/">Architectural Rendering</FooterLink>
            <FooterLink liClass="mb-4" href="/">Construction Documentation</FooterLink>
            <FooterLink liClass="mb-4" href="/">Construction Modeling</FooterLink>
            <FooterLink liClass="mb-4" href="/">Furniture Modeling</FooterLink>
            <FooterLink liClass="mb-4" href="/">Interior Modeling</FooterLink>
            <FooterLink liClass="mb-4" href="/">Interior Rendering</FooterLink>
            <FooterLink liClass="mb-4" href="/">Mechanical Modeling</FooterLink>
            <FooterLink liClass="mb-4" href="/">Product Rendering</FooterLink>
            <FooterLink liClass="mb-4" href="/">Virtual Tours</FooterLink>
        </FooterLinkGroup>
    </div>
    

    </div>

    <div class="py-2 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
      <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Tutors and Services™ - 1441 N Emerson St. Denver, CO 80218 -" />
      <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
        <FooterIcon href="/">
          <FacebookSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <DiscordSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <TwitterSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
        <FooterIcon href="/">
          <GithubSolid class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white" />
        </FooterIcon>
      </div>
    </div>
  </Footer>