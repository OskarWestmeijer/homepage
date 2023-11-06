import { Badge, Button, Space, Card, Group, Text, Grid, Center, Image } from '@mantine/core';
import github from '/images/github.svg';

const backgroundColor = '#Eff0f0';

export function Projects() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Card bg={backgroundColor} shadow="md" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Weather-Api</Text>
                        <Badge variant="light" color="green">
                            LIVE
                        </Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                        This API offers weather data for predefined locations. It fetches weather information from the
                        external Openweathermap API and saves it in a database. The API usage is documented in an
                        OpenAPI specification, and an Angular dashboard presents the weather data using charts.
                    </Text>
                    <Space h={20}></Space>

                    <Center>
                        <Group>
                            <a href="https://github.com/OskarWestmeijer/weather-api">
                                <Image height={45} src={github} />
                            </a>

                            <a href="https://ui.oskar-westmeijer.com">
                                <Button radius="md">UI Dashboard</Button>
                            </a>
                        </Group>
                    </Center>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }} />
        </Grid>
    );
}
