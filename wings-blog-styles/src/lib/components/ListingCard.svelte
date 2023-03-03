<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import FeatImg from '$lib/images/featimg.jpg';
	import User5 from '$lib/images/user5.png';
	import LikeIcon from '$lib/images/likebtn.svg';
	import DotsVertical from '$lib/images/dotvertical.svg';
	import FollowIcon from '$lib/images/followbtn.svg';
	import MuteIcon from '$lib/images/mutebtn.svg';
	import CalendarIcon from '$lib/images/calendaricon.svg';
	import TimerIcon from '$lib/images/timericon.svg';
	import CrownIcon from '$lib/images/crown.svg';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	export let authorName: string;
	export let blogTitle: string;
	export let contentPreview: string;
	export let publishDate: string;
	export let readDuration: string;
	export let mainTag: string;
	let placementdots = 'bottom-end';
</script>  

<div class="listingCol">
	<div class="cardStyle2 bg-white border border-solid border-gray rounded-xl">
		<div class="flex flex-col xl:flex-row">
			<div class="flex-1"> 
				<div class="blogMain p-5">
					<div class="flex flex-col xl:flex-row gap-5 2xl:gap-8">
						<div class="flex-none">
							<img
								class="rounded-xl w-full xl:w-[262px] h-[214px] object-cover"
								src={FeatImg}
								alt="Feature Image"
							/>
						</div>
						<div class="flex-1 relative mt-5 md:mt-0 pl-0 md:pl-0 xl:pl-0">
							<div class="flex mb-3 gap-3 items-center">
								<div class="flex-none">
									<img class="w-[50px] h-[50px] rounded-full object-cover" src={User5} alt="User" />
								</div>
								<div class="flex-1">
									<h3 class="text-base text-dark">{authorName}</h3>
								</div>
							</div>
							<h3 class="text-2xl mb-4 font-bold text-black">
								{blogTitle}
							</h3>
							<p class="text-darkgray text-base">
								{contentPreview}
							</p>
							<div class="listingBtm mt-6">
								<div class="flex flex-col sm:flex-row items-center gap-4">
									<div class="flex-none">
										<div class="flex gap-1.5 items-center">
											<div class="flex-none">
												<img src={CalendarIcon} alt="Calendar" />
											</div>
											<div class="flex-none">
												<span class="text-gray3 text-sm">{publishDate}</span>
											</div>
										</div>
									</div>
									<div class="flex-none">
										<div class="flex gap-1.5 items-center">
											<div class="flex-none">
												<img src={TimerIcon} alt="Timer" />
											</div>
											<div class="flex-none">
												<span class="text-gray3 text-sm">{readDuration}</span>
											</div>
										</div>
									</div>
									<div class="flex-none">
										<button
											class="py-3 px-7 rounded-full bg-orange/20 font-medium text-dark text-[15px]"
										>
											{mainTag}
										</button>
									</div>
									<div class="flex-none">
										<img src={CrownIcon} alt="Crown" />
									</div>
								</div>
							</div>
							<div class="actionBtn absolute top-0 xl:-top-8 -right-8 h-full px-9 py-4 xl:py-7">
								<div class="dotsVertical relative">
									<Button class="hover:bg-transparent bg-transparent" data-placement1="bottom-end">
										<img src={DotsVertical} class="relative" alt="Logo" />
									</Button>
									<Dropdown {placementdots} triggeredBy="[data-placement1]">
										<DropdownItem class="text-center flex flex-col justify-center items-center">
											<span class="btnIcon">
												<img class="mx-auto" src={LikeIcon} alt="Like" />
											</span>
											<span class="font-light text-sm">Like</span>
										</DropdownItem>
										<DropdownItem class="text-center flex flex-col justify-center items-center">
											<span class="btnIcon">
												<img class="mx-auto" src={FollowIcon} alt="Follow" />
											</span>
											<span class="font-light text-sm">Follow</span>
										</DropdownItem>
										<DropdownItem class="text-center flex flex-col justify-center items-center">
											<span class="btnIcon">
												<img class="mx-auto" src={MuteIcon} alt="Mute" />
											</span>
											<span class="font-light text-sm">Mute</span>
										</DropdownItem>
									</Dropdown>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-none">
				<div class="xl:flex h-full">
					<!-- <div class="flex-1 xl:flex-none h-full">
						<div class="previewCol py-7 px-5 h-full w-full xl:w-[420px] bg-black/[.02]">
							<div class="titleCol">
								<h3 class="text-xl mb-4 font-semibold text-black">Content</h3>
							</div>
							<div class="previewList">
								<ul>
									<li>Who is Mardi Gras</li>
									<li>What Mardi Gras did for black people</li>
									<li>When did we start celebrating Mardi Gras</li>
									<li>And so on...</li>
								</ul>
							</div>
						</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</div>
