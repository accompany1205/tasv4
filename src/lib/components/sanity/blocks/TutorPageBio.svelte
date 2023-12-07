<script lang="ts">
    import type { InputValue } from "@portabletext/svelte/dist/ptTypes";
    import { PortableText } from '@portabletext/svelte';

    export let bio: InputValue
</script>

<div class="bg-alabaster-200">
    <h2 class=" m-auto max-w-screen-xl border-b-4 border-emerald-400 py-4 pl-4 text-5xl font-black text-alabaster-950">
        About Me
    </h2>
    
    <div class="mx-auto max-w-screen-xl ">
        <div class="p-4 font-medium text-alabaster-950 prose prose-lg">
            <PortableText
                value={bio}
                components={{}}
            />
        </div>
    </div>
</div>