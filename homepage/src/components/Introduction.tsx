import { Image, Text, Title, Paper, Grid, Center, Space } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';
import github from '/images/github.svg';

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
                <Paper shadow="md" radius="md" withBorder p="xl">
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
                        frameworks too. My Github account features some public projects.
                    </Text>
                    <Space h="sm" />
                    <Text>
                        Apart from developing, I like to exercise at the gym and read. I am especially interested in
                        history, different cultures and geography. Furthermore I am intrigued by people and individual
                        outlooks on life in general. Basically I am constantly learning and reading up on these topics.
                    </Text>
                    <Space h="sm" />
                    <Center>
                        <a href="https://github.com/OskarWestmeijer">
                            <Image h="35" src={github} />
                        </a>
                    </Center>
                </Paper>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
        </Grid>
    );
}
