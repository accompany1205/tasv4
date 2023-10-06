<script lang="ts">
        import LogoFramed from "$lib/assets/svg/LogoFramed.svelte";
        import LogoFramedDynamicText from "$lib/assets/svg/LogoFramedDynamicText.svelte";
</script>
<header
	class="
        flex
        flex-row
        items-center
        justify-between
        border-t-4
        border-emerald-500
        bg-white
        px-2
        py-0
        drop-shadow-lg
        max-h-16
        lg:max-h-24
        h-auto
        overflow-hidden
        "
>
	<LogoFramedDynamicText fill="black" class="h-[inherit] max-h-[inherit] text-lg font-serif py-2 ">
        <text class="dyntext" transform="translate(180 34)">
            Sketchup
        </text>
        <text class="dyntext" transform="translate(180 76)">
            Tutors &
        </text>
        <text class="dyntext" transform="translate(180 117)">
            Services
        </text>
    </LogoFramedDynamicText>
	<div class="content"> </div>
	<div class="call whitespace-nowrap pl-4 sm:pl-9">
		<a class="text-xl font-bold text-emerald-500" href="tel: 720-335-5282"> 720-335-5282 </a>
	</div>
</header>
