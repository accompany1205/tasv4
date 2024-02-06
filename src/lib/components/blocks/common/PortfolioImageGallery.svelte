<style>
	dialog {
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>

<script lang="ts">
	import { CloseOutline } from 'flowbite-svelte-icons';
	import H4 from '$lib/components/elements/H4.svelte';

	export let showModal: boolean;
	export let title: string = '';
	export let description: string = '';

	let dialog: HTMLDialogElement;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this="{dialog}"
	on:close="{() => (showModal = false)}"
	on:click|self="{() => dialog.close()}"
	class="w-full lg:w-1/2 m-auto outline-none"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="relative outline-none">
		<header class="flex items-center justify-between p-1 mb-2">
			<H4 class="!p-0">{title}</H4>
			<span class="p-2 hover:bg-slate-300 rounded-full cursor-pointer">
				<CloseOutline
					class="w-4 h-4 text-black-400 dark:text-gray-500 dark:hover:text-white outline-none"
					on:click="{() => dialog.close()}"
				/>
			</span>
		</header>
		<slot />
		<p class="mt-4">{description}</p>
	</div>
</dialog>
