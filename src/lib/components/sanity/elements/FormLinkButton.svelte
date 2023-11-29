<script lang="ts">
    import type FormLink from "$lib/schemas/FormLink";
    let _class = "text-md rounded bg-emerald-400 p-2 font-medium text-white hover:bg-emerald-300 w-full";
    export {_class as class}
    export let formLink: FormLink;

    const link = formLink 
        ? formLink.url + '?' + formLink.formParams
          .map(pair => `&${pair.paramName}=${pair.paramValue}`)
          .join()
        : "/"

</script>


<a href="{link}" >
    <button class="{_class}">
        <slot>Book A Free Consultation</slot>
    </button>
</a>