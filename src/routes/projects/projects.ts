export interface ProjectImage {
	src: string;
	caption: string;
	/** Intrinsic size, rendered as width/height attributes to reserve layout space. */
	width: number;
	height: number;
}

export interface Project {
	slug: string;
	index: string;
	emoji: string;
	title: string;
	tags: string[];
	/** One-line teaser shown on the projects grid. */
	summary: string;
	/** Full description shown on the detail page, one entry per paragraph. */
	description: string[];
	repo: string;
	visit?: string;
	images: ProjectImage[];
}

export const projects: Project[] = [
	{
		slug: 'weather',
		index: '01',
		emoji: '⛅',
		title: 'weather',
		tags: ['java', 'spring-boot', 'postgres', 'angular'],
		summary:
			'Provides weather data for selected locations, harvested every minute and displayed in interactive charts.',
		description: [
			'Provides weather data for selected locations. The frontend displays the weather in charts, while the backend service offers a public API documented with an OpenAPI specification.',
			'The weather data is harvested every minute from openweathermap.org and stored in a database.'
		],
		repo: 'https://github.com/OskarWestmeijer/weather',
		visit: 'https://weather.oskar-westmeijer.com',
		images: [
			{
				src: '/projects/weather/weather_22_08_2026.webp',
				caption: 'Application',
				width: 1536,
				height: 864
			},
			{
				src: '/projects/weather/c4_container.svg',
				caption: 'Container diagram',
				width: 812,
				height: 717
			}
		]
	},
	{
		slug: 'flights',
		index: '02',
		emoji: '✈️',
		title: 'flights',
		tags: ['kotlin', 'ktor', 'redis', 'sveltekit'],
		summary:
			'Explore daily Hamburg airport flights and connections, visualized as a network on an interactive 3D globe.',
		description: [
			'Explore daily Hamburg airport flights and connections. The app displays a network of connections on a 3D globe.',
			'The backend provides a public API, and airport connections are refreshed every 10 minutes.'
		],
		repo: 'https://github.com/OskarWestmeijer/flights',
		visit: 'https://flights.oskar-westmeijer.com',
		images: [
			{
				src: '/projects/flights/flights_22_08_2026.webp',
				caption: 'Application',
				width: 1536,
				height: 864
			},
			{
				src: '/projects/flights/c4_container.svg',
				caption: 'Container diagram',
				width: 698,
				height: 631
			}
		]
	},
	{
		slug: 'kuntakilpailu',
		index: '03',
		emoji: '🗺️',
		title: 'kuntakilpailu',
		tags: ['ai'],
		summary:
			'Ranks all Finnish municipalities on an interactive map, scored by unemployment, income, education and more.',
		description: [
			'Ranks the 308 Finnish municipalities using six statistics from Statistics Finland: unemployment, population change, median income, higher education, average age, and gender balance.',
			'Each indicator is converted to a percentile rank, and categories can be toggled on or off to instantly recalculate the ranking on the map.'
		],
		repo: 'https://github.com/OskarWestmeijer/kuntakilpailu',
		visit: 'https://kuntakilpailu.oskar-westmeijer.com',
		images: [
			{
				src: '/projects/kuntakilpailu/kuntakilpailu_03_09_2026.webp',
				caption: 'Application',
				width: 1440,
				height: 900
			}
		]
	},
	{
		slug: 'maps',
		index: '04',
		emoji: '🧭',
		title: 'maps',
		tags: ['sveltekit', 'qgis'],
		summary:
			'Thematic maps built with QGIS, using free geospatial data provided by the Copernicus project.',
		description: [
			'I create thematic maps with the tool QGIS.',
			'Most of the data used for creating the maps is free and provided by the Copernicus project.'
		],
		repo: 'https://github.com/OskarWestmeijer/maps',
		visit: 'https://maps.oskar-westmeijer.com',
		images: [
			{ src: '/projects/maps/maps_22_08_2026.webp', caption: 'Gallery', width: 1536, height: 864 }
		]
	},
	{
		slug: 'kafka-etl-pipeline',
		index: '05',
		emoji: '⚙️',
		title: 'kafka-etl-pipeline',
		tags: ['java', 'spring-boot', 'kafka', 'postgres', 'cloud events'],
		summary:
			'A Kafka-based ETL pipeline that enriches products step by step across topics, calling external services at each stage.',
		description: [
			'This service implements a Kafka-based ETL pipeline for product enrichment. The same product passes through multiple Kafka topics, with each step focused on a different enrichment task.',
			'At each stage, the service performs an HTTP call to gather additional data, updates the product, saves it to the database, and sends it to the next topic for further processing.'
		],
		repo: 'https://github.com/OskarWestmeijer/kafka-etl-pipeline',
		images: [
			{
				src: '/projects/kafka-etl-pipeline/c4_container.svg',
				caption: 'Container diagram',
				width: 1085,
				height: 723
			},
			{
				src: '/projects/kafka-etl-pipeline/c4_component.svg',
				caption: 'Component diagram',
				width: 1145,
				height: 603
			}
		]
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
