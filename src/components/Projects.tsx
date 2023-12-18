import { Button, Stack, Card, Group, Text, Center, Image } from '@mantine/core';
import github from '/images/github.svg';

const backgroundColor = '#Eff0f0';

export function Projects() {
    return (
        <Group justify="center">
            <Card bg={backgroundColor} shadow="md" radius="md" withBorder maw={400}>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Weather</Text>
                    <a href="https://github.com/OskarWestmeijer/weather" aria-label="Weather Github repository">
                        <Image height={35} w="auto" fit="contain" src={github} alt="Github logo" />
                    </a>
                </Group>
                <Stack mt={10} justify="space-between" mih={120}>
                    <Text size="sm">
                        Provides weather data for selected locations. The frontend displays the weather in charts. The
                        backend service offers a public Api.
                    </Text>

                    <Center>
                        <a
                            href="https://weather.oskar-westmeijer.com"
                            aria-label="Weather Angular frontend live deployment"
                        >
                            <Button radius="md" variant="gradient">
                                &#x26C5; Weather
                            </Button>
                        </a>
                    </Center>
                </Stack>
            </Card>

            <Card bg={backgroundColor} shadow="md" radius="md" withBorder maw={400}>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Maps</Text>
                    <a href="https://github.com/OskarWestmeijer/maps" aria-label="Maps Github repository">
                        <Image height={35} w="auto" fit="contain" src={github} alt="Github logo" />
                    </a>
                </Group>
                <Stack mt={10} justify="space-between" mih={120}>
                    <Text size="sm">Displays Hamburg airport connections on a 3d globe.</Text>
                    <Center>
                        <a
                            href="https://maps.oskar-westmeijer.com"
                            aria-label="Maps Sveltekit frontend live deployment"
                        >
                            <Button radius="md" variant="gradient" >
                                &#127757; Maps
                            </Button>
                        </a>
                    </Center>
                </Stack>
            </Card>
        </Group>
    );
}
