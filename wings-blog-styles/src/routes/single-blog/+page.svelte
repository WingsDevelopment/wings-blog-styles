<script>
	import Header from '$lib/components/Header.svelte';
	import BlogSidebar from '$lib/components/BlogSidebar.svelte';
	import Featimage from '$lib/images/mainimg.jpg';
	import User from '$lib/images/user1.png';
	import Play from '$lib/images/listen.svg';
	import Twitter from '$lib/images/twitter.svg';
	import Facebook from '$lib/images/facebook.svg';
	import Linkedin from '$lib/images/linkedin.svg';
	import Link from '$lib/images/link.svg';
	import Bookmark from '$lib/images/bookmark.svg';
	import Footer from '$lib/components/Footer.svelte';
	import LikeIcon from '$lib/images/likebtn.svg';
	import DotsHorizontal from '$lib/images/dotshorizontal.svg';
	import FollowIcon from '$lib/images/followbtn.svg';
	import MuteIcon from '$lib/images/mutebtn.svg';
	import { Button, Dropdown, DropdownItem, Blockquote} from 'flowbite-svelte';
	import Tag from '$lib/components/Tag.svelte';
	let placementdots = 'bottom-end';
</script>

<Header />

<div class="mt-[100px]">
	<div class="container mx-auto">
		<div class="xl:grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="md:col-span-2 px-5">
				<div class="featimg">
					<img class="mx-auto rounded-xl" src="{Featimage}" alt="featimage">
				</div>
				<div class="metabox md:flex justify-between mt-5 border border-solid border-gray rounded-xl p-2 md:p-5">
					<div class="flex items-center">
						<div class="userimg mr-[6px] md:mr-[16px]">
							<img class="w-[50px] h-[50px] rounded-full object-cover" src="{User}" alt="" />
						</div>
						<div class="userDetail">
							<div class="author">
								<p>Amit Kumar</p>
							</div>
							<div class="flex items-center">
								<div class="publish"><p class="text-gray3 text-sm">Nov 23 <span class="hidden md:inline-block">, 2022</span></p></div>
								<div class="px-1 md:px-2"><span class="dot text-gray3">.</span></div>
								<div class="read-time"><p class="text-gray3 text-sm">4 min read</p></div>
								<div class="px-1 md:px-2"><span class="dot text-gray3">.</span></div>
								<div class="listen"><button class="flex text-gray3 text-sm items-center"><img class="pr-1 w-[18px] h-[18px] md:w-[24px] md:h-[24px]" src="{Play}" alt="" /> Listen</button></div>
							</div>
						</div>
					</div>
					<div class="flex-none">
						<div class="flex social-share mt-3 md:mt-0">
							<div class="twitter">
								<Button class="hover:bg-transparent bg-transparent !px-1 !py-2]">
									<img src="{Twitter}" alt="twitter" />
								</Button>
							</div>
							<div class="facebook">
								<Button class="hover:bg-transparent bg-transparent !px-1 !py-2">
									<img src="{Facebook}" alt="facebook" />	
								</Button>
							</div>
							<div class="linkedin">
								<Button class="hover:bg-transparent bg-transparent !px-1 !py-2">
									<img src="{Linkedin}" alt="linkedin" />	
								</Button>
							</div>
							<div class="link">
								<Button class="hover:bg-transparent bg-transparent !px-1 !py-2">
									<img src="{Link}" alt="link" />
								</Button>
							</div>
							<div class="bookmark">
								<Button class="hover:bg-transparent bg-transparent !px-1 !py-2 !pl-[28px]">
									<img src="{Bookmark}" alt="bookmark" />	
								</Button>
							</div>
							<div class="actionBtn !px-1 !py-2 !pl-[28px]">
								<div class="dotsVertical relative">
									<Button class="hover:bg-transparent bg-transparent" data-placement1="bottom-end">
										<img src={DotsHorizontal} class="relative" alt="Logo" />
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
				<div class="tagOuter mt-5">
					<ul>
						<li>
							<Tag tagText="#Programming" />
						</li>
						<li>
							<Tag tagText="#Data Science" />
						</li>
						<li> 
							<Tag tagText="#Technology" />
						</li> 
						<li>
							<Tag tagText="#Self Improvement" />
						</li>
						
					</ul>
				</div>
				
				<div class="blog-data mt-[30px]">
					<h1 class="md:text-4xl text-3xl font-bold entry-title mb-[50px]">My Experience with Svelte and SvelteKit</h1>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px]">Why Svelte</h2>
					<p class="text-darkgray text-base mb-4">When I thought about building a web version of the book, I knew I would need to choose a tech stack. 
						I wanted something simple, lightweight, and fast.</p>
					<p class="text-darkgray text-base mb-4">Before, I already had projects written in React with Next and some written in vanilla technologies, 
						and I wanted something simpler.</p>
					<p class="text-darkgray text-base mb-4">For this project, I felt like React with Next was going to be an overhead: too heavy, too much stuff I would not use, and 
						too strong a commitment to follow every major version bump.</p>
					<p class="text-darkgray text-base mb-4">On the other hand, vanilla technologies require infrastructure: some builder with Gulp, for example, that I 
						would need to set up manually.</p>
					<p class="text-darkgray text-base mb-4">Fortunately, I wanted to try Svelte for some time and heard many good reviews about it, so I decided 
						to use it for this project.</p>
					<Blockquote border class="p-4 my-4 bg-slate-100" >It Just Works</Blockquote>
					<p class="text-darkgray text-base mb-4">I can describe the main expression from SvelteKit in one phrase: “Wow, it just works.”</p>
					<p class="text-darkgray text-base mb-4">For the whole time I have been building the app, I felt like any problem I came up with was already solved, and 
						I just needed to look at the docs for the solution.</p>
					<p class="text-darkgray text-base mb-4">For instance...</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mt-[50px]">Styles</h2>
					<p class="text-darkgray text-base mb-4">Let's start with styles because those are one of my main pains with React ecosystem.</p>
					<p class="text-darkgray text-base mb-4">In React, there is no obvious or standard way to use styles. There are 
						many options like CSS-in-JS (with or without runtime), CSS modules, style attribute, global CSS, etc.</p>
					<p class="text-darkgray text-base mb-4">In Svelte, on the other hand, you've got a built-in way to handle style—the <strong>style</strong> tag.</p>
					<p class="text-darkgray text-base mb-4">For example, here's the logo component from the book's source code:</p>
					<div class="bg-black text-white p-5 rounded-xl mb-4">
						<code class="language-sh">
							HTML Code here 
						</code>
						 
					</div>
					<p class="text-darkgray text-base mb-4">No need for additional infrastructure setup, “it just works.”</p>
					<p class="text-darkgray text-base mb-4">The styles are scoped by default, so I don't need to worry about isolation—safe defaults for the win. There's a way to escape the scoping if you want to, of course, 
						but by default, the main issue with styling is solved beforehand.</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mt-[50px]">Prerendering and SSG</h2>
					<p class="text-darkgray text-base mb-4">The second thing is easy prerendering and SSG. To turn prerendering on, in most cases, 
						you'll need one line of code.</p>
					<p class="text-darkgray text-base mb-4">Not all pages are suitable for it, but in my case, I had the whole site prerendered out of the box with no sweat.</p>
					<p class="text-darkgray text-base mb-4">By default, the prerendering starts with the root path of your site “/.” In my case, I needed to start not from the root but from 2 inner paths: “/en” and “/ru.”</p>
					<p class="text-darkgray text-base mb-4">I expected to waste hours trying to fix this, but SvelteKit's docs already had the solution. There's entries setting for the prerendering that solves that problem.</p>
					<p class="text-darkgray text-base mb-4">It felt like SvelteKit foresaw the problems I could face and carefully solved them beforehand. “Just works.”</p>
					<p class="text-darkgray text-base mb-4">For SSG, by the way, there's the static adapter. I haven't tried it yet but got plans to do so.</p>
					<p class="text-darkgray text-base mb-4">...And, well, I have a hunch that I'll have the same feeling of “just works” again.</p>
					<p class="text-darkgray text-base mb-4">Size and Speed With Svelte, my whole application page (including routing, event handling, localization, prerendering, etc) is less than React alone 😅</p>
					<p class="text-darkgray text-base mb-4">(You could also totally remove JavaScript from the final build in some cases. I want to try it too.) 
						At the same time, SvelteKit is really fast. 
						It uses Vite under the hood, and it's just ridiculously fast. I didn't have to “wait 
						until it recompiles” to see the results of my changes like I need with Next, for instance.</p>
					<p class="text-darkgray text-base mb-4">I've got another project similar in complexity but written in React and Next. And I've got to say SvelteKit is much faster 😅</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mt-[50px]">Platform Features</h2>
					<p class="text-darkgray text-base mb-4">I really like how SvelteKit didn't try to invent the wheel with route transitions. We can use good old <code>&#60;a&#62;</code> to navigate between pages. No framework-specific stuff, "just works".</p>
					<p class="text-darkgray text-base mb-4">The same goes for the “form actions”, which are basically seamless API controllers. It isn't a unique feature, many frameworks have similar stuff, but I like how SvelteKit emphasizes the web 
						platform features like standard request and response interfaces.</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mt-[50px]">Amount of Code</h2>
					<p class="text-darkgray text-base mb-4">The next thing is <a href="https://svelte.dev/tutorial/reactive-declarations" target="_blank" rel="noreferrer"><u>reactivity</u></a>. I'm not really a fan of two-way data binding because I had a hard time debugging some stuff back in the day. But now I slowly change my mind.</p>
					<p class="text-darkgray text-base mb-4">It just takes less code to implement a feature with Svelte than with React. Just compare the amount of code needed to create a simple login form.</p>
					<p class="text-darkgray text-base mb-4">With React:</p>
					<div class="bg-black text-white p-5 rounded-xl mb-4">
						<code class="language-sh">
							HTML Code here 
						</code>
					</div>
					<p class="text-darkgray text-base mb-4">...And with Svelte:</p>
					<div class="bg-black text-white p-5 rounded-xl mb-4">
						<code class="language-sh">
							HTML Code here 
						</code>
					</div>
					<p class="text-darkgray text-base mb-4">Much more concise, compact, and declarative.</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mb-[30px] mt-[50px]">Accessibility</h2>
					<p class="text-darkgray text-base mb-4">Speaking about safe defaults, Svelte has the 
						<a href="https://svelte.dev/docs#accessibility-warnings" target="_blank" rel="noreferrer"><u>accessibility linting built-in</u></a>.</p>
					<p class="text-darkgray text-base mb-4">There are some obvious rules like “don't forget alt for images,” but also more nuanced ones like role and DOM structure checks.</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mb-[30px] mt-[50px]">Conclusion</h2>
					<p class="text-darkgray text-base mb-4">So far, I really enjoy building the app with Svelte and SvelteKit. The process is much simpler and takes less time.</p>
					<p class="text-darkgray text-base mb-4">I'm not completely sure yet if Svelte can be used for large apps but for medium-sized apps and simple, mostly-static ones, it definitely is a good choice.</p>
					<h2 class="md:text-3xl text-2xl font-bold mb-[30px] mb-[30px] mt-[50px]">But What About Drawbacks?</h2>
					<p class="text-darkgray text-base mb-4">Svelte has something I can rant about, too 😃</p>
					<p class="text-darkgray text-base mb-4">But I left those for another post and another time. Subscribe, and stay tuned!</p>
					<p class="text-darkgray text-base mb-4">Post originally created by <a href="https://dev.to/bespoyasov" target="_blank" rel="noreferrer"><u>Alex Bespoyasov</u></a>.</p>
					
				</div>
			</div>
		<div class="md:col-span-1 px-5 xl:px-0">
			<BlogSidebar />
		</div>
	</div>
	</div>
	
</div>
<div>
	<Footer />
</div>

