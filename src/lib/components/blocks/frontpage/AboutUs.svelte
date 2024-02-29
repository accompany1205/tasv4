<script lang="ts">
	import SectionWhite from '$lib/components/blocks/common/SectionWhite.svelte';
	import FormModal from '../FormModal.svelte';
	import TutorsHeadImage from '../common/TutorsHeadImage.svelte';

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

<SectionWhite title="About Us">
	<div class="card mx-auto grid max-w-screen-xl gap-4 sm:grid-cols-2 text-gray-500">
		<div class="max-w">
			<div>
				<h4 class="py-4 pt-0 text-2xl text-gray-900">ON-DEMAND PROFESSIONALS</h4>
				<p>
					We are a team of tutors and freelances that are hire-able on an as-needed basis
					for professional help with your projects. Call us with a quick question, or a
					big project. Our availability is flexible. We have a variety of skillsets and
					prices.
				</p>
			</div>

			<div>
				<h4 class="py-4 text-2xl text-gray-900">SCREEN-SHARE TUTORS AND FREELANCERS</h4>
				<p>
					We teach remotely, so you can learn from the comfort of your home, from the
					jobsite, or from the beach! We teach classes via Zoom screen-share, so we can
					see each others’ screens and cursors. It can take hours to search online for 1
					simple piece of information, but just minutes to ask your private tutor. Don’t
					struggle alone, get help from a real person online!
				</p>
			</div>

			<FormModal
				butClass="mt-4 bg-emerald-400 text-white hover:bg-emerald-500 text-sm lg:text-3xl font-bold"
				butTitle="Get a Free Consultation"
			/>
		</div>

		<TutorsHeadImage
			featuredTutors="{featuredTutorsHero}"
			class="flex items-baseline flex-wrap"
		/>
	</div>
</SectionWhite>
