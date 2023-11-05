import { Image, Text, Title, Paper, Grid, Center, Space, Group } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';
import github from '/images/github.svg';
import linkedin from '/images/linkedin.png';

export function Introduction() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Center>
                    <Image radius="md" height={500} w="auto" fit="contain" src={portrait} />
                </Center>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Paper bg="#f5f5f5" mt="70" shadow="md" radius="md" withBorder p="xl">
                    <Center>
                        <Title order={4}>Oskar Westmeijer</Title>
                    </Center>
                    <Center>
                        <Text c="dimmed" size="sm">
                            software developer in Hamburg, Germany
                        </Text>
                    </Center>
                    <Space h="sm" />
                    <Text>
                        I have worked mostly with Java, but in my free time I like to try out other languages and
                        frameworks too.
                    </Text>
                    <Space h="sm" />
                    <Text>
                        Apart from developing, I enjoy working out at the gym. Furthermore I like to read and am
                        interested in the topics of history, foreign cultures and geography. Basically I am constantly
                        learning and reading up on these subjects.
                    </Text>
                    <Space h="md" />
                    <Center>
                        <Group>
                            <a href="https://github.com/OskarWestmeijer">
                                <Image h="35" src={github} />
                            </a>
                            <a href="https://www.linkedin.com/in/oskar-westmeijer-488449252/">
                                <Image h="35" src={linkedin} />
                            </a>
                        </Group>
                    </Center>
                </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
        </Grid>
    );
}
