import { Image, Text, Title, Group, rem, Stack } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';

export function Introduction() {
    return (
        <Group justify="center" align="stretch" gap="xl">
            <Image radius="md" src={portrait} style={{ maxWidth: rem(400) }} alt="Oskar Westmeijer picture" />

            <Stack align="center" justify="center" miw={375} maw={400}>
                <Group gap="xs">
                    <Text fw="600" fz={20}>
                        Hi, my name is{' '}
                    </Text>
                    <Title ff="Bungee Spice, normal" order={1}>
                        Oskar!
                    </Title>
                </Group>
                <Text>I work with Java and enjoy learning other programming languages and frameworks as well.</Text>
                <Text>
                    In addition to coding, I stay active at the gym. I am into reading, especially when it comes to
                    history, foreign cultures, and geography.
                </Text>
            </Stack>
        </Group>
    );
}
