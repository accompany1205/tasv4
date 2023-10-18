<script lang="ts">
	import LogoFramed from '$lib/assets/svg/LogoFramed.svelte';
	import LogoFramedDynamicText from '$lib/assets/svg/LogoFramedDynamicText.svelte';
	import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';

	import { BarsSolid } from 'flowbite-svelte-icons';
</script>

<header
	class="
        grid
        h-[50px]
        max-h-16
        grid-cols-3
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
		class="font-serif mt-auto h-[40px] max-h-[inherit] text-lg "
	>
		<text class="dyntext" transform="translate(195 34)"> Sketchup </text>
		<text class="dyntext" transform="translate(195 76)"> Tutors & </text>
		<text class="dyntext" transform="translate(195 117)"> Services </text>
	</LogoUnframedDynamicText>

    <div class="justify-self-center">
        <BarsSolid />
    </div>

	<div class="call justify-self-end whitespace-nowrap pl-4 sm:pl-9">
		<a class="text-xl font-bold text-emerald-500" href="tel: 720-335-5282"> 720-335-5282 </a>
	</div>
</header>
