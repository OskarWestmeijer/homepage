<script lang="ts">
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<title>Oskar Westmeijer</title>
</svelte:head>

<!-- Flex column wrapper -->
<div class="flex min-h-screen flex-col bg-base-100">
	<div class="navbar">
		<div class="navbar-start">
			<div class="mobile-hide">
				<a href="/" class="btn btn-ghost rounded-lg text-xl font-bold">🐨 Oskar Westmeijer</a>
			</div>
		</div>
		<div class="navbar-center">
			<a href="/" class="btn btn-ghost rounded-lg">💡 About</a>
			<a href="/projects" class="btn btn-ghost rounded-lg">🔧 Projects</a>
		</div>
		<div class="navbar-end">
			<div class="mobile-hide">
				<a href="https://github.com/OskarWestmeijer" aria-label="Oskar Westmeijer Github profile">
					<button class="btn btn-ghost rounded-lg">
						<img alt="Github logo" class="size-6" src="/github.svg" />
					</button>
				</a>
				<a
					href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
					aria-label="Oskar Westmeijer LinkedIn profile"
					class="btn btn-ghost rounded-lg"
				>
					<img alt="Linkedin logo" class="size-6" src="/linkedin.svg" />
				</a>
			</div>
		</div>
	</div>

	<!-- Main grows to push footer down -->
	<main class="flex-grow">
		{@render children?.()}
	</main>

	<footer class="mt-10 footer footer-center mobile-show">
		<h1 class="text-xl font-bold">🐨 Oskar Westmeijer</h1>
		<div class="flex flex-row justify-center">
			<a
				href="https://github.com/OskarWestmeijer"
				aria-label="Oskar Westmeijer Github profile"
				class="btn btn-ghost rounded-lg"
			>
				<img alt="Github logo" class="size-7" src="/github.svg" />
			</a>
			<a
				href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
				aria-label="Oskar Westmeijer LinkedIn profile"
				class="btn btn-ghost rounded-lg"
			>
				<img alt="Linkedin logo" class="size-6" src="/linkedin.svg" />
			</a>
		</div>
	</footer>
</div>
