<script>
	import Input from '$lib/components/Input.svelte';
	import Mdtitle from '$lib/components/Mdtitle.svelte';
	import Button from '$lib/components/Button.svelte';
	import SignupImg from '$lib/images/signup.svg';
	import Logo from '$lib/images/logo.png';
	import EmailIcon from '$lib/images/emailicon.svg';
	import UserIcon from '$lib/images/usericon.svg';
	import EyeIcon from '$lib/images/eye.svg';
	import LoginShape from '$lib/images/bgshapelogin.svg';
	import GoogleIcon from '$lib/images/googleicon.svg';
	import FbIcon from '$lib/images/fbicon.svg';
	import AppleIcon from '$lib/images/appleicon.svg';
</script>
<div class="flex items-center py-8 min-h-screen">
	<div class="w-full">
		<div class="container px-5 lg:px-10 mx-auto 2xl:max-w-[1400px]">
			<div class="logoCol text-center lg:text-left pb-2">
				<a href="#" class="inline-block">
					<img src={Logo} alt="Logo">
				</a>
			</div>
			<div class="text-center lg:text-left">
				<h1 class="font-bold xl:text-[40px] 2xl:text-[65px]">
					Hi, Welcome <span class="text-primary">back</span>
				</h1>
			</div>
			<div class="lg:flex items-center">
				<div class="flex-1 lg:pr-10 xl:pr-0 mt-12 lg:mt-0">
					<img class="mx-auto" src={SignupImg} alt="Signup" /> 
				</div>
				<div class="flex-none mt-12 lg:mt-0">
					<div class="rounded-[10px] relative xl:w-[550px] 2xl:w-[650px]">
						<div class="w-full z-20 relative">							
							<div class="lg:w-[420px] bg-white rounded-[10px] px-4 py-12 border border-solid border-gray shadow-shadowBox mx-auto">
								<div class="lg:w-[328px] mx-auto">
									<Mdtitle title="Sign up to Medium" />
									<form method="post">
										<div class="flex flex-col gap-5">
											<div class="form-group relative">
												<Input type="text" name="Name" placeholder="Name"/>
												<img src={UserIcon} class="absolute right-8 top-1/2 -translate-y-1/2" alt="">
											</div>
											<div class="form-group relative">
												<Input type="text" name="Email" placeholder="Email"/>
												<img src={EmailIcon} class="absolute right-8 top-1/2 -translate-y-1/2" alt="">
											</div>
											<div class="form-group relative">
												<Input type="Password" name="Password" placeholder="Password"/>
												<img src={EyeIcon} class="absolute right-8 top-1/2 -translate-y-1/2" alt="">
											</div>
											<div class="form-group relative">
												<Input type="Password" name="Confirm Password" placeholder="Confirm Password"/>
												<img src={EyeIcon} class="absolute right-8 top-1/2 -translate-y-1/2" alt="">
											</div>
										</div>
										<div class="text-end mt-2">
											<a href="javascript:Void(0)" class="text-darkcolor text-[13px]">
												Forget Password ?
											</a>
										</div>
										<div class="acountBtn">
											<Button buttonText="Signup" />
										</div>
										<div class="before:top-1/2 -before:translate-y-1/2 before:absolute before:bg-dividercolor before:h-px relative text-center my-8 before:left-0 before:right-0 before:h-1">
											<span class="relative text-sm bg-white px-2 text-dividertxt">
												Or login up with
											</span>
										</div>
										<div class="max-w-[265px] mb-8 mx-auto">
											<div class="flex gap-3 xl:gap-4 2xl:gap-5">
												<div class="flex-1">
													<a href="#" class="w-[75px] h-12 flex items-center justify-center rounded-lg shadow-shadowBtn text-center">
														<img class="mx-auto" src={GoogleIcon} alt="Google" />
													</a>
												</div>
												<div class="flex-1">
													<a href="#" class="w-[75px] h-12 flex items-center justify-center rounded-lg shadow-shadowBtn text-center">
														<img class="mx-auto" src={FbIcon} alt="Facebook" />
													</a>
												</div>
												<div class="flex-1">
													<a href="#" class="w-[75px] h-12 flex items-center justify-center rounded-lg shadow-shadowBtn text-center">
														<img class="mx-auto" src={AppleIcon} alt="Apple" />
													</a>
												</div>
											</div>
										</div>
										<div class="registerLink text-center text-darkgray text-[13px]">
											<a class="font-medium underline" href="#">Login</a> if you don't have an account
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="loginShape -top-10 inset-0 absolute z-10">
							<img src={LoginShape} alt="Login Shape" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
