import { Image, Text, Title, Paper, Grid, Center } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';

export function Introduction() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Center>
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
                        <Text>
                            Hello, I work as a software developer in Hamburg, Germany! So far I have worked mostly with
                            Java but in my free time I try out other languages and frameworks as well.
                        </Text>
                    </Paper>
                </Grid.Col>
            </Center>

            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
        </Grid>
    );
}
