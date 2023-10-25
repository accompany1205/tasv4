<script lang="ts">
	import LogoFramed from '$lib/assets/svg/LogoFramed.svelte';
	import LogoFramedDynamicText from '$lib/assets/svg/LogoFramedDynamicText.svelte';
	import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';

	import { BarsSolid } from 'flowbite-svelte-icons';
</script>

<header
	class="
        sticky
        top-0
        z-20
        grid
        h-[50px]
        max-h-16
        grid-cols-[4fr_auto_4fr]
        items-center
        
        justify-between
        gap-4
        overflow-hidden
        border-t-4
        border-emerald-500
        bg-white
        px-2
        py-0
        drop-shadow-lg
        lg:max-h-24
        "
>
	<LogoUnframedDynamicText
		fill="black"
		class="font-serif mt-auto h-[40px] max-h-[inherit] max-w-full text-lg"
	>
		<text class="dyntext" transform="translate(195 34)"> Sketchup </text>
		<text class="dyntext" transform="translate(195 76)"> Tutors & </text>
		<text class="dyntext" transform="translate(195 117)"> Services </text>
	</LogoUnframedDynamicText>

	<div class="justify-self-center"> </div>

	<div class="call w-full justify-self-end whitespace-nowrap @container sm:pl-9">
		<a
			class=" ml-auto block w-fit font-bold text-emerald-500 text-fc-[0.5rem_15cqw_1.5rem]"
			href="tel: 720-335-5282"
		>
			720-335-5282
		</a>
	</div>
</header>
