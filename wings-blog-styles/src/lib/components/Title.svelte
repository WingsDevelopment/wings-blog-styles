<script lang="ts">
	import Img from '$lib/images/titleshape.svg';
	export let title: string;
</script>

<div class="titleCol text-center">
	<img class="mx-auto" src={Img} alt="Title Shape" />
	<h3 class="text-4xl text-dark font-semibold">{title}</h3>
</div>
