<script lang="ts">
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		FooterCopyright,
	} from 'flowbite-svelte';
	import {
		FacebookSolid,
		GithubSolid,
		DiscordSolid,
		TwitterSolid,
		LinkedinSolid,
	} from 'flowbite-svelte-icons';
	import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';
</script>

<Footer footerType="sitemap" class="bg-nile-blue-900 text-white ">
	<div class="grid grid-cols-1 gap-8 py-8 px-6 md:grid-cols-[1fr_2fr]">
		<div class="max-w-1/4">
			<LogoUnframedDynamicText
				fill="white"
				class="font-serif mt-auto  max-h-[inherit] text-lg max-w-lg"
			>
				<text class="dyntext" transform="translate(195 76)"> Tutors & </text>
				<text class="dyntext" transform="translate(195 117)"> Services </text>
			</LogoUnframedDynamicText>
			<div class="text-white">
				<FooterCopyright
					spanClass="text-sm text-gray-300 sm:text-center"
					href="/"
					by="Tutors and Services — All Rights Reserved"
				/>
				<div> 1441 N Emerson St. Denver, CO 80218 </div>
			</div>
			<button class="my-2 p-2 bg-nile-blue-700 text-lg">
				<a href="https://www.tutorsandservices.com/privacy">Terms and Privacy Policy</a>
			</button>
			<div class="flex mt-5 space-x-6 md:mt-8">
				<FooterIcon href="/">
					<FacebookSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>

				<FooterIcon href="/">
					<TwitterSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>
				<FooterIcon href="/">
					<LinkedinSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>
			</div>
		</div>

		<div>
			<div class="text-3xl font-bold uppercase"
				>We are a growing network of online tutors & freelancers</div
			>
			<div class="grid grid-cols-1 sm:grid-cols-2">
                <div class="col-a">
                    <h2 class="my-6 text-2xl font-bold uppercase text-white">We Provide</h2>
                    <div class="grid grid-cols-1 xl:grid-cols-2 text-base">
                        <FooterLinkGroup ulClass="list-disc list-inside">
                            <FooterLink liClass="mb-1" href="/">Professional services</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Private & flexible tutors</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Personalized lessons</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Pro online training</FooterLink>
                        </FooterLinkGroup>
                        <FooterLinkGroup ulClass="list-disc list-inside xl:-mt-10">
                            <FooterLink liClass="mb-1" href="/">Help for all abilities</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Service for all budgets</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Screen-share teachers</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Custom Zoom classes</FooterLink>
                            <FooterLink liClass="mb-1" href="/">1-on-1 software help</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
                <div class="col-b">
                    <h2 class="my-6 text-2xl font-bold uppercase text-white">Top Services</h2>
                    <div class="grid grid-cols-1 xl:grid-cols-2 text-base">
                        <FooterLinkGroup ulClass="list-disc list-inside">
                            <FooterLink liClass="mb-1" href="/">3D Print Modeling</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Architectural Rendering</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Construction Documentation</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Construction Modeling</FooterLink>
                        </FooterLinkGroup>
                        <FooterLinkGroup ulClass="list-disc list-inside xl:-mt-10">
                            <FooterLink liClass="mb-1" href="/">Furniture Modeling</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Interior Modeling</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Interior Rendering</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Mechanical Modeling</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Product Rendering</FooterLink>
                            <FooterLink liClass="mb-1" href="/">Virtual Tours</FooterLink>
                        </FooterLinkGroup>
                    </div>
                </div>
            </div>
		</div>
	</div>
    <!-- <FreeConsultationSticky/> -->
</Footer>
