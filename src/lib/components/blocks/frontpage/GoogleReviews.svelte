<script lang="ts">
	import type { SwiperContainer } from 'swiper/element';
	import LinkButton from '../common/LinkButton.svelte';
	import GoogleReviewCard from '$lib/components/cards/GoogleReviewCard.svelte';
	import SwiperSlider from '../common/SwiperSlider.svelte';
	import H3 from '$lib/components/elements/H3.svelte';

	let swiper: SwiperContainer;

	const reviews: GoogleReviewRating[] = [
		{
			name: '1 samriddhi J.',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocJWTJp7WGBCrdW6rEEKvxK_C-2VAna9-JdvtdbIPWS_=s120-c-rp-mo-s256-br100',
			comment:
				'Harry is really patient and will answer your questions about blender no matter how many times you ask them. He also has a really systematic way of teaching that makes it easy to learn how to use the software.',
			rating: 4,
			date: '25 / 8 / 2023',
		},
		{
			name: '2 J D',
			image: 'https://lh3.googleusercontent.com/a-/ALV-UjVl4-gKyoj1T84kOeQbv7OsJYdoXKcovl8mvDXx1xaacsQ=s120-c-rp-mo-s256-br100',
			comment: 'He was knowledgeable patient and helped me tremendously',
			rating: 4.5,
			date: '25 / 12 / 2022',
		},
		{
			name: '3 Tyrone G.',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocJjIX0SEm8Wo47qWeKpFTJkqromcBVlsDrQ7LdvJx0W=s120-c-rp-mo-s256-br100',
			comment: 'Very patient and skilled at explaining complex topics',
			rating: 5,
			date: '25 / 5 / 2023',
		},
		{
			name: '4 Richard L.',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocJjIX0SEm8Wo47qWeKpFTJkqromcBVlsDrQ7LdvJx0W=s120-c-rp-mo-s256-br100',
			comment:
				'Sukey was of great help for me just starting out in CAD jewelry design. She’s very knowledgeable, respectful, and committed to her work. I think anyone would be happy to invest their time and money in learning from someone like Sukey!',
			rating: 5,
			date: '25 / 1 / 2023',
		},
		{
			name: '5 Tam',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocJjIX0SEm8Wo47qWeKpFTJkqromcBVlsDrQ7LdvJx0W=s120-c-rp-mo-s256-br100',
			comment:
				'Calvin R was extremely helpful with teaching me Grasshopper for my upcoming project! I recommend him for anyone who’s struggling with this software, he’s a hugeee help!!',
			rating: 4,
			date: '25 / 9 / 2023',
		},
		{
			name: '6 Rod G.',
			image: 'https://lh3.googleusercontent.com/a/ACg8ocJWTJp7WGBCrdW6rEEKvxK_C-2VAna9-JdvtdbIPWS_=s120-c-rp-mo-s256-br100',
			comment:
				'Geoff is the best!  Whole heartedly recommend his web services. He is super responsive and very knowledgeable .',
			rating: 5,
			date: '25 / 10 / 2023',
		},
	];
</script>

<section class="bg-nile-blue-900 p-4 text-white">
	<div class="m-auto max-w-screen-xl">
		<H3 class="break-words">Google Reviews</H3>

		<div class="text-white">
			<div class="swiper">
				<div
					class="m-auto mx-auto h-[320px] max-w-full xl:max-w-screen-xl"
					style="container-type: size;"
				>
					<SwiperSlider>
						{#each reviews as review}
							<swiper-slide class="max-w-[440px]">
								<div class="m-auto max-w-2xl flex-shrink-0 py-2">
									<GoogleReviewCard review="{review}" />
								</div>
							</swiper-slide>
						{/each}
					</SwiperSlider>
				</div>

				<div class=""
					><LinkButton
						title="Read All Reviews"
						class="mt-4 bg-emerald-400 text-white text-xl font-medium hover:bg-emerald-500"
					/></div
				>
			</div>
		</div>
	</div>
</section>
