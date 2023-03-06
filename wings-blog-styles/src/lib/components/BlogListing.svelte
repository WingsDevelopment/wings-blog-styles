<script>
	import Title from '$lib/components/Title.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import ListingCard from '$lib/components/ListingCard.svelte';
	import BodyShapeRight from '$lib/images/bodyshaperight.svg';
	import BodyShapeLeft from '$lib/images/bodyshapeleft.svg';
	import Discover from './Discover.svelte';
</script>

<section>
	<div class="container px-3 pr-4 mx-auto xl:max-w-[1240px] 2xl:max-w-[1400px]">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="md:col-span-2">
				<!-- <Title title="Blogs" /> -->
				<div class="mt-9">
					<Nav />
				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="md:col-span-2">
				<div class="blogMainCol px-4 overflow-hidden relative">
					<div class="relative z-20">
						<div class="blogOuter">
							<div class="blogListing mt-10">
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
								<ListingCard
									authorName="Katherine Becker"
									blogTitle="Why Black People Celebrate Mardi Gras The Way We Do"
									contentPreview="The hidden history of Mardi Gras, from a Black perspective"
									publishDate="Feb 19"
									readDuration="6 Min read"
									mainTag="Racism"
								/>
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
			<div class="md:col-span-1">
				<Discover />
			</div>
		</div>
	</div>
</section>
