import { Image, Text, Title, Paper, Grid, Center, Space, Group, rem } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';
import github from '/images/github.svg';
import linkedin from '/images/linkedin.png';

const backgroundColor = '#Eff0f0';

export function Introduction() {
    return (
        <Grid justify="center" align="center">
            <Grid.Col span={{ xs: 12, sm: 12, md: 2, lg: 1, xl: 3 }} />
            <Grid.Col span={{ xs: 12, sm: 12, md: 4, lg: 5, xl: 3 }}>
                <Center>
                    {
                        // <Image radius="md" height={500} w="auto" fit="contain" src={portrait} />
                    }
                    <Image radius="md" h={500} src={portrait} style={{ maxWidth: rem(400) }} />
                </Center>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, sm: 12, md: 4, lg: 5, xl: 3 }} style={{ maxWidth: rem(450) }}>
                <Paper bg={backgroundColor} shadow="md" radius="md" withBorder p="xl">
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
                        My main focus in my professional work has been Java, but I also enjoy learning various other
                        programming languages and frameworks during my free time.
                    </Text>
                    <Space h="sm" />
                    <Text>
                        In addition to coding, I enjoy staying active at the gym. Additionally, I am really into
                        reading, especially when it comes to history, foreign cultures, and geography.
                    </Text>
                    <Space h="md" />
                    <Center>
                        <Group>
                            <a href="https://github.com/OskarWestmeijer">
                                <Image h={35} w="auto" fit="contain" src={github} />
                            </a>
                            <a href="https://www.linkedin.com/in/oskar-westmeijer-488449252/">
                                <Image h={35} w="auto" fit="contain" src={linkedin} />
                            </a>
                        </Group>
                    </Center>
                </Paper>
            </Grid.Col>

            <Grid.Col span={{ xs: 12, sm: 12, md: 2, lg: 1, xl: 3 }} />
        </Grid>
    );
}
