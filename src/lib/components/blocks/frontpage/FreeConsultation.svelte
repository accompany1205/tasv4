<script lang="ts">
	import ConsultationIcon from '$lib/assets/svg/ConsultationIcon.svelte';
	import SectionBlue from '../common/SectionBlue.svelte';
	import LinkButton from '../common/LinkButton.svelte';
</script>

<SectionBlue title="Not sure which program to use?">
	<div
		class="flex items-center justify-center gap-x-12 micro:max-sm:flex-col micro:max-sm:gap-y-4"
	>
		<ConsultationIcon class="w-40" />
		<div class="flex flex-col gap-y-8">
			<div class="max-w">
				<h4 class="text-2xl">Contact us, and we can point you in the right direction.</h4>

				<div class="text-4xl font-bold my-4">720-335-5282</div>
			</div>

			<LinkButton
				class="bg-white text-emerald-400 hover:bg-white micro:max-sm:text-xl"
				title="Get a Free 15 Minute Consultation"
				href="https://www.tutorsandservices.com/form/?specificPerson=&softwarePref=&cameFrom="
			/>
		</div>
	</div>
</SectionBlue>
