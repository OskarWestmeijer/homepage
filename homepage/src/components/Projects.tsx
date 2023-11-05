import { Badge, Button, Space, Card, Group, Text, Grid, Center, Image } from '@mantine/core';
import github from '/images/github.svg';

export function Projects() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Card bg="#f5f5f5" shadow="md" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Weather-Api</Text>
                        <Badge variant="light" color="green">
                            LIVE
                        </Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                        This Api provides Weather data for predefined locations. The service harvests weather data from
                        the external Openweathermap Api and stores it in a database. An OpenApi specification documents
                        the Api usage. An Angular dashboard displays the weather data in charts.
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
