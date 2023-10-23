<script>
    import { Button } from 'flowbite-svelte';
    import GoogleRatings from './GoogleRatings.svelte';
    import GoogleRatingsCompact from './GoogleRatingsCompact.svelte';
</script>

<div class="
    z-30
    
    w-[100dvw]
    flex
    flex-col-reverse
    flex-nowrap

    h-auto
    content-stretch
    items-stretch
    justify-stretch
    justify-items-stretch

    lg:h-12
    lg:flex-column
    lg:flex-wrap
    lg:sticky
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
        mx-auto
        flex-grow-0
        whitespace-nowrap
        ">
        <span>TutorsAndServices.com</span>
        <span>720 335 5282</span>
    </div>
    <GoogleRatingsCompact/>
    <Button href="https://www.jotform.com/221775033335048"
        class="
            flex-grow
            h-12
            bg-emerald-400
            text-2xl
            px-2
            py-1
            right-4
            rounded-none
            whitespace-nowrap
            hover:bg-emerald-300
        ">
        Free Consultation
    </Button>

</div>


