import { Button, Stack, Card, Group, Text, Title, Image, CardSection } from '@mantine/core';
import github from '/images/github.svg';
import weather from '/images/weather_screenshot.png';
import maps from '/images/maps_screenshot.png';

const backgroundColor = '#Eff0f0';

export function Projects() {
    return (
        <Stack align="center">
            <Title>Projects</Title>
            <Group mt="md" justify="center">
                <Card bg={backgroundColor} shadow="md" radius="md" withBorder w={375}>
                    <CardSection>
                        <Image src={weather} height={215} alt="Screenshot of weather frontend" />
                    </CardSection>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Title order={3}>&#x26C5; Weather</Title>
                        <a href="https://github.com/OskarWestmeijer/weather" aria-label="Weather Github repository">
                            <Image height={30} w="auto" fit="contain" src={github} alt="Github logo" />
                        </a>
                    </Group>
                    <Stack mt={10} align="center" justify="space-between" mih={120}>
                        <Text size="sm">
                            Provides weather data for selected locations. The frontend displays the weather in charts.
                            The backend service offers a public Api.
                        </Text>
                        <a
                            href="https://weather.oskar-westmeijer.com"
                            aria-label="Weather Angular frontend live deployment"
                        >
                            <Button radius="md" variant="gradient">
                                Visit
                            </Button>
                        </a>
                    </Stack>
                </Card>

                <Card bg={backgroundColor} shadow="md" radius="md" withBorder w={375}>
                    <CardSection>
                        <Image src={maps} height={215} alt="Screenshot of maps frontend" />
                    </CardSection>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Title order={3}>&#127757; Maps</Title>
                        <a href="https://github.com/OskarWestmeijer/maps" aria-label="Maps Github repository">
                            <Image height={30} w="auto" fit="contain" src={github} alt="Github logo" />
                        </a>
                    </Group>
                    <Stack mt={10} align="center" justify="space-between" mih={120}>
                        <Text size="sm">
                            Displays Hamburg airport connections on a 3d globe. Backend provides a public Api.
                        </Text>
                        <a
                            href="https://maps.oskar-westmeijer.com"
                            aria-label="Maps Sveltekit frontend live deployment"
                        >
                            <Button radius="md" variant="gradient">
                                Visit
                            </Button>
                        </a>
                    </Stack>
                </Card>
            </Group>
        </Stack>
    );
}
