<script lang="ts">
	import FeatImg from '$lib/images/featimg.jpg';
	import User5 from '$lib/images/user5.png';
	export let authorName: string;
	export let blogTitle: string;
</script>  

<div class="listingCols">
	<div class="cardStyle2 bg-white">
		<div class="flex flex-col xl:flex-row">
			<div class="flex-1"> 
				<div class="blogMain">
					<div class="flex xl:flex-row gap-5 2xl:gap-8">
						<div class="flex-none">
							<!-- svelte-ignore a11y-img-redundant-alt -->
							<!-- svelte-ignore a11y-invalid-attribute -->
							<a href="javascript:void(0)" rel="noreferrer"><img class="rounded w-full xl:w-[60px] h-[60px] object-cover" src={FeatImg} alt="Feature Image" /></a>
						</div>
						<div class="flex-1 relative pl-0 md:pl-0 xl:pl-0">
							<div class="flex mb-1 gap-3 items-center">
								<div class="flex-none">
									<img class="w-[30px] h-[30px] rounded-full object-cover" src={User5} alt="User" />
								</div>
								<div class="flex-1">
									<p class="text-dark text-sm">{authorName}</p>
								</div>
							</div>
							<h3 class="text-base mb-4 font-bold text-black line-clamp-1">
								<!-- svelte-ignore a11y-invalid-attribute -->
								<a href="javascript:void(0)" rel="noreferrer">{blogTitle}</a>
							</h3>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>
