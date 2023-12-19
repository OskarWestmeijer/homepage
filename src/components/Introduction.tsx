import { Image, Text, Title, Group, rem, Stack } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';

export function Introduction() {
    return (
        <Group justify="center" align="stretch" gap="xl">
            <Image radius="md" src={portrait} style={{ maxWidth: rem(350) }} alt="Oskar Westmeijer picture" />

            <Stack align="center" justify="center" w={350}>
                <Group gap="xs">
                    <Text fw="600" fz={20}>
                        Hi, my name is{' '}
                    </Text>
                    <Title fz={45} order={1}>
                        Oskar!
                    </Title>
                </Group>
                <Text>I work as software developer and enjoy learning new technoligies in my free time.</Text>
                <Text>
                    In addition to coding, I stay active at the gym. I like to read, especially when it comes to
                    history, foreign cultures, and geography.
                </Text>
            </Stack>
        </Group>
    );
}
