<script>
	import Tag from './Tag.svelte';
	import BgShapeVector from '$lib/images/bgshape.svg';
</script>

<div class="flex-none sticky mt-10 top-3">
	<div class="w-full mt-10 xl:mt-0">
		<div class="sidebarCol relative">
			<div
				class="sidebarInner relative z-30 bg-white rounded-[10px] border border-solid border-gray pt-[48px] pb-[30px] pr-4 xl:pr-[18px] pl-4 xl:pl-6"
			>
				<div class="sidebarTitle text-center">
					<h3 class="text-[22px] leading-6 text-dark font-semibold">
						Discover more of what <br />matters to you
					</h3>
				</div>
				<div class="tagOuter mt-[50px]">
					<ul>
						<li>
							<Tag tagText="Programming" />
						</li>
						<li>
							<Tag tagText="Data Science" />
						</li>
						<li> 
							<Tag tagText="Technology" />
						</li> 
						<li>
							<Tag tagText="Self Improvement" />
						</li>
						<li class="active">
							<Tag tagText="Writing" />
						</li>
						<li>
							<Tag tagText="Relationships" />
						</li>
						<li>
							<Tag tagText="Machine Learning" />
						</li>
						<li>
							<Tag tagText="Productivity" />
						</li>
						<li>
							<Tag tagText="Politics" />
						</li>
					</ul>
				</div>
			</div>
			<div class="bgShape absolute -bottom-[55px] right-[0] 2xl:-right-[30px] left-0 md:-left-[60px] -top-16 z-20">
				<img src={BgShapeVector} class="h-full" alt="Bg Shape" />
			</div>
		</div>
	</div>
</div>
