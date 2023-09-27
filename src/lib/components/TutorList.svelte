<script>
    import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
    import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
</script>



<div class="m-auto flex justify-center gap-6 w-full">
    <Card padding="sm">
      <div class="flex justify-end">
        <DotsHorizontalOutline />
        <Dropdown class="w-36">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Export data</DropdownItem>
          <DropdownItem>Delete</DropdownItem>
        </Dropdown>
      </div>
  
      <div class="flex flex-col items-center pb-4">
        <Avatar size="lg" src="src\lib\assets\tutors\aims.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aims A</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">SketchUp, V-Ray, Renderings</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">$40/hr</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Button class="border-solid border-2 border-emerald-400 text-black">Learn More</Button>
        </div>
      </div>
    </Card>
  
    <Card padding="sm">
      <div class="flex justify-end">
        <DotsHorizontalOutline />
        <Dropdown class="w-36">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Export data</DropdownItem>
          <DropdownItem>Delete</DropdownItem>
        </Dropdown>
      </div>
  
      <div class="flex flex-col items-center pb-4">
        <Avatar size="lg" src="src\lib\assets\tutors\aims.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aims A</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">SketchUp, V-Ray, Renderings</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">$40/hr</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Button class="border-solid border-2 border-emerald-400 text-black">Learn More</Button>
        </div>
      </div>
    </Card>
  
    <Card padding="sm">
      <div class="flex justify-end">
        <DotsHorizontalOutline />
        <Dropdown class="w-36">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Export data</DropdownItem>
          <DropdownItem>Delete</DropdownItem>
        </Dropdown>
      </div>
  
      <div class="flex flex-col items-center pb-4">
        <Avatar size="lg" src="src\lib\assets\tutors\aims.webp" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Aims A</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">SketchUp, V-Ray, Renderings</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">$40/hr</span>
        <div class="flex mt-4 space-x-3 lg:mt-6">
          <Button class="border-solid border-2 border-emerald-400 text-black">Learn More</Button>
        </div>
      </div>
    </Card>
</div>