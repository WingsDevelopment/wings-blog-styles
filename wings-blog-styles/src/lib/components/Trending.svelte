<script>
	import Title from '$lib/components/Title.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import User1 from '$lib/images/user1.png';
	import User2 from '$lib/images/user2.png';
	import User3 from '$lib/images/user3.png';
	import User4 from '$lib/images/user4.png';
	import CountShape1 from '$lib/images/countshape1.svg';
	import CountShape2 from '$lib/images/countshape2.svg';
	import CountShape3 from '$lib/images/countshape3.svg';
	import CountShape4 from '$lib/images/countshape4.svg';
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
								<span class="block text-[50px] text-primary font-bold"> 01. </span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img
											class="w-[50px] h-[50px] rounded-full object-cover"
											src={User1}
											alt="User"
										/>
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Praveen Seshadri</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									Disqualified from a National Web Design Competition…for using GitHub
								</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
							</div>
						</div>
						<div
							class="cardStyle1 bg-white border border-solid border-primary rounded-[10px] pt-5 sm:pt-[38px] px-5 sm:px-11 pb-[14px]"
						>
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold"> 02. </span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img
											class="w-[50px] h-[50px] rounded-full object-cover"
											src={User2}
											alt="User"
										/>
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Tom Cooper</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									Ukraine War, 26 February 2023: Bakhmut
								</h4>
								<span class="text-darkgray text-sm">Feb 26. 5 min read</span>
							</div>
						</div>
						<div class="cardStyle1 pt-5 sm:pt-[38px] rounded-[10px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold"> 03. </span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img
											class="w-[50px] h-[50px] rounded-full object-cover"
											src={User3}
											alt="User"
										/>
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Praveen Seshadri</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">There is a crack in everything</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
							</div>
						</div>
						<div class="cardStyle1 pt-5 sm:pt-[38px] rounded-[10px] px-5 sm:px-11 pb-[14px]">
							<div class="cardInner relative">
								<span class="block text-[50px] text-primary font-bold"> 04. </span>
								<div class="flex mb-3 gap-5 items-center">
									<div class="flex-none">
										<img
											class="w-[50px] h-[50px] rounded-full object-cover"
											src={User4}
											alt="User"
										/>
									</div>
									<div class="flex-1">
										<h3 class="text-base text-dark">Brandon Van Der Heide</h3>
									</div>
								</div>
								<h4 class="text-lg font-semibold text-dark">
									The Simple Mental Model That Changed My Financial Life
								</h4>
								<span class="text-darkgray text-sm">Feb 14. 15 min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
