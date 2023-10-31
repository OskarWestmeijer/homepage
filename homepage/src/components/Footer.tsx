import { Blockquote, Grid } from '@mantine/core';

export function Footer() {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
            <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                <Blockquote color="blue" cite="– Forrest Gump" mt="xl">
                    Life is like an npm install – you never know what you are going to get.
                </Blockquote>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 2, lg: 2 }} />
        </Grid>
    );
}
