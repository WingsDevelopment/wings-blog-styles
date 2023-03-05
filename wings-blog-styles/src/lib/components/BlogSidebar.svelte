<script>
    import BlogsideList from '$lib/components/BlogsideList.svelte';
</script>
<div class="flex-none sticky top-[80px]">
    <div class="w-full mt-10 xl:mt-0">
        <div class="sidebarCol relative">
            <div class="sidebarInner relative z-30 bg-white rounded-[10px] border border-solid border-gray pt-[30px] pb-[30px] pr-4 xl:pr-[18px] pl-4 xl:pl-6">
                <div class="sidebarTitle">
                    <h3 class="text-[22px] leading-6 text-dark font-semibold">More from Wings Blog</h3>
                    <div class="blogListing mt-10">
                        <BlogsideList authorName="Katherine Becker" blogTitle="Why Black People Celebrate Mardi Gras The Way We Do" />
                        <BlogsideList authorName="Katherine Becker" blogTitle="Why Black People Celebrate Mardi Gras The Way We Do" />
                        <BlogsideList authorName="Katherine Becker" blogTitle="Why Black People Celebrate Mardi Gras The Way We Do" />
                        <BlogsideList authorName="Katherine Becker" blogTitle="Why Black People Celebrate Mardi Gras The Way We Do" />
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>