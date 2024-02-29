<script lang="ts">
	import { onMount } from 'svelte';
	import type { SwiperContainer } from 'swiper/element';

	export let swiper: SwiperContainer;
	export let topControl: boolean = false;
	let _class = '';
	export { _class as class };

	let swiperPrev: HTMLElement;
	let swiperNext: HTMLElement;

	onMount(() => {
		swiperNext.addEventListener('click', () => {
			swiper.swiper.slideNext();
		});
		swiperPrev.addEventListener('click', () => {
			swiper.swiper.slidePrev();
		});
	});
</script>

<div class="{_class}">
	<div
		bind:this="{swiperPrev}"
		class="{`absolute left-4 ${topControl ? '-top-7' : '-bottom-11'} xl:inset-y-0 xl:-left-6 lg:left-[4.5rem] z-50 flex items-center`}"
	>
		<slot name="swiper-prev" />
	</div>
	<div
		bind:this="{swiperNext}"
		class="{`absolute right-4 ${topControl ? '-top-7' : '-bottom-11'} xl:inset-y-0 z-50 xl:-right-6 lg:right-[4.5rem] flex items-center justify-center`}"
	>
		<slot name="swiper-next" />
	</div>
</div>
