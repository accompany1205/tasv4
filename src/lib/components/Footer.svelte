<script>
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		FooterCopyright,
	} from 'flowbite-svelte';
	import { FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons';

	import LogoFramed from '$lib/assets/svg/LogoFramed.svelte';
</script>

<Footer footerType="sitemap" class="overflow-x-hidden bg-nile-blue-900">
	<div class="p-4">
		<LogoFramed class="" fill="white" />
	</div>
	<div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Company</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/">About</FooterLink>
				<FooterLink liClass="mb-4" href="/">Careers</FooterLink>
				<FooterLink liClass="mb-4" href="/">Brand Center</FooterLink>
				<FooterLink liClass="mb-4" href="/">Blog</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Services</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/">Professional services</FooterLink>
				<FooterLink liClass="mb-4" href="/">Private & flexible tutors</FooterLink>
				<FooterLink liClass="mb-4" href="/">Personalized lessons</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
				<FooterLink liClass="mb-4" href="/">Pro online training</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Legal</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/">Privacy Policy</FooterLink>
				<FooterLink liClass="mb-4" href="/">Licensing</FooterLink>
				<FooterLink liClass="mb-4" href="/">Terms & Conditions</FooterLink>
			</FooterLinkGroup>
		</div>
		<div>
			<h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Download</h2>
			<FooterLinkGroup ulClass="text-gray-300">
				<FooterLink liClass="mb-4" href="/">iOS</FooterLink>
				<FooterLink liClass="mb-4" href="/">Android</FooterLink>
				<FooterLink liClass="mb-4" href="/">Windows</FooterLink>
				<FooterLink liClass="mb-4" href="/">MacOS</FooterLink>
			</FooterLinkGroup>
		</div>
	</div>
	<div class="bg-nile-blue-950 px-4 py-6 md:flex md:items-center md:justify-between">
		<FooterCopyright
			spanClass="text-sm text-gray-300 sm:text-center"
			href="/"
			by="Tutors and Services"
		/>
		<div class="mt-4 flex space-x-6 sm:justify-center md:mt-0">
			<FooterIcon href="/">
				<FacebookSolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<DiscordSolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<TwitterSolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="/">
				<GithubSolid
					class="h-4 w-4 text-gray-500 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
