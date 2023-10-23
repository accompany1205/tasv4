<script>
    import { Button } from 'flowbite-svelte';
    import GoogleRatings from './GoogleRatings.svelte';
    import GoogleRatingsCompact from './GoogleRatingsCompact.svelte';
</script>

<div class="
    z-30
    
    w-full
    flex
    flex-row
    flex-wrap
    h-36
    gap-0
    p-4
    content-stretch
    items-start
    justify-stretch
    justify-items-stretch
    sm:gap-4
    lg:h-12
    lg:flex-column
    lg:flex-wrap
    lg:sticky
    lg:gap-0
    lg:p-0
    bg-gray-700
    text-white
    bottom-0">
    <div class="
        h-12
        flex
        align-middle
        gap-2
        text-xl
        font-black
        items-center
        px-4
        mx-auto
        flex-grow-[2]
        sm:whitespace-nowrap
        ">
        <span>TutorsAndServices.com</span>
        <span>720 335 5282</span>
    </div>
    <GoogleRatingsCompact/>
    <Button href="https://www.jotform.com/221775033335048"
        class="
            fixed
            bottom-4
            right-4
            lg:relative
            lg:bottom-[unset]
            lg:right-[unset]
            flex-grow
            h-12
            bg-emerald-400
            text-2xl
            px-2
            py-1
            
            rounded-none
            whitespace-nowrap
            hover:bg-emerald-300
        ">
        Free Consultation
    </Button>

</div>


