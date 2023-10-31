import { Image, Text, Title, Paper, Grid } from '@mantine/core';
import portrait from '/images/oskar_westmeijer.jpg';

export function Introduction() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Image radius="md" height={500} fit="contain" src={portrait} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Paper shadow="md" radius="md" withBorder p="xl">
                    <Text>
                        <Title order={4}>Oskar Westmeijer</Title>
                        Hello, I work as a software developer in Hamburg, Germany! So far I have worked mostly with Java
                        but in my free time I try out other languages and frameworks as well.
                    </Text>
                </Paper>
            </Grid.Col>
        </Grid>
    );
}
