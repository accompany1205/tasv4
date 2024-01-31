<script lang="ts">
	import { Hr } from 'flowbite-svelte';
	import ServiceCard from '$lib/components/cards/ServiceCard.svelte';
	import H3 from '$lib/components/elements/H3.svelte';
	import H4 from '$lib/components/elements/H4.svelte';
	import P from '$lib/components/elements/P.svelte';
	import { sideservices } from './side.js';

	export let service:any;
	export let subServices:any [] = [];

    let transformedSubServices = subServices.map(subService => {
        return {
            ...subService,
            images: subService.images.map((imageUrl: any) => {
                return {
                    alt: '',
                    src: imageUrl,
                    title: ''
                };
            })
        };
    });

</script>

<div class="bg-nile-blue-900 p-4 text-white">
	<H3 class="m-auto max-w-screen-xl">Sketchup Services We Provide</H3>

	{#each transformedSubServices as sub}
		<ServiceCard images={sub.images}>
			<H4>{sub.name}</H4>
			<P>{sub.description}</P>
		</ServiceCard>
		<Hr classHr="m-0 mb-14 mx-auto max-w-7xl" />
	{/each}

	<div class="card mx-auto grid max-w-7xl flex-shrink-0 gap-4 p-4 sm:grid-cols-2">
		<div class="order-1 sm:-order-1">
			<H4>We Can Help!</H4>
			<ul>
				{#each sideservices as sides, index}
					<li>{sides}</li>
				{/each}
			</ul>
		</div>
		<div>
			<H4>About Sketchup</H4>
			<P>
				{service.about}
			</P>
		</div>
	</div>
</div>
