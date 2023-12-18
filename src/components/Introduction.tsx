import { Image, Text, Title, Paper, Grid, Center, Space, Group, rem } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';
import github from '/images/github.svg';
import linkedin from '/images/linkedin.png';

const backgroundColor = '#Eff0f0';

export function Introduction() {
    return (
        <Group justify="center">
            <Center>
                <Image
                    radius="md"
                    src={portrait}
                    style={{ maxWidth: rem(400) }}
                    alt="Oskar Westmeijer picture"
                />
            </Center>

            <Paper bg={backgroundColor} shadow="md" radius="md" withBorder p="xl" maw={500}>
                <Center>
                    <Title order={4}>Oskar Westmeijer</Title>
                </Center>
                <Center>
                    <Text size="sm">software developer in Hamburg, Germany</Text>
                </Center>
                <Space h="sm" />
                <Text>I work with Java and enjoy learning other programming languages or frameworks as well.</Text>
                <Space h="sm" />
                <Text>
                    In addition to coding, I stay active at the gym. I am into reading, especially when it comes to
                    history, foreign cultures, and geography.
                </Text>
                <Space h="md" />
                <Center>
                    <Group>
                        <a href="https://github.com/OskarWestmeijer" aria-label="Oskar Westmeijer Github profile">
                            <Image h={35} w="auto" fit="contain" src={github} alt="Github logo" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
                            aria-label="Oskar Westmeijer LinkedIn profile"
                        >
                            <Image h={35} w="auto" fit="contain" src={linkedin} alt="LinkedIn logo" />
                        </a>
                    </Group>
                </Center>
            </Paper>
        </Group>
    );
}
