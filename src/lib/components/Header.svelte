<script lang="ts">
	import LogoFramed from '$lib/assets/svg/LogoFramed.svelte';
	import LogoFramedDynamicText from '$lib/assets/svg/LogoFramedDynamicText.svelte';
        import LogoUnframedDynamicText from '$lib/assets/svg/LogoUnframedDynamicText.svelte';

        import { BarsSolid } from 'flowbite-svelte-icons';
</script>

<header
	class="
        grid
        grid-cols-[auto_auto_1fr]
        gap-4
        h-[50px]
        max-h-16
        
        items-center
        justify-between
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
        <BarsSolid />
	<LogoUnframedDynamicText
		fill="black"
		class="h-[40px] mt-auto max-h-[inherit] font-serif text-lg "
	>
		<text class="dyntext" transform="translate(195 34)"> Sketchup </text>
		<text class="dyntext" transform="translate(195 76)"> Tutors & </text>
		<text class="dyntext" transform="translate(195 117)"> Services </text>
	</LogoUnframedDynamicText>
	
	<div class="call whitespace-nowrap pl-4 sm:pl-9 justify-self-end">
		<a class="text-xl font-bold text-emerald-500" href="tel: 720-335-5282"> 720-335-5282 </a>
	</div>
</header>
