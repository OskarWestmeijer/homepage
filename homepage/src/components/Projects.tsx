import { Badge, Button, Space, Card, Group, Text, Grid, Title, Center, Image, SimpleGrid } from '@mantine/core';
import github from '/images/github.svg';

export function Projects() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }}>
                <Center>
                    <Title size={20} c="orange">
                        Projects
                    </Title>
                </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 1, lg: 1 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Card shadow="sm" radius="md" withBorder>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Weather-Api</Text>
                        <Badge color="green">LIVE</Badge>
                    </Group>
                    <Text size="sm" c="dimmed">
                        With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities
                        on and around the fjords of Norway
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
