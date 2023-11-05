import { Badge, Button, Space, Card, Group, Text, Grid, Title, Center, Image, SimpleGrid } from '@mantine/core';
import github from '/images/github.svg';

export function Projects() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}>
                <Title ta={'right'} size={20} c="orange">
                    projects
                </Title>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Card shadow="sm" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Weather-Api</Text>
                        <Badge color="green">LIVE</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                        This Api provides Weather data for predefined locations. The backend service harvests weather
                        data every minute from the external Openweathermap Api. The weather information is stored in a
                        database. The OpenApi specification is documented with Redoc. An Angular frontend displays the
                        weather data in charts over time.
                    </Text>
                    <Space h={20}></Space>
                    <SimpleGrid cols={2}>
                        <Center>
                            <a href="https://github.com/OskarWestmeijer/weather-api">
                                <Image height={45} src={github} />
                            </a>
                        </Center>

                        <a href="https://ui.oskar-westmeijer.com">
                            <Button variant="light" color="orange" radius="md">
                                UI Dashboard
                            </Button>
                        </a>
                    </SimpleGrid>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }} />
            <Grid.Col span={{ base: 12, md: 3, lg: 3 }} />
        </Grid>
    );
}
