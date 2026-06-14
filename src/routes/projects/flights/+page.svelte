<div class="max-w-4xl mx-auto mt-10 mb-10 px-4 flex flex-col gap-6">
	<!-- Back Arrow -->
	<a href="/projects" class="text-sm text-black-500 hover:underline flex items-center gap-1">
		<span>←</span>
		<span>Back to Projects</span>
	</a>

	<!-- Title -->
	<h1 class="text-3xl font-bold flex items-center gap-2">✈️ flights</h1>

	<!-- Technology Badges -->
	<div class="flex gap-2 flex-wrap">
		<span class="tech-badge">kotlin</span>
		<span class="tech-badge">ktor</span>
		<span class="tech-badge">redis</span>
		<span class="tech-badge">sveltekit</span>
	</div>

	<!-- Description -->
	<p class="text-base text-gray-600">
		Explore daily Hamburg airport flights and connections. Displays a network of connections on a 3D
		globe. The backend provides a public API. Airport connections are refreshed every 10 minutes.
	</p>

	<!-- Links -->
	<div class="flex flex-wrap gap-4">
		<a
			href="https://github.com/OskarWestmeijer/flights"
			target="_blank"
			class="btn btn-outline btn-sm"
		>
			GitHub Repo
		</a>

		<a href="https://flights.oskar-westmeijer.com" target="_blank" class="btn btn-primary btn-sm">
			Visit
		</a>
	</div>

	<!-- Images -->
	<div class="mt-4">
		<img
			src="/projects/flights/flights_25_09_2025.png"
			alt="Flights App Preview"
			class="rounded-lg shadow-lg border border-base-300"
		/>
	</div>

	<div class="mt-4">
		<img
			src="/projects/flights/c4_container.svg"
			alt="Flights Architecture Diagram"
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
