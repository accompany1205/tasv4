<script lang="ts">
	import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import ImageCarousel from '$lib/components/cards/ImageCarousel.svelte';
	import { headshots } from '$lib/tutors';
	import { Button } from 'flowbite-svelte';
	import FormModal from '../FormModal.svelte';
	import { currentUser } from '$lib/stores/sessions';
	import { logout } from '$lib/api/auth';
	import { goto } from '$app/navigation';
	import { get } from 'svelte/store';

	export let images = [{ alt: '', srcset: '' }];
	export let featuredTutors = [''];

	function handleButtonClick() {
		gtag('event', 'sketchup_form_clicked');
	}

	// console.log({currentUser: get(currentUser).uid});
	function handleLoginClick(){
		goto("/login");
	}
	async function  handleLogoutClick(){
		await logout();
	}
</script>

<section class="overflow-x-hidden bg-[#e8e8e8] dark:bg-gray-900">
	<div class="bg-nile-blue-900 py-3 sm:py-6">
		<!-- fluid-h1 -->
		<h1
			class="
            m-auto
            max-w-screen-xl
			px-4
			text-left
			font-bold
            leading-none
            tracking-tight
            text-white

			text-fc-[1.3rem_3.5cqw_2.75rem]
           "
		>
			Online&nbsp;Sketchup&nbsp;Classes, Zoom&nbsp;Tutors<wbr /> &&nbsp;Professional&nbsp;Services
		</h1>
		<div class="relative">
			<div class="absolute right-2 top-[-40px] flex w-full justify-end">
				<div class="border px-8 py-2 rounded-lg flex items-center justify-center text-white cursor-pointer font-bold">
					{#if $currentUser?.uid}
						<span on:click = {handleLogoutClick}>Log Out</span>
					{:else}
						<span on:click = {handleLoginClick}>Log In</span>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div
		class="
			mx-auto
			grid
			max-w-screen-xl
			grid-rows-[auto_1fr]
			items-top
			gap-x-4

			px-3
			py-2
			sm:grid-cols-[minmax(100px,_1fr)_1fr]
			lg:gap-x-8
			m-6
			"
	>
		<div class="left-col mt-3 mb-14">
			<ImageCarousel images="{images}" showLogo="{false}" />
		</div>

		<div class="right-col grid shrink-0 grid-rows-[1fr_auto] rounded-lg micro:max-sm:text-lg">
			<div class="w-full max-w-md pb-6 @container">
				<div class="flex">
					<h2 class="mb-4 max-w-lg font-bold text-fc-[1.5rem_5cqw_8rem]">
						Don't Struggle Alone,&nbsp;Get Sketchup Help from a Pro.
					</h2>

					<div class="hidden lg:flex">
						{#each featuredTutors as tutorID, index}
							<div class="-mx-4 flex-shrink-0">
								<img
									srcset="{headshots[tutorID]}"
									alt="Featured Tutor"
									class="h-20 w-20 flex-shrink-0 rounded-full p-1"
									width="80"
									height="80"
								/>
							</div>
						{/each}
					</div>
				</div>

				<p
					class="text-left font-normal text-gray-950 micro:max-unfolded:text-lg unfolded:text-xl"
				>
					Get SketchUp classes & 1-on-1 help from a live SketchUp tutor online via Zoom.
					Call for a free consultation and demo.
				</p>
				<p
					class="text-left font-normal text-gray-950 micro:max-unfolded:text-lg unfolded:text-xl"
				>
					We are a team of tutors and freelancers that are hireable on an as-needed basis
					for professional help with your projects.
				</p>
			</div>

			<GoogleRatings />

			<FormModal />
		</div>
	</div>
</section>
