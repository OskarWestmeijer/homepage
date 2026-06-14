<div class="max-w-4xl mx-auto mt-10 mb-10 px-4 flex flex-col gap-6">
	<!-- Back Arrow -->
	<a href="/projects" class="text-sm text-black-500 hover:underline flex items-center gap-1">
		<span>←</span>
		<span>Back to Projects</span>
	</a>

	<!-- Title -->
	<h1 class="text-3xl font-bold flex items-center gap-2">🧭 maps</h1>

	<!-- Technology Badges -->
	<div class="flex gap-2 flex-wrap">
		<span class="tech-badge">sveltekit</span>
		<span class="tech-badge">qgis</span>
	</div>

	<!-- Description -->
	<p class="text-base text-gray-600">
		I create thematic maps with the tool QGIS. Most of the data used for creating the map is free
		and provided by the Copernicus project.
	</p>

	<!-- Links -->
	<div class="flex flex-wrap gap-4">
		<a
			href="https://github.com/OskarWestmeijer/maps"
			target="_blank"
			class="btn btn-outline btn-sm"
		>
			GitHub Repo
		</a>

		<a href="https://maps.oskar-westmeijer.com" target="_blank" class="btn btn-primary btn-sm">
			Visit
		</a>
	</div>

	<!-- Image -->
	<div class="mt-4">
		<img
			src="/projects/maps/maps_25_09_2025-min.png"
			alt="Maps App Preview"
			class="rounded-lg shadow-lg border border-base-300"
		/>
	</div>
</div>

<style>
	@reference "../../layout.css";

	.tech-badge {
		@apply badge border badge-ghost border-black px-2 py-0.5 text-xs text-black opacity-50;
	}
</style>
