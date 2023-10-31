<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import GoogleRatingsCompact from '$lib/components/cards/GoogleRatingsCompact.svelte';
    import CTAVisibility from "$lib/stores/cta_visibility_anchor";

    let viz_state = false; 
    let viz_class = "";
    $: viz_class = viz_state ? "folded:inline-flex" : "folded:hidden"
    const visibility = CTAVisibility.subscribe((value) => {
        viz_state = !value
    })
</script>

<div
	class="
    lg:flex-column
    
    bottom-0
    z-30
    flex
    h-36
    w-full
    flex-row
    flex-wrap
    content-stretch
    items-start
    justify-stretch
    justify-items-stretch
    gap-0
    bg-gray-700
    p-4
    text-white
    sm:gap-4
    lg:sticky
    lg:h-12
    lg:flex-wrap
    lg:gap-0
    lg:p-0
    text-fc-[0.5rem_15cqw_1.5rem]"
>
	<div
		class="
        mx-auto
        flex
        h-12
        flex-grow-[2]
        items-center
        gap-2
        lg:px-0
        align-middle
        
        font-bold
        
        "
	>
		<span class="ml-2">Call Anytime:</span>
        <a
        class="  block w-fit font-bold text-white "
        href="tel: 720-335-5282"
    >
        720-335-5282
    </a>
	</div>
	<GoogleRatingsCompact />
	<Button
		href="https://www.jotform.com/221775033335048"
		class="
            fixed
            bottom-4
            right-4
            h-12
            flex-grow
            whitespace-nowrap
            rounded-none
            bg-emerald-400
            px-2
            py-1
            text-2xl
            hover:bg-emerald-300
            
            lg:relative
            lg:bottom-[unset]
            lg:right-[unset]
            {viz_class}
            lg:inline-flex
        "
	>
		Free Consultation
	</Button>
</div>
