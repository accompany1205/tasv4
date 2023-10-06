<script lang="ts">
	import LogoFramed from '$lib/assets/svg/LogoFramed.svelte';
	import LogoFramedDynamicText from '$lib/assets/svg/LogoFramedDynamicText.svelte';
</script>

<header
	class="
        flex
        h-auto
        max-h-16
        flex-row
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
	<LogoFramedDynamicText
		fill="black"
		class="h-[inherit] max-h-[inherit] py-2 font-serif text-lg "
	>
		<text class="dyntext" transform="translate(180 34)"> Sketchup </text>
		<text class="dyntext" transform="translate(180 76)"> Tutors & </text>
		<text class="dyntext" transform="translate(180 117)"> Services </text>
	</LogoFramedDynamicText>
	<div class="content"> </div>
	<div class="call whitespace-nowrap pl-4 sm:pl-9">
		<a class="text-xl font-bold text-emerald-500" href="tel: 720-335-5282"> 720-335-5282 </a>
	</div>
</header>
