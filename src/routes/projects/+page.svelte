<div class="max-w-4xl mx-auto mt-10 flex flex-col items-center gap-4">
	<a href="/projects/weather" class="project-card">
		<div class="flex justify-between items-center">
			<div class="project-title">⛅ weather</div>
			<div class="flex gap-1">
				<div class="badge-custom">java</div>
				<div class="badge-custom">api</div>
			</div>
		</div>
	</a>

	<a href="/projects/flights" class="project-card">
		<div class="flex justify-between items-center">
			<div class="project-title">✈️ flights</div>
			<div class="flex gap-1">
				<div class="badge-custom">kotlin</div>
				<div class="badge-custom">api</div>
			</div>
		</div>
	</a>

	<a href="/projects/maps" class="project-card">
		<div class="flex justify-between items-center">
			<div class="project-title">🧭 maps</div>
			<div class="flex gap-1">
				<div class="badge-custom">svelte</div>
				<div class="badge-custom">qgis</div>
			</div>
		</div>
	</a>

	<a href="/projects/kafka-etl-pipeline" class="project-card">
		<div class="flex justify-between items-center">
			<div class="project-title">⚙️ kafka-etl-pipeline</div>
			<div class="flex gap-1">
				<div class="badge-custom">java</div>
				<div class="badge-custom">kafka</div>
			</div>
		</div>
	</a>
</div>

<style>
	@reference "../layout.css";

	.project-card {
		@apply w-full max-w-xl cursor-pointer rounded-lg bg-base-100 p-6 no-underline shadow transition duration-200 hover:bg-base-300;
	}

	.project-title {
		@apply text-lg font-semibold;
	}

	.badge-custom {
		@apply badge border badge-ghost border-black px-2 py-0.5 text-xs text-black opacity-50;
	}
</style>
