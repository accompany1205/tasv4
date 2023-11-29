<script lang="ts">
    import CardIcon from "$sanity/elements/CardIcon.svelte";
    import { PortableText } from "@portabletext/svelte";
    interface CardData {
        heading: string,
        icon: "tutoring" | "collaborative" | "contract",
        body: any
    }
    export let cardData: CardData;

</script>

<div class="card mx-auto w-full max-w-xs flex-shrink-0 bg-nile-blue-900 p-4">
    <h4 class="mb-2 text-center text-2xl font-black">{cardData.heading}</h4>
    <CardIcon icon={cardData.icon}/>
    <div class="text-center">
        <PortableText
            value={cardData.body}
            onMissingComponent={false}
            components={{}}
        />
    </div>
</div>