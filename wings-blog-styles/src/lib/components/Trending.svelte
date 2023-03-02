<script>
	import Title from '$lib/components/Title.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import User1 from "$lib/images/user1.png";
	import User2 from "$lib/images/user2.png";
	import User3 from "$lib/images/user3.png";
	import User4 from "$lib/images/user4.png";
	import CountShape1 from "$lib/images/countshape1.svg";
	import CountShape2 from "$lib/images/countshape2.svg";
	import CountShape3 from "$lib/images/countshape3.svg";
	import CountShape4 from "$lib/images/countshape4.svg";
	import BgShapeVector from "$lib/images/bgshape.svg";
</script>

<section>
	<div class="bannerCol px-4 overflow-hidden">
		<div class="container mx-auto 2xl:max-w-[1400px]">
			<Title title="Trending on Medium" />
			<div class="flex flex-col xl:flex-row mt-24">
				<div class="flex-1 xl:pr-[40px] 2xl:pr-[60px]">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-0">
						<div class="cardStyle1 pt-5 sm:pt-[38px] rounded-[10px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold">
									01.
								</span> 
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img class="w-[50px] h-[50px] rounded-full object-cover" src={User1} alt="User" />
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Praveen Seshadri</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									Disqualified from a National Web Design Competition…for using GitHub
								</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
								<div class="counterCol">
									<img class="absolute top-2 left-1" src={CountShape1} alt="Counter" />
								</div>
							</div>
						</div>
						<div class="cardStyle1 bg-white border border-solid border-primary rounded-[10px] pt-5 sm:pt-[38px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold">
									02.
								</span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img class="w-[50px] h-[50px] rounded-full object-cover" src={User2} alt="User" />
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Tom Cooper</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									Ukraine War, 26 February 2023: Bakhmut
								</h4>
								<span class="text-darkgray text-sm">Feb 26. 5 min read</span>
								<div class="counterCol">
									<img class="absolute top-2 left-1" src={CountShape2} alt="Counter" />
								</div>
							</div>
						</div>
						<div class="cardStyle1 pt-5 sm:pt-[38px] rounded-[10px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold">
									03.
								</span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img class="w-[50px] h-[50px] rounded-full object-cover" src={User3} alt="User" />
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Praveen Seshadri</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									There is a crack in everything
								</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
								<div class="counterCol">
									<img class="absolute top-2 left-1" src={CountShape3} alt="Counter" />
								</div>
							</div>
						</div>
						<div class="cardStyle1 pt-5 sm:pt-[38px] rounded-[10px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold">
									04.
								</span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img class="w-[50px] h-[50px] rounded-full object-cover" src={User4} alt="User" />
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Brandon Van Der Heide</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									The Simple Mental Model That Changed My Financial Life
								</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
								<img class="absolute top-2 left-1" src={CountShape4} alt="Counter" />
							</div>
						</div>
					</div>
				</div>
				<div class="flex-none">
					<div class="w-full mt-10 xl:mt-0 xl:w-[510px] xl:pl-[52px] 2xl:pl-[92px]">
						<div class="sidebarCol relative">
							<div class="sidebarInner relative z-30 bg-white rounded-[10px] border border-solid border-gray pt-[48px] pb-[30px] pr-[22px] pl-[30px]">
								<div class="sidebarTitle text-center">
									<h3 class="text-[22px] leading-6 text-dark font-semibold">
										Discover more of what <br>matters to you
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
							<div class="bgShape absolute -bottom-[55px] -right-[100px] -left-[60px] -top-16 z-20">
								<img src={BgShapeVector} class="h-full" alt="Bg Shape" />
							</div>
						</div>						
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
