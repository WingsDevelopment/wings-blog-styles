<script>
	import Logo from '$lib/images/wings-logo.jpg';
	import Toggle from '$lib/images/infoicon.svg';
	import WriteIcon from '$lib/images/writeicon.svg';
	import SignIcon from '$lib/images/signicon.svg';
	import MembershipIcon from '$lib/images/crownicon.svg';
	import { Button, Dropdown, DropdownItem, Chevron } from 'flowbite-svelte';
	let placement = 'bottom-end';
</script>

<div
	class="headerCol bg-transparent left-0 z-50 px-5 xl:px-10 2xl:px-[60px] py-3 xl:py-4 2xl:py-5 right-0 top-0 fixed"
>
	<div class="flex items-center">
		<div class="flex-1">
			<div class="logoCol">
				<a href="javascript:void(0)">
					<img class="w-16" src={Logo} alt="Logo" />
				</a>
			</div>
		</div>
		<div class="flex-none">
			<div class="headerDD relative">
				<Button class="hover:before:scale-100 rounded before:scale-0 before:inset-0 before:transition-all before:duration-300 before:ease-in-out relative before:absolute before:rounded before:bg-primary w-9 h-9 bg-dark" data-placement="bottom-end">
					<img src={Toggle} class="relative" alt="Logo" />
				</Button>
				<Dropdown {placement} triggeredBy="[data-placement]">
					<DropdownItem class="flex gap-3 text-sm text-dark">
						<span class="w-5 text-center"><img src={WriteIcon} alt="Write" /></span>
						Write
					</DropdownItem>
					<DropdownItem class="flex gap-3 text-sm text-dark">
						<span class="w-5 text-center"><img src={SignIcon} alt="Sign in" /></span>
						Sign In
					</DropdownItem>
					<DropdownItem class="flex gap-3 text-sm text-dark">
						<span class="w-5 text-center"><img src={MembershipIcon} alt="Membership" /></span>
						Membership
					</DropdownItem>
				</Dropdown>
			</div>
		</div>
	</div>
</div>
