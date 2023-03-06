<script>
	import Tag from '$lib/components/Tag.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
</script>

<div class="navCol w-full  px-2 overflow-x-auto">
	<Splide options={{ autoWidth: true,omitEnd: true,focus: 0,perMove: 1,}} aria-label="My Favorite Images">
		<SplideSlide>
			<button>
				<Tag tagText="All" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Programming" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Data Science" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Technology" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Improvement" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Writing" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Relationships" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Machine Learning" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Productivity" />
			</button>
		</SplideSlide>
		<SplideSlide>
			<button> 
				<Tag tagText="Politics" />
			</button>
		</SplideSlide>
	</Splide>
</div>
