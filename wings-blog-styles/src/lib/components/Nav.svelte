<script>
	import Tag from '$lib/components/Tag.svelte';
</script>

<div class="navCol w-full scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-primary scrollbar-track-primaryLight px-2 overflow-x-auto">
	<ul class="whitespace-nowrap">
		<li class="active">
			<button>
				<Tag tagText="All" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Programming" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Data Science" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Technology" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Improvement" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Writing" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Relationships" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Machine Learning" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Productivity" />
			</button>
		</li>
		<li>
			<button>
				<Tag tagText="Politics" />
			</button>
		</li>
	</ul>
</div>
