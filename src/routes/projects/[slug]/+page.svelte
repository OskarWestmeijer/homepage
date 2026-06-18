<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} — Oskar Westmeijer</title>
</svelte:head>

<article class="mx-auto w-full max-w-3xl px-4 py-16 sm:py-20">
	<!-- Back link -->
	<a
		href="/projects"
		class="text-base-content/60 hover:text-primary inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors"
	>
		<span aria-hidden="true">←</span> Projects
	</a>

	<!-- Header -->
	<div class="mt-8 flex items-baseline gap-3">
		<span class="text-primary font-mono text-sm">{project.index}</span>
		<h1 class="flex items-center gap-3 text-4xl font-bold tracking-tight sm:text-5xl">
			<span aria-hidden="true">{project.emoji}</span>
			{project.title}
		</h1>
	</div>
	<p class="text-base-content/50 mt-4 text-xs tracking-widest uppercase">
		{project.tags.join(' · ')}
	</p>

	<div class="border-base-content/80 my-10 w-16 border-t-2"></div>

	<!-- Description -->
	<div class="space-y-5">
		{#each project.description as paragraph, index (index)}
			<p class="text-base leading-relaxed text-base-content sm:text-lg">{paragraph}</p>
		{/each}
	</div>

	<!-- Actions -->
	<div class="mt-10 flex flex-wrap gap-4">
		<a
			href={project.repo}
			target="_blank"
			rel="noopener noreferrer"
			class="btn btn-primary rounded-none text-xs tracking-widest uppercase"
		>
			View Repo <span aria-hidden="true">↗</span>
		</a>
		{#if project.visit}
			<a
				href={project.visit}
				target="_blank"
				rel="noopener noreferrer"
				class="btn btn-outline rounded-none text-xs tracking-widest uppercase"
			>
				Visit Site <span aria-hidden="true">↗</span>
			</a>
		{/if}
	</div>

	<!-- Images -->
	<div class="mt-14 space-y-10">
		{#each project.images as image (image.src)}
			<figure>
				<img
					src={image.src}
					alt="{project.title} — {image.caption}"
					class="border-base-300 w-full border"
				/>
				<figcaption class="text-base-content/50 mt-3 text-xs tracking-widest uppercase">
					{image.caption}
				</figcaption>
			</figure>
		{/each}
	</div>
</article>
