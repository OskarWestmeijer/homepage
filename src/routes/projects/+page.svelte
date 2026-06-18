<script lang="ts">
	import { projects } from './projects';
</script>

<svelte:head>
	<title>Oskar Westmeijer</title>
</svelte:head>

<div class="mx-auto w-full max-w-4xl px-4 py-16 sm:py-20">
	<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
	<div class="border-base-content/80 my-10 w-16 border-t-2"></div>

	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
		{#each projects as project (project.slug)}
			<a
				href="/projects/{project.slug}"
				class="group border-base-300 hover:border-primary flex flex-col gap-4 border p-8 no-underline transition-colors duration-200"
			>
				<div class="flex items-baseline justify-between">
					<span class="text-primary font-mono text-sm">{project.index}</span>
					<span
						class="text-base-content/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
						aria-hidden="true"
					>
						→
					</span>
				</div>

				<h2 class="flex items-center gap-2 text-xl font-semibold">
					<span aria-hidden="true">{project.emoji}</span>
					{project.title}
				</h2>

				<p class="text-base-content/80 text-sm leading-relaxed">
					{project.summary}
				</p>

				<p class="text-base-content/50 mt-2 text-xs tracking-widest uppercase">
					{project.tags.join(' · ')}
				</p>
			</a>
		{/each}
	</div>
</div>
