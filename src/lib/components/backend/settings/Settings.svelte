<script>
    import { AccordionItem, Accordion, Button, DarkMode } from 'flowbite-svelte';
    import LeadOptions from './lead-options/LeadOptions.svelte';
    const items = Array(3);

    let defaultClass = 'text-gray-500 bg-white dark:text-gray-400 ';

</script>


<div class="m-auto mt-20 mb-20 flex justify-center items-center">
    <div class="w-full max-w-3xl">
        <Accordion defaultClass={defaultClass}>

            <AccordionItem  class="bg-white" open={true}>
                <span slot="header">Leads</span>
                <Accordion defaultClass={defaultClass}>
                    <AccordionItem  class="bg-white" open={true}>
                        <span slot="header">Lead Status Options</span>
                        <LeadOptions/>
                    </AccordionItem>

                    <AccordionItem  class="bg-white">
                        <span slot="header">Emails and Reminders</span>
                        
                    </AccordionItem>
                </Accordion>
            </AccordionItem>
            

            <AccordionItem bind:open={items[1]} class="bg-white rounded">
                <div slot="header">Tutors</div>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                    <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            </AccordionItem>

        </Accordion>

        <DarkMode />

    </div>
</div>

<!-- Don't forget rounded styling at last accordion -->
<!-- Also, give  bind:open={items[1]}  back -->