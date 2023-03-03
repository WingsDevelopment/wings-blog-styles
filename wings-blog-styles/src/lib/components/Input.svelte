<script lang="ts">
	export let placeholder: string;
	export let name: string;
	export let type: string;
</script> 

<input type={type} class="w-full border text-sm placeholder-darkgray px-4 py-3 focus:border-bordercolor focus:ring-0 focus:shadow-none text-darkgray border-solid rounded-lg border-bordercolor h-12" name={name} placeholder={placeholder} />
