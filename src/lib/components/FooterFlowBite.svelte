<script lang="ts">
    import { Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, FooterCopyright } from 'flowbite-svelte';
    import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';
    import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';
    import { Rating, AdvancedRating, ScoreRating } from 'flowbite-svelte';

</script>
  
  <Footer footerType="sitemap" class="bg-nile-blue-900">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">

      <div class="max-w-1/4">
        <LogoUnframedDynamicText
        fill="white"
        class="font-serif mt-auto  max-h-[inherit] text-lg max-w-full"
        >
          <text class="dyntext" transform="translate(195 76)"> Tutors & </text>
          <text class="dyntext" transform="translate(195 117)"> Services </text>
        </LogoUnframedDynamicText>

        <!-- Google Review -->
        <div class="flex justify-start h-28	bg-grey">
          <img src="temp/google.webp" class="w-24" alt="">
          <div class="font-akshar text-white">
            <div>Google Rating</div>

            <div class="flex justify-center align-middle text-center items-center	">
              <span>5.0</span>
              <Rating class="w-24" id="example-1b" total={5} size={50} rating={5} />
            </div>

            <div>Based on 244 Reviews</div>
          </div>
        </div>

      </div>

      <div>
        <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">We Provide</h2>
        <FooterLinkGroup ulClass="text-gray-300">
          <FooterLink liClass="mb-4" href="/">About</FooterLink>
          <FooterLink liClass="mb-4" href="/">Careers</FooterLink>
          <FooterLink liClass="mb-4" href="/">Brand Center</FooterLink>
          <FooterLink liClass="mb-4" href="/">Blog</FooterLink>
        </FooterLinkGroup>
      </div>

      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Top Classes</h2>
        <FooterLinkGroup ulClass="text-gray-300">
          <FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
          <FooterLink liClass="mb-4" href="/">Licensing</FooterLink>
          <FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
        </FooterLinkGroup>
      </div>

      <div>
        <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Top Services</h2>
        <FooterLinkGroup ulClass="text-gray-300">
          <FooterLink liClass="mb-4" href="/">iOS</FooterLink>
          <FooterLink liClass="mb-4" href="/">Android</FooterLink>
          <FooterLink liClass="mb-4" href="/">Windows</FooterLink>
          <FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
        </FooterLinkGroup>
      </div>

    </div>

    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
      <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/" by="Flowbite™" />
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