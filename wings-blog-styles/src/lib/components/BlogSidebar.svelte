<script>
    import { Textarea, Label } from 'flowbite-svelte';
    import { Indicator, Button } from 'flowbite-svelte';
    import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>
<div class="flex-none sticky top-[80px]">
    <div class="w-full mt-10 xl:mt-0">
        <div class="sidebarCol relative">
            <div class="sidebarInner relative z-30 bg-white rounded-[10px] border border-solid border-gray pt-[30px] pb-[30px] pr-4 xl:pr-[18px] pl-4 xl:pl-6">
                <div class="sidebarTitle">
                    <h3 class="text-[22px] leading-6 text-dark font-semibold">Publish your blog</h3>
                    <div class="blogSide mt-5 relative">
                        <div class="absolute right-0 top-[-5px]">
                            <Button size="lg" class="relative bg-transparent !px-2 !py-1 hover:bg-transparent focus:ring-transparent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.58556 3.96094L3.58556 9.96094L3.07031 10.5002L3.58556 11.0394L9.58556 17.0394L10.6641 15.9609L5.95331 11.2502H15.7498C17.8153 11.2502 19.4998 12.9347 19.4998 15.0002V20.2502H20.9998V15.0002C20.9998 12.1172 18.6328 9.75019 15.7498 9.75019H5.95256L10.6641 5.03944L9.58556 3.96094Z" fill="black"/>
                                </svg>                                                                   
                              <Indicator color="red" border size="xl" placement="top-right">
                                <span class="text-white text-xs font-bold">8</span>
                              </Indicator>
                            </Button>
                            <Button size="lg" class="relative bg-transparent !px-2 !py-1 hover:bg-transparent focus:ring-transparent">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.4144 3.96094L20.4144 9.96094L20.9297 10.5002L20.4144 11.0394L14.4144 17.0394L13.3359 15.9609L18.0467 11.2502H8.25019C6.18469 11.2502 4.50019 12.9347 4.50019 15.0002V20.2502H3.00019V15.0002C3.00019 12.1172 5.36719 9.75019 8.25019 9.75019H18.0474L13.3359 5.03944L14.4144 3.96094Z" fill="black"/>
                                </svg>     
                              <Indicator color="red" border size="xl" placement="top-right">
                                <span class="text-white text-xs font-bold">2</span>
                              </Indicator>
                            </Button>
                        </div>
                        
                        
                        <Label for="textarea-id" class="mb-2">Your message</Label>
                        <Textarea id="textarea-id" class="border border-gray" placeholder="" rows="4" name="message"/>
                        <Button color="alternative">Save</Button>
                        <Button class="bg-primary hover:bg-primary !text-dark border border-primary ml-1">Publish</Button>
                        <Accordion class="mt-5 border-gray">
                            <AccordionItem open>
                              <span slot="header">Collapse Heading</span>
                              <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
                            </AccordionItem>
                          </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>