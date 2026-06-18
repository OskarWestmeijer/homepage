<script lang="ts">
	let language = $state<'en' | 'de' | 'fi'>('en');

	const content = $derived.by(() => {
		switch (language) {
			case 'de':
				return {
					role: 'Softwareentwickler · Hamburg',
					lines: [
						'Ich arbeite als Entwickler und lebe in Hamburg.',
						'In meiner Freizeit gehe ich gerne ins Fitnessstudio, Bouldern und Joggen.',
						'Ich lese viel und interessiere mich besonders für Geschichte, Geopolitik und Karten.',
						'Im Urlaub reise ich gerne und besuche vor allem Museen für Geschichte und Kunst.'
					]
				};

			case 'fi':
				return {
					role: 'Ohjelmistokehittäjä · Hampuri',
					lines: [
						'Olen kehittäjä ja asun Hampurissa.',
						'Vapaa-ajallani pysyn aktiivisena käymällä salilla, kiipeilemällä ja juoksemalla.',
						'Rakastan lukemista, ja olen erityisen kiinnostunut historiasta, geopolitiikasta ja kartoista.',
						'Lomilla matkustan usein ja käyn mieluiten taide- ja historiamuseoissa.'
					]
				};

			default:
				return {
					role: 'Software Developer · Hamburg',
					lines: [
						'I work as a developer and am located in Hamburg, Germany.',
						'In my free time, I stay physically active by working out at the gym, bouldering and going for runs.',
						"I love to read and do it a lot. I'm also passionate about history, geopolitics, and maps.",
						'During vacations, I enjoy traveling and exploring history and art museums.'
					]
				};
		}
	});

	const languages = [
		{ code: 'en', label: 'EN' },
		{ code: 'de', label: 'DE' },
		{ code: 'fi', label: 'FI' }
	] as const;
</script>

<svelte:head>
	<title>Oskar Westmeijer</title>
</svelte:head>

<section class="mx-auto w-full max-w-2xl px-4 py-16 sm:py-24">
	<!-- Header row: portrait + name -->
	<div class="flex flex-col gap-8 sm:flex-row sm:items-center">
		<img
			src="/oskar_westmeijer.jpg"
			alt="Portrait of Oskar Westmeijer"
			class="border-base-300 h-40 w-40 shrink-0 rounded-md border object-cover object-top sm:h-44 sm:w-44"
		/>

		<div>
			<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Oskar Westmeijer</h1>
			<p class="text-primary mt-3 text-sm font-medium tracking-widest uppercase">{content.role}</p>
		</div>
	</div>

	<div class="border-base-content/80 my-10 w-16 border-t-2"></div>

	<!-- Bio -->
	<div class="space-y-5">
		{#each content.lines as line, index (index)}
			<p class="text-base leading-relaxed text-base-content sm:text-lg">{line}</p>
		{/each}
	</div>

	<!-- Footer row: CTA + language -->
	<div class="mt-12 flex flex-wrap items-center justify-between gap-6">
		<a href="/projects" class="btn btn-primary rounded-none text-xs tracking-widest uppercase">
			View Projects
			<span aria-hidden="true">→</span>
		</a>

		<div class="flex items-center gap-4 text-xs tracking-widest uppercase">
			{#each languages as lang (lang.code)}
				<button
					type="button"
					class="cursor-pointer transition-colors"
					class:text-primary={language === lang.code}
					class:text-base-content={language !== lang.code}
					class:opacity-50={language !== lang.code}
					onclick={() => (language = lang.code)}
				>
					{lang.label}
				</button>
			{/each}
		</div>
	</div>
</section>
