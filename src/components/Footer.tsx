import { Center, Title, Container, Group, Image } from '@mantine/core';
import github from '/images/github.svg';
import linkedin from '/images/linkedin.svg';

const footerStyle = {
    backgroundColor: '#Eff0f0'
};

const year = new Date().getFullYear();

export function Footer() {
    return (
        <div style={footerStyle}>
            <Container pt={50} pb={50}>
                <Center>
                    <Title order={3}>Oskar Westmeijer &#128526; {year}</Title>
                </Center>
                <Group mt="md" align="center" justify="center">
                    <a href="https://github.com/OskarWestmeijer" aria-label="Oskar Westmeijer Github profile">
                        <Image h={30} w="auto" fit="contain" src={github} alt="Github logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
                        aria-label="Oskar Westmeijer LinkedIn profile"
                    >
                        <Image h={25} w="auto" fit="contain" src={linkedin} alt="LinkedIn logo" />
                    </a>
                </Group>
            </Container>
        </div>
    );
}
