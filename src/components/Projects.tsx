import { Badge, Button, Space, Card, Group, Text, Grid, Center, Image, rem } from '@mantine/core';
import github from '/images/github.svg';

const backgroundColor = '#Eff0f0';

export function Projects() {
    return (
        <Grid justify="center" align="center">
            <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }} style={{ maxWidth: rem(500) }}>
                <Card bg={backgroundColor} shadow="md" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Weather-Api</Text>
                        <Badge variant="light" color="green">
                            LIVE
                        </Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                        This API offers weather data. The API usage is documented in an OpenAPI specification. An
                        Angular frontend presents the weather using charts.
                    </Text>
                    <Space h={20}></Space>

                    <Center>
                        <Group>
                            <a href="https://github.com/OskarWestmeijer/weather-api" aria-label="Weather-Api Github repository">
                                <Image height={45} w="auto" fit="contain" src={github} alt="Github logo" />
                            </a>

                            <a href="https://ui.oskar-westmeijer.com" aria-label="Weather-Api angular frontend live deployment">
                                <Button radius="md">UI Dashboard</Button>
                            </a>
                        </Group>
                    </Center>
                </Card>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4, xl: 4 }} />
        </Grid>
    );
}
