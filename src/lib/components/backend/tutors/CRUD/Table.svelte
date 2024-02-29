<script lang="ts">
	import {
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
	} from 'flowbite-svelte';
	import EditTutor from './EditTutor.svelte';
	import { filteredTutors } from '../../stores/tutorStore';
	import { ArrowDownSolid, ArrowUpSolid } from 'flowbite-svelte-icons';
	import { derived, writable } from 'svelte/store';

	let sortKey = writable('first');
	let sortDirection = writable(1);

	const sortedTutors = derived(
		[filteredTutors, sortKey, sortDirection],
		([$filteredTutors, $sortKey, $sortDirection]) => {
			return $filteredTutors;
		},
	);

	console.log({ sortedTutors: $filteredTutors });

	function sortTable(key: string) {
		sortKey.update((n) => {
			if (n === key) {
				sortDirection.update((m) => -m);
				return n;
			} else {
				sortDirection.set(1);
				return key;
			}
		});
	}

	function statusClass(status: string): string {
		switch (status) {
			case 'Active':
				return 'text-green-400';
			case 'Hold':
				return 'text-red-600';
			case 'Full':
				return 'text-blue-400';
			case 'New':
				return 'text-yellow-300';
			default:
				return 'text-gray-400';
		}
	}
</script>

<Table
	class="xl:max-w-7xl xl:m-auto border-2 dark:border-gray-600 mb-20 xl:mb-20"
	divClass="relative overflow-x-auto mx-10"
>
	<TableHead>
		<TableHeadCell>Headshot</TableHeadCell>
		<TableHeadCell on:click="{() => sortTable('first')}">
			<div class="flex items-center gap-3">
				Name
				{#if $sortKey === 'first'}
					{#if $sortDirection === -1}
						<ArrowUpSolid class="w-3 h-3" />
					{:else}
						<ArrowDownSolid class="w-3 h-3" />
					{/if}
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click="{() => sortTable('email')}">
			<div class="flex items-center gap-3">
				Email
				{#if $sortKey === 'email'}
					{#if $sortDirection === -1}
						<ArrowUpSolid class="w-3 h-3" />
					{:else}
						<ArrowDownSolid class="w-3 h-3" />
					{/if}
				{/if}
			</div>
		</TableHeadCell>
		<TableHeadCell on:click="{() => sortTable('phone')}">
			<div class="flex items-center gap-3">
				Number
				{#if $sortKey === 'phone'}
					{#if $sortDirection === -1}
						<ArrowUpSolid class="w-3 h-3" />
					{:else}
						<ArrowDownSolid class="w-3 h-3" />
					{/if}
				{/if}
			</div>
		</TableHeadCell>

		<TableHeadCell on:click="{() => sortTable('rate')}">
			<div class="flex items-center gap-3">
				Rate
				{#if $sortKey === 'rate'}
					{#if $sortDirection === -1}
						<ArrowUpSolid class="w-3 h-3" />
					{:else}
						<ArrowDownSolid class="w-3 h-3" />
					{/if}
				{/if}
			</div>
		</TableHeadCell>

		<TableHeadCell on:click="{() => sortTable('status')}">
			<div class="flex items-center gap-3">
				Status
				{#if $sortKey === 'status'}
					{#if $sortDirection === -1}
						<ArrowUpSolid class="w-3 h-3" />
					{:else}
						<ArrowDownSolid class="w-3 h-3" />
					{/if}
				{/if}
			</div>
		</TableHeadCell>

		<TableHeadCell>Action</TableHeadCell>
	</TableHead>
	<TableBody>
		{#each $sortedTutors as tutor (tutor.id)}
			<TableBodyRow key="{tutor.id}">
				<TableBodyCell
					><img
						src="{tutor.headshot}"
						class="w-14 rounded-xl"
						alt="{tutor.name}"
					/></TableBodyCell
				>
				<TableBodyCell>{tutor.first} {tutor.last}</TableBodyCell>
				<TableBodyCell>{tutor.email}</TableBodyCell>
				<TableBodyCell>{tutor.phone}</TableBodyCell>
				<TableBodyCell>${tutor.rate}</TableBodyCell>
				<TableBodyCell class="{statusClass(tutor.status)}">{tutor.status}</TableBodyCell>
				<TableBodyCell><EditTutor tutorId="{tutor.id}" /></TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</Table>
