<script>
	import { Tabs, TabItem } from 'flowbite-svelte';
</script>

<Tabs
	defaultClass="flex flex-wrap space-x-2 rtl:space-x-reverse py-2 px-4 text-2xl text-gray-900 first:pl-0"
	activeClasses="bg-emerald-400 py-2 px-4 text-2xl text-white rounded"
	inactiveClasses="py-2 px-4 text-2xl text-gray-900 hover:bg-emerald-400 hover:text-white hover:rounded"
>
	<TabItem open title="All">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>All:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem title="Architecture">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Architecture:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem title="Gaming">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Gaming:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem title="Industrial">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Industrial:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem title="Interior">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Interior:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
	<TabItem title="Software">
		<p class="text-sm text-gray-500 dark:text-gray-400">
			<b>Software:</b>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
			ut labore et dolore magna aliqua.
		</p>
	</TabItem>
</Tabs>
