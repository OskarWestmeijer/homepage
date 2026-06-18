export interface ProjectImage {
	src: string;
	caption: string;
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
			{ src: '/projects/weather/weather_project.png', caption: 'Application' },
			{ src: '/projects/weather/c4_container.svg', caption: 'Container diagram' }
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
			{ src: '/projects/flights/flights_25_09_2025.png', caption: 'Application' },
			{ src: '/projects/flights/c4_container.svg', caption: 'Container diagram' }
		]
	},
	{
		slug: 'maps',
		index: '03',
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
		images: [{ src: '/projects/maps/maps_25_09_2025-min.png', caption: 'Map' }]
	},
	{
		slug: 'kafka-etl-pipeline',
		index: '04',
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
			{ src: '/projects/kafka-etl-pipeline/c4_container.svg', caption: 'Container diagram' },
			{ src: '/projects/kafka-etl-pipeline/c4_component.svg', caption: 'Component diagram' }
		]
	}
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}
