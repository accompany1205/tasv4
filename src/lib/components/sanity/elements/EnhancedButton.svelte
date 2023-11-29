<script lang="ts">
    export let data: {
        buttonText: string,
        actionIdent?: string,
        enhancedUrl: {
            url: string,
            params: {
                name: string,
                value: string
            }[]
        }
    } | undefined

    let _class = "text-md rounded bg-emerald-400 p-2 font-medium text-white hover:bg-emerald-300 w-full";
    export {_class as class}

    const link = data 
        ? data.enhancedUrl.url + '?' + data.enhancedUrl.params
          .map(pair => `&${pair.name}=${pair.value}`)
          .join("")
        : "/"
</script>

<a href="{link}" >
    <button class="{_class}">
        <slot>{data?.buttonText}</slot>
    </button>
</a>