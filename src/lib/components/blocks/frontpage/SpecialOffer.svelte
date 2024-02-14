<script lang="ts">
	import SectionWhite from '$lib/components/blocks/common/SectionWhite.svelte';
	import OffersIcon from '$lib/assets/svg/OffersIcon.svelte';
	import TutorsHeadImage from '../common/TutorsHeadImage.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import FormModal from '../FormModal.svelte';

	let featuredTutorsHero = [
		'1619',
		'2515',
		'2972',
		'12112',
		'12113',
		'18035',
		'18836',
		'20684',
		'22530',
		'24291',
		'12081',
		'12115',
		'2652',
	];
</script>

<SectionWhite title="Don't struggle alone, Get help from a professional.">
	<div class="flex flex-col items-start justify-start max-w-screen-xl gap-4">
		<H4 class="tracking-widest text-center">START A CONVERSATION</H4>
		<TutorsHeadImage
			featuredTutors="{featuredTutorsHero}"
			class="flex items-baseline flex-wrap"
		/>

		<div class="flex items-center gap-10 py-4 micro:max-sm:flex-col micro:max-sm:gap-2.5">
			<OffersIcon class="w-[86px]" fill="#61ce70" />
			<div class="font-bold text-6xl text-center">Special Offer</div>
		</div>
		<H4 class="text-xl"
			>Call or send a message and we would be happy to discuss your project!</H4
		>
		<H4 class="text-3xl font-semibold text-emerald-400 !py-0">720-335-5282</H4>
		<FormModal
			butClass="mt-1 bg-emerald-400 text-white hover:bg-emerald-500 text-xs md:text-3xl font-bold"
			butTitle="Get a Free 15 Minute Consultation"
		/>
	</div>
</SectionWhite>
