<script lang="ts">
	import './layout.css';
	import { page } from '$app/state';
	let { children } = $props();

	const links = [
		{ href: '/', label: 'About' },
		{ href: '/projects', label: 'Projects' }
	];
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" type="image/x-icon" />
	<title>Oskar Westmeijer</title>
</svelte:head>

<div class="bg-base-100 flex min-h-screen flex-col">
	<header class="border-base-300 border-b">
		<nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
			<a href="/" class="text-base font-bold tracking-tight">Oskar Westmeijer</a>

			<div class="flex items-center gap-5 text-xs tracking-widest uppercase">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="hover:text-primary transition-colors"
						class:text-primary={page.url.pathname === link.href}
						class:text-base-content={page.url.pathname !== link.href}
					>
						{link.label}
					</a>
				{/each}
				<span class="bg-base-300 h-4 w-px" aria-hidden="true"></span>
				<a
					href="https://github.com/OskarWestmeijer"
					aria-label="Oskar Westmeijer GitHub profile"
					class="opacity-70 transition-opacity hover:opacity-100"
				>
					<img alt="" class="size-5" src="/github.svg" />
				</a>
				<a
					href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
					aria-label="Oskar Westmeijer LinkedIn profile"
					class="opacity-70 transition-opacity hover:opacity-100"
				>
					<img alt="" class="size-5" src="/linkedin.svg" />
				</a>
			</div>
		</nav>
	</header>

	<main class="flex flex-grow flex-col">
		{@render children?.()}
	</main>
</div>
