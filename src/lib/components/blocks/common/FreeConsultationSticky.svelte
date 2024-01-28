<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import GoogleRatings from '$lib/components/cards/GoogleRatings.svelte';
	import GoogleRatingsCompact from '$lib/components/cards/GoogleRatingsCompact.svelte';
	import CTAVisibility from '$lib/stores/cta_visibility_anchor';
	import FormModal from '../FormModal.svelte';

	let viz_state = false;
	let viz_class = '';
	$: viz_class = viz_state ? 'folded:inline-flex' : 'folded:hidden';
	const visibility = CTAVisibility.subscribe((value) => {
		viz_state = !value;
	});
</script>

<div
	class="
    grid
    grid-cols-1
    items-start
    justify-between
    bottom-0
    z-30
    h-36
    w-full
    bg-nile-blue-900
    text-white
    lg:pl-6
    lg:grid-cols-3
    lg:gap-7
    sm:gap-4
    lg:sticky
    lg:h-12
    text-fc-[0.5rem_15cqw_1.5rem]"
>
	<div
		class="
        flex
        h-12
        flex-grow-[2]
        items-center
        gap-2
        lg:px-0
        align-middle
        
        font-bold
        lg:text-xl
        micro:max-md:text-lg
        "
	>
		<span class="micro:max-lg:ml-2">Call Anytime:</span>
		<a class="  block w-fit font-bold text-white" href="tel: 720-335-5282"> 720-335-5282 </a>
	</div>
	<GoogleRatingsCompact />

	<FormModal
		butClass="            
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
            lg:inline-flex"
		butTitle="Free Consultation"
	/>
</div>
