import { Badge, Button, Space, Card, Group, Text, Center, Image } from '@mantine/core';
import github from '/images/github.svg';

const backgroundColor = '#Eff0f0';

export function Projects() {
    return (
        <Group justify="center">
            <Card bg={backgroundColor} shadow="md" radius="md" withBorder maw={500}>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={500}>Weather-Api</Text>
                    <Badge variant="light" color="green">
                        LIVE
                    </Badge>
                </Group>
                <Text size="sm">
                    This API offers weather data. The API usage is documented in an OpenAPI specification. An Angular
                    frontend presents the weather using charts.
                </Text>
                <Space h={20}></Space>

                <Center>
                    <Group>
                        <a
                            href="https://github.com/OskarWestmeijer/weather-api"
                            aria-label="Weather-Api Github repository"
                        >
                            <Image height={45} w="auto" fit="contain" src={github} alt="Github logo" />
                        </a>

                        <a
                            href="https://ui.oskar-westmeijer.com"
                            aria-label="Weather-Api angular frontend live deployment"
                        >
                            <Button radius="md">UI Dashboard</Button>
                        </a>
                    </Group>
                </Center>
            </Card>
        </Group>
    );
}
