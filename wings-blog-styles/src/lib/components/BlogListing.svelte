<script>
	import Title from '$lib/components/Title.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import BodyShapeRight from '$lib/images/bodyshaperight.svg';
	import BodyShapeLeft from '$lib/images/bodyshapeleft.svg';
	import Discover from './Discover.svelte';
</script>

<section>
	<div class="grid grid-cols-3 gap-4 mt-[175px]">
		<div class="col-span-2">
			<div class="blogMainCol px-4 overflow-hidden relative">
				<div class="relative z-20">
					<div class="container mx-auto 2xl:max-w-[1400px]">
						<Title title="Blogs" />
						<div class="mt-9">
							<Nav />
						</div>
						<div class="blogListing mt-10">
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
							<ListingCard />
						</div>
					</div>
				</div>
				<div class="absolute z-10 right-0 top-1/2">
					<img src={BodyShapeRight} alt="User" />
				</div>
				<div class="absolute z-10 left-0 top-[200px]">
					<img src={BodyShapeLeft} alt="User" />
				</div>
			</div>
		</div>
		<div class="col-span-1">
			<Discover />
		</div>
	</div>
</section>
