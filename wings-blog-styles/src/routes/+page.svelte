<script>
	import Header from '$lib/components/Header.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import Trending from '$lib/components/Trending.svelte';
	import BlogListing from '$lib/components/BlogListing.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<Banner />
<div class="mt-[175px]">
	<Trending />
</div>
<div class="mt-[175px]">
	<BlogListing />
</div>

<div>
	<Footer />
</div>
