<script lang="ts">
	import {
		Footer,
		FooterLinkGroup,
		FooterLink,
		FooterBrand,
		FooterIcon,
		FooterCopyright,
		List,
		Li,
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
					by="Tutors and Services -"
				/>
				<div> 1441 N Emerson St. Denver, CO 80218 </div>
			</div>
			<button class="mt-4 text-lg text-emerald-400">
				<a href="https://www.tutorsandservices.com/privacy">Terms and Privacy Policy</a>
			</button>
			<div class="flex mt-5 space-x-6 md:mt-8">
				<FooterIcon href="https://www.facebook.com/3DTutorsandServices">
					<FacebookSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>

				<FooterIcon href="https://twitter.com/3dtutor_service">
					<TwitterSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>

				<FooterIcon href="https://www.linkedin.com/company/3d-tutors-and-services/">
					<LinkedinSolid
						class="w-6 h-6 text-white dark:text-gray-500 hover:text-gray-400 dark:hover:text-white"
					/>
				</FooterIcon>
			</div>
		</div>

		<div>
			<div class="text-3xl font-bold"
				>We are a growing network of online tutors & freelancers</div
			>
			<div class="grid grid-cols-1 gap:4 sm:grid-cols-3">
				<div class="col-a">
					<h2 class="my-6 text-2xl font-bold text-white">We Provide</h2>
					<div class="grid grid-cols-1 text-base">
						<List tag="ul">
							<Li class="mb-1">Professional services</Li>
							<Li class="mb-1">Private & flexible tutors</Li>
							<Li class="mb-1">Personalized lessons</Li>
							<Li class="mb-1">Pro online training</Li>
							<Li class="mb-1">Help for all abilities</Li>
							<Li class="mb-1">Service for all budgets</Li>
							<Li class="mb-1">Screen-share teachers</Li>
							<Li class="mb-1">Custom Zoom classes</Li>
							<Li class="mb-1">1-on-1 Software Help</Li>
						</List>
					</div>
				</div>

				<div class="col-b">
					<h2 class="my-6 text-2xl font-bold text-white">Top Classes</h2>
					<div class="grid grid-cols-1 text-base">
						<FooterLinkGroup ulClass="list-disc list-inside">
							<FooterLink
								href="https://www.tutorsandservices.com/autocad/"
								liClass="mb-1">AutoCAD</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/blender/"
								liClass="mb-1">Blender</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/cinema-4d/"
								liClass="mb-1">Cinema 4D</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/fusion-360/"
								liClass="mb-1">Fusion 360</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/revit/"
								liClass="mb-1">Revit</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/rhino-grasshopper/"
								liClass="mb-1">Rhino</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/sketchup/"
								liClass="mb-1">Sketchup</FooterLink
							>
							<FooterLink
								href="https://tutorsandservices.com/solidworks/"
								liClass="mb-1">Solidworks</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/unreal-engine/"
								liClass="mb-1">Unreal Engine</FooterLink
							>
						</FooterLinkGroup>
					</div>
				</div>

				<div class="col-c">
					<h2 class="my-6 text-2xl font-bold text-white">Top Services</h2>
					<div class="grid grid-cols-1 text-base">
						<FooterLinkGroup ulClass="list-disc list-inside">
							<FooterLink
								href="https://www.tutorsandservices.com/3d-print-modeling/"
								liClass="mb-1">3D Print Modeling</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/architectural-rendering/"
								liClass="mb-1">Architectural Rendering</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/construction-documentation/"
								liClass="mb-1">Construction Documentation</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/furniture-modeling/"
								liClass="mb-1">Furniture Modeling</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/interior-modeling/"
								liClass="mb-1">Interior Modeling</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/interior-rendering/"
								liClass="mb-1">Interior Rendering</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/mechanical-modeling/"
								liClass="mb-1">Mechanical Modeling</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/product-rendering/"
								liClass="mb-1">Product Rendering</FooterLink
							>
							<FooterLink
								href="https://www.tutorsandservices.com/virtual-tours/"
								liClass="mb-1">Virtual Tours</FooterLink
							>
						</FooterLinkGroup>
					</div>
				</div>
			</div>
		</div>
	</div>
</Footer>
