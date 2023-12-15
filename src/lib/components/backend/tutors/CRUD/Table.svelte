<script lang="ts">
    import { onMount } from 'svelte';
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, TableSearch, Button, Dropdown, DropdownItem, Checkbox, ButtonGroup } from 'flowbite-svelte';
    import { Section } from 'flowbite-svelte-blocks';
    import paginationData from '../../tutors/tutors.json';
    import { PlusSolid, ChevronDownSolid, FilterSolid, ChevronRightOutline, ChevronLeftOutline } from 'flowbite-svelte-icons';
    import AddTutor from './AddTutor.svelte';
    import EditTutor from './EditTutor.svelte';
  
    let divClass='bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden';
    let innerDivClass='flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4';
    let searchClass='w-full md:w-1/2 relative';
    let svgDivClass='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none';
    let classInput="text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2  pl-10";
  
    let searchTerm = '';
    let currentPosition = 0;
    const itemsPerPage = 10;
    const showPage = 5;
    let totalPages = 0;
    let pagesToShow: any[] = [];
    let totalItems = paginationData.length;
    let startPage: number;
    let endPage: number;
  
    const updateDataAndPagination = () => {
      const currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
      renderPagination(currentPageItems.length);
    }
  
    const loadNextPage = () => {
      if (currentPosition + itemsPerPage < paginationData.length) {
        currentPosition += itemsPerPage;
        updateDataAndPagination();
      }
    }
  
    const loadPreviousPage = () => {
      if (currentPosition - itemsPerPage >= 0) {
        currentPosition -= itemsPerPage;
        updateDataAndPagination();
      }
    }
  
    const renderPagination = (totalItems: any) => {
      totalPages = Math.ceil(paginationData.length / itemsPerPage);
      const currentPage = Math.ceil((currentPosition + 1) / itemsPerPage);
  
      startPage = currentPage - Math.floor(showPage / 2);
      startPage = Math.max(1, startPage);
      endPage = Math.min(startPage + showPage - 1, totalPages);
  
      pagesToShow = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    }
  
    const goToPage = (pageNumber: number) => {
      currentPosition = (pageNumber - 1) * itemsPerPage;
      updateDataAndPagination();
    }
  
    $: startRange = currentPosition + 1;
    $: endRange = Math.min(currentPosition + itemsPerPage, totalItems);
  
    onMount(() => {
      renderPagination(paginationData.length);
    });
  
    $: currentPageItems = paginationData.slice(currentPosition, currentPosition + itemsPerPage);
    $: filteredItems = paginationData.filter((item: { first: string; last: string }) => {
        const fullName = item.first.toLowerCase() + " " + item.last.toLowerCase();
        return fullName.includes(searchTerm.toLowerCase());
    });
</script>

<Section classSection='bg-gray-50 dark:bg-gray-900 p-3 sm:p-5'>
    <TableSearch placeholder="Search" hoverable={true} bind:inputValue={searchTerm} {divClass} {innerDivClass} {searchClass} {classInput} >

        <!-- Add Tutor -->
        <div slot="header" class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <AddTutor/>
        </div>

        <!-- Header -->
        <TableHead>
            <TableHeadCell padding="px-4 py-3" scope="col">Name</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Email</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Number</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">$/Hour</TableHeadCell>
            <TableHeadCell padding="px-4 py-3" scope="col">Edit</TableHeadCell>
        </TableHead>

        <!-- Body -->
        <TableBody>
            {#if searchTerm !== ''}
            {#each filteredItems as item (item.id)}
                <TableBodyRow>
                    <TableBodyCell tdClass="px-4 py-3">{item.first +" " +item.last}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">{item.email}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">{item.number}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">${item.rate}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3"><EditTutor/></TableBodyCell>
                </TableBodyRow>
            {/each}
            {:else}
            {#each currentPageItems as item (item.id)}
                <TableBodyRow>
                    <TableBodyCell tdClass="px-4 py-3">{item.first +" " +item.last}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">{item.email}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">{item.number}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3">${item.rate}</TableBodyCell>
                    <TableBodyCell tdClass="px-4 py-3"><EditTutor/></TableBodyCell>
                </TableBodyRow>
            {/each}
            {/if}
        </TableBody>

        <!-- Paginate -->
        <div slot="footer" class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
            <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing
                <span class="font-semibold text-gray-900 dark:text-white">{startRange}-{endRange}</span>
                of
                <span class="font-semibold text-gray-900 dark:text-white">{totalItems}</span>
            </span>

            <ButtonGroup>
                <Button on:click={loadPreviousPage} disabled={currentPosition === 0}><ChevronLeftOutline size='xs' class='m-1.5'/></Button>
                {#each pagesToShow as pageNumber}
                    <Button on:click={() => goToPage(pageNumber)}>{pageNumber}</Button>
                {/each}
                <Button on:click={loadNextPage} disabled={ totalPages === endPage }><ChevronRightOutline size='xs' class='m-1.5'/></Button>
            </ButtonGroup>
        </div>
    </TableSearch>
</Section>